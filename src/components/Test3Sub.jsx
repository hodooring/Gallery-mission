import { useEffect, useState } from "react";

const Test3Sub = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const onMove = (e) => {
        console.log('onMove')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect( ()=>{
        console.log('useEffect')
        window.addEventListener('mousemove',onMove)

        //뒷정리
        return () => {
            console.log('뒷정리-이벤트정리,시간정리')
            window.removeEventListener('mousemove',onMove)
        }

    },[])
    return (
        <div>
            <h2>마우스좌표</h2>
            <h2 style={{border:'1px solid #000', padding:5, textAlign:'center', fontSize:20}} >
            x: {x} y: {y}
            </h2>

        </div>
    );
};

export default Test3Sub;
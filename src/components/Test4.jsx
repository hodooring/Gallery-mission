import { useEffect, useState } from "react";

const Test4 = () => {
    const [count,setCount] = useState(0)
    useEffect( ()=>{
        console.log('useEffect')
        const timer = setInterval ( ()=>{
            console.log('setInterval')
            setCount(state=>state+1)
            //setCount(이전값=>이전값+1)
            //setCount(이전값=>{return 이전값+1})
            return()=>{
                clearInterval(timer)
            }
        },1000 )
    },[])
    return (
        <div>
            <h1 style={{fontSize:50, fontWeight:500}}>카운트 {count} </h1>
            <p>1초마다 1씩증가</p>
        </div>
    );
};

export default Test4;
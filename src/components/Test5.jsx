import { useEffect, useState } from "react";

const Test5 = () => {
    const [count,setCount] = useState(0)
    const [step,setStep] = useState(1)
    const changeInput = (e) => {
        const {value} =e.target
        setStep(Number(value))
    }
    useEffect( ()=> {
        const timer = setInterval( ()=>{
            setCount (state => state+step)
        },1000 )
        //뒷정리
        return () =>{
            clearInterval(timer)
        }
    },[step])
    return (
        <div>
            <h1 style={{fontSize:45}}>카운트 : {count} </h1>
            <p><input type="text" value={step} onChange={changeInput}/></p>
            <span>1초마다 input의 값이 변경만큼 증가</span>
        </div>
    );
};

export default Test5;
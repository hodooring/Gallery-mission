import { useEffect } from "react";

const Test6Sub = ({msg,setIsMsg,isMsg}) => {
    useEffect (()=>{
        const timer = setTimeout(()=>{
            setIsMsg(false)
        },3000)

        return () =>{
            clearInterval(timer)
        }
    },[isMsg])
    return (
        <>
        {
            isMsg&& <h2 style={{border:'2px solid #000', padding:20, fontSize:20, textAlign:'center', margin:'40px auto'}}>인사: {msg} </h2>  
        }

            <p>3초 후에 메세지 사라지기</p>
        </>
    );
};

export default Test6Sub;
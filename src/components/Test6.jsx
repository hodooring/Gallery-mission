import { useEffect, useState } from "react";
import Test6Sub from "./Test6Sub";

const Test6 = () => {
    const [isShow,setIsShow] = useState(true)
    const [isMsg,setIsMsg] = useState(true)
    const [msg,setMSg] = useState('hi')

    const onToggle = () => {
        setIsShow(!isShow)
    }
    const onMsg = (txt) => {
        setMSg(txt)
        setIsMsg(true)
        
    }

    return (
        <div>
            <button onClick={onToggle}>{isShow?'숨기기':'보이기'}</button>
            <p>
                <button onClick={()=>{onMsg('안냥호두')}}>호두인사</button>
                <button onClick={()=>{onMsg('안냥또리')}}>또리인사</button>
            </p>
            <hr />
            {
                isShow&&<Test6Sub msg={msg} setIsMsg={setIsMsg}  isMsg={isMsg} />
            }
            
        </div>
    );
};

export default Test6;

// isShow에 의해서 서브 보이고 숨기기 텍스트도 변경
// isMSg메세지 보이고 숨기기
// msg-sub인사글
// useEffect이용해서 3초 후에 h2사라지기 setTimeout
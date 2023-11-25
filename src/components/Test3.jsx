import { useState } from "react";
import Test3Sub from "./Test3Sub";

const Test3 = () => {
    const [isShow,setIsShow] = useState(false)
    const onToggle = () => {
        setIsShow(!isShow)
    }
    return (
        <div>
            <p>
                Test3Sub 보이기/숨기기
                <button onClick={onToggle}>
                    {isShow ? '숨기기' : '보이기'}
                </button>
            </p>
            <hr />
            {isShow&&<Test3Sub/>}
            
        </div>
    );
};

export default Test3;
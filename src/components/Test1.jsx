import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { HiCake,HiEmojiHappy } from "react-icons/hi";
import { FcCloseUpMode } from "react-icons/fc";

const Test1 = () => {
    return (
        <div>
            <h1>아이콘 사용하기</h1>
            <p style={{color:'red', fontSize:50}}>
                <AiFillHeart />
            </p>
            <i style={{color:'skyblue',fontSize:50}}><AiFillStar /></i>
            <p style={{color:'pink', fontSize:150}}><HiCake /></p>
            <i className="xi-bars"></i>
            <i style={{color:'yellow', fontSize:100}}><HiEmojiHappy /></i>
            <p style={{fontSize:150}}><FcCloseUpMode /></p>
        </div>
    );
};

export default Test1;
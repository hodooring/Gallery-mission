import { useState } from "react";

const menulist = [
    {id:1, name:'chk1', text:'딸기', isChk:false},
    {id:2, name:'chk2', text:'자두', isChk:false},
    {id:3, name:'chk3', text:'포도', isChk:false},
    {id:4, name:'chk4', text:'복숭아', isChk:false},
    {id:5, name:'chk5', text:'망고', isChk:false},
]
const Test7 = () => {
    const [data,setData] = useState(menulist)
    const changeInput= (e) => {
        const {name,checked} =e.target
        if (name==='all'){
            setData(data.map(item=>{
                return{
                    ...item, isChk:checked
                }
            }))
        }else{
            setData(data.map(item=>item.name===name?{...item,isChk:checked}:item))
        }
    }
    const [isChk,setIsChk] = useState(false)
    return (
        <div>
            <h2>회원동의 할 때 쓰는 유형</h2>
            <p>
                <input type="checkbox" name="all" id="all" value="전체" onChange={changeInput} checked={
                    data.filter(item=>item.isChk!==true).length<1
                } />
                <label htmlFor="all">전체선텍</label>
            </p>
            <hr />
            {
                data.map(item=><p key={item.id} >
                    <input type="checkbox" name={item.name} id={item.name} value={item.text} checked={item.isChk} onChange={changeInput}/>
                    <label htmlFor="chk1">{item.text}</label>
                </p>)
            }
            
        </div>
    );
};

export default Test7;
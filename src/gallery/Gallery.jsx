import { useEffect, useRef, useState } from "react";
import galleryData from "../assets/api/galleryData";
import './style.scss'
import GalleryBig from "./GalleryBig";
import GalleryList from "./GalleryList";
import GalleryArrow from "./GalleryArrow";

const Gallery = () => {
    const [ data , setData ] = useState( galleryData )
    const [ imgItem , setImgItem ] = useState( data[0] )
    const [cnt,setCnt] = useState(1)
    const total = data.length 
    const onView = ( id )  => {    
        setImgItem( data.find( item => item.id === id ) )
        setData( data.map( item => item.id === id ? 
           {...item, isClass:true } : {...item, isClass:false } ))
    }
    
    const onNext = () => {
        if (cnt===total){
            setCnt(1)
            setImgItem(data[0])
            setData(data.map((item,idx)=>({
                ...item,
                isClass:idx===0
            })))
        } else {
            setCnt(cnt+1)
            setImgItem(data[cnt])
            setData(data.map((item,idx)=>({
                ...item,
                isClass:idx===cnt
            })))
        }
    }
    const onPrev = () => {
        if (cnt===1){
            setCnt(total)
            setImgItem(data[total-1])
            setData(data.map((item,idx)>({
                ...item,
                isClass:idx===total-1
            })))
        } else {
            setCnt(cnt-1)
            setImgItem(data[cnt-2])
            setData(data.map((item,idx)=>({
                ...item,
                isClass:idx===cnt-2
            })))
        }
    }

    useEffect(()=>{
        const timer = setInterval (()=>{
            onNext()
        },4000)

        return()=>{
            clearInterval(timer)
        }
    },[cnt,data])

    return (
        <div className="wrap">
            <h1> CHRISTMAS Gallery </h1>
            <GalleryBig imgItem={imgItem} total={total} />
            <GalleryList data={data} onView={onView} />
            <GalleryArrow imgItem={imgItem} onView={onView} onNext={onNext} onPrev={onPrev} /> 
        </div>
    );
};

export default Gallery;
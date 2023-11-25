import { SlArrowLeft,SlArrowRight } from "react-icons/sl";

const GalleryArrow = ({imgItem,onView,onNext,onPrev}) => {

    return (
        <p className="arrow">
           <i onClick={onPrev} ><SlArrowLeft /></i>
           <i onClick={onNext} ><SlArrowRight /></i>
        </p>
    );
};

export default GalleryArrow;
import React, {FC, useState} from 'react';
import s from "../ModalForm/ModalForm.module.css";

type RatingPropsType = {
    eventHandle: (rating: number) => void
}

export const Rating: FC<RatingPropsType> = ({eventHandle}) => {
    const [value, setValue] = useState(0)
    const handleChangeRating = (id: number) => {
        setValue(id)
        eventHandle(id)
    }

    return (
        <div className={s.ratingBlock}>
            <Star selected={value > 0} id={1} handleEvent={handleChangeRating}/>
            <Star selected={value > 1} id={2} handleEvent={handleChangeRating}/>
            <Star selected={value > 2} id={3} handleEvent={handleChangeRating}/>
            <Star selected={value > 3} id={4} handleEvent={handleChangeRating}/>
            <Star selected={value > 4} id={5} handleEvent={handleChangeRating}/>
            <Star selected={value > 5} id={6} handleEvent={handleChangeRating}/>
            <Star selected={value > 6} id={7} handleEvent={handleChangeRating}/>
            <Star selected={value > 7} id={8} handleEvent={handleChangeRating}/>
            <Star selected={value > 8} id={9} handleEvent={handleChangeRating}/>
            <Star selected={value > 9} id={10} handleEvent={handleChangeRating}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    id: number
    handleEvent: (id: number) => void
}
const Star: FC<StarPropsType> = ({selected, id, handleEvent}) => {
    if (selected) {
        return (
            <div onClick={() => handleEvent(id)} className="fa-solid fa-star" style={{color: '#FAB005', fontSize: '23px'}}></div>
        )
    } else {
        return (
            <div onClick={() => handleEvent(id)} className="fa-solid fa-star" style={{color: '#D5D6DC', fontSize: '23px'}}></div>
        )
    }

}
import { FC } from "react";
import Pizza from "../modals/Pizza";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


interface SinglePizzaProps{
    pizza: Pizza,
}

const SinglePizza: FC <SinglePizzaProps> = ({pizza}) =>{
    return(
        <div className="pizza">
            <img src={`../../public/images/${pizza.img}`} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>

        <div className="pizza-controls">
        <CiEdit/>
        <MdDelete/>
        </div>

        </div>

    )
}


export default SinglePizza
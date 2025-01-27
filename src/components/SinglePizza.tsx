import { FC, useState } from "react";
import Pizza from "../modals/Pizza";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import EditPizzaForm from "./EditPizzaForm";


interface SinglePizzaProps{
    pizza: Pizza,
    updatePizza: (newPizza: Pizza) => void,
    deletePizza: (id: number) => void
}

const SinglePizza: FC <SinglePizzaProps> = ({pizza, updatePizza, deletePizza}) =>{

    const [edit, setEdit] = useState<boolean>(false)

    const handleToggleEdit = () => {
        setEdit(!edit)
    }

    const handleDelete = () => {
        deletePizza(pizza.id)
    }

    return(
        <div className="pizza">
            <img src={`../../public/images/${pizza.img}`} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>

        <div className="pizza-controls">
        <CiEdit onClick={handleToggleEdit}/>
        <MdDelete onClick={handleDelete}/>
        </div>
        {edit ? 
            <EditPizzaForm handleToggleEdit={handleToggleEdit} updatePizza={updatePizza} data={pizza}/> : null 
        }
        </div>

    )
}


export default SinglePizza
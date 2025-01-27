import {FC} from "react";
import Pizza from "../modals/Pizza";
import SinglePizza from "./SinglePizza";

interface DisplayPizzasProps {
    pizzasList: Pizza[],
    updatePizza: (newPizza: Pizza) => void
    deletePizza: (id:number) => void
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList, updatePizza, deletePizza}) =>{
    return(
        <div className="container">
            {pizzasList.map((pizza) => {
             return <SinglePizza deletePizza={deletePizza} updatePizza={updatePizza} key={pizza.id} pizza={pizza}/>
            })}
        </div>
    )
}

export default DisplayPizzas
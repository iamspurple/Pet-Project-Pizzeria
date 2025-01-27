import {FC, useState} from 'react'
import AddPizzaForm from './components/AddPizzaForm'
import Pizza from './modals/Pizza'
import DisplayPizzas from './components/DisplayPizzas'
import demoPizzas from './demoPizzas'

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>(demoPizzas)

  const addPizza = (newPizza:Pizza) => {
    setPizzasList(
      [...pizzasList, newPizza]
    )
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map((pizza) => pizza.id === newPizza.id ? newPizza : pizza))
  }

  const deletePizza = (id: number) => {
    const newPizzasList = (pizzasList.filter((pizza) => pizza.id !== id))
    setPizzasList(newPizzasList);
  }

  console.log(pizzasList)

  return (
   <div className="App">
      <div className="wrap">
       <h1 className="heading">Наша пиццерия</h1>
      </div>
      <AddPizzaForm
        addPizza={addPizza}
      />
      <DisplayPizzas
       deletePizza={deletePizza}
       updatePizza={updatePizza}
       pizzasList={pizzasList}
      />
   </div>
  )
}

export default App

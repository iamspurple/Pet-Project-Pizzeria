import {FC, useState} from 'react'
import AddPizzaForm from './components/AddPizzaForm'
import Pizza from './modals/Pizza'
import DisplayPizzas from './components/DisplayPizzas'

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([])

  const addPizza = (newPizza:Pizza) => {
    setPizzasList(
      [...pizzasList, newPizza]
    )
  }

  console.log(pizzasList)

  return (
   <div className="App">
      <div className="wrap">
        <span className='heading'>
          Наша пиццерия
        </span>
      </div>
      <AddPizzaForm
        addPizza={addPizza}
      />
      <DisplayPizzas
       pizzasList={pizzasList}
      />
   </div>
  )
}

export default App

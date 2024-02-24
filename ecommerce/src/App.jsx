import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <ItemListContainer greeting="Bienvenidos/as a la cocina!" />
    </>
  )
}

export default App

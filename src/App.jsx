import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home.jsx'
import ItemDetailPage from "./ItemDetailPage.jsx";
import InputCreate from "./components/InputCreate.jsx";
import './App.css'

const App = () => {
  const [data, setData] = useState(null)
  const urlApi = 'http://localhost:3000'

const fetchData = async () => {
  try {
    const response = await fetch(urlApi)
    const resData = await response.json()
    setData(resData)
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  fetchData()
}, [])

  return (
    <Router>
      <div>
        <nav>
          <Link className="home" to="/">Inicio</Link>
          <Link className="create"to="/create">Crear tarea desde React</Link>

        </nav>
        {data === null 
        ? (<div>cargando...</div>) 
        : 
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/create" element={<InputCreate data={data}/>}/>
            {data.map(item => (
              <Route key={item._id} path={`/${item._id}`} element={<ItemDetailPage item={item}/>} />
            ))
            }
            
          </Routes>
        }
        
      </div>
    </Router>
  )
};

export default App;

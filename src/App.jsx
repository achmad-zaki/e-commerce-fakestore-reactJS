import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Clothing from "./pages/Clothing"
import Header from "./components/Header"

import Jewelery from "./pages/Jewelery"
import Electronic from "./pages/Electronic"
import ProductDetail from "./pages/ProductDetail"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <Router>
      <Header/>
      <Sidebar/> 
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/clothing" element={ <Clothing/> } />
        <Route path="/jewelery" element={ <Jewelery/> } />
        <Route path="/electronic" element={ <Electronic/> } />
        <Route path="/product/:id" element={ <ProductDetail/> } />
      </Routes>
    </Router>
  )
}

export default App

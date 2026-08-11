import { Route, Routes } from "react-router-dom"
import { Navbar } from "./Components/Navbar"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { Dashboard } from "./Pages/Dashboard"
import { NotFound } from "./Pages/NotFound"
import { AddProduct } from "./Pages/AddProduct"



function App() {          


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/:name/:number" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add/product" element={<AddProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>

  )
}



export default App
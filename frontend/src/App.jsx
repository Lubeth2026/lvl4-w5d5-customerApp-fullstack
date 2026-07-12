
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateCustomer from './components/CreateCustomer'
import CustomerList from './components/CustomerList'
import Home from './components/Home'
import NavBar from './components/NavBar'


function App() {
  

  return (
    <>
      <h1>Read & Create Full Stack</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/create" element={<CreateCustomer />} ></Route>
        <Route path="/history" element={<CustomerList />} ></Route>
      </Routes>
    </>
  );
}

export default App

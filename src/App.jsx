import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import LoginPage from './components/loginpage'

import RegisterPage from './components/registerpage'





function App() {



  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      
      </Router>
     

   
      

    
      </>
  )
}

export default App

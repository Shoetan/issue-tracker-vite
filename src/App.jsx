import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import LoginPage from './components/loginpage'

import RegisterPage from './components/registerpage'

/* React router imported to make naviagating the app easy */



function App() {



  return (
    <>
      {/*BrowserRouter was imported as router and this will wrap the entire a this will make the app accesible to url manipulation */}
      <Router>
        {/* Routes will look for any changes and render the child  */}
        <Routes>
          {/* Route fixes the path and specifies what components to render */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      
      </Router>
     

   
      

    
      </>
  )
}

export default App

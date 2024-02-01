import { BrowserRouter, Routes, Route} from 'react-router-dom'
import "./index.css"
import MainPage from './components/mainPage/MainPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App

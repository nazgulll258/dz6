import { useSelector } from "react-redux"
import Navbar from "./components/Navbar"
import Page from "./page/Page"
import { selectTheme } from "./store/ThemeSlice"
import './App.css'

const App = () => {
  const select = useSelector(selectTheme)
  return (
    <div className={select ? 'darks' : 'lights'} >
      <Navbar />
       
      <Page/>
    </div>
  )
}

export default App

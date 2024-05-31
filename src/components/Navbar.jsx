
import { useDispatch, useSelector } from "react-redux"
import { selectTheme, toggleMode } from "../store/ThemeSlice"
import'../App.css'

const Navbar = () => {
  const dispatch = useDispatch()
  const selector = useSelector(selectTheme)
  const themeMode = () =>{
dispatch(toggleMode())
  }
  return (
    <div className={selector?'div-nav-dark':'div-nav-light'}>
      <a style={{textDecoration:'none'}} href="">
        blog
      </a>
      <a style={{textDecoration:'none'}} href="">about</a>
      <a style={{textDecoration:'none'}} href="">home</a>
      <a style={{textDecoration:'none'}} href="">che to</a>
      <a style={{textDecoration:'none'}} href="">tam</a>
    <button
      onClick={themeMode}
      className={selector ? 'darkMode ' : 'lightMode'}
    >
      {selector ? 'dark' : 'light'}
    </button>
  </div>
  )
}

export default Navbar

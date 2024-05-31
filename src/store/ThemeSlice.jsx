import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name:'theme',
  initialState:{
    isDarkMode:false,
  },
  reducers:{
    toggleMode:state =>{
      state.isDarkMode = !state.isDarkMode
  }
  }
})

export const {toggleMode} = themeSlice.actions
export const  selectTheme = state=>state.theme.isDarkMode

export default  themeSlice.reducer
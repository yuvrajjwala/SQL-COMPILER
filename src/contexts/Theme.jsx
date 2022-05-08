import { createContext,useState } from "react";

const themes ={
   orange:{
      backgroundColor:'#DA661B',
      color:'white'
   },
   green:{
      backgroundColor:'#0d7e65',
      color:'white'
   },
   blue:{
      backgroundColor:'#0375A5',
      color:'white'
   },dark:{
      backgroundColor:'black',
      color:'white'
   },
   light:{
      backgroundColor:'#EBEBEB',
      color:'black'
   },
   yellow:{
      backgroundColor:'rgb(237, 186, 0)',
      color:'black'
   }
}

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
   const [ColorName, setColorName] =useState(themes.blue);
   const theme = ColorName;
   const toggleTheme = (choose) =>{
      
      setColorName(themes[choose]);
   }
   return(
      <ThemeContext.Provider value={[{ColorName, theme},toggleTheme]}>
         {children}
      </ThemeContext.Provider>
   )
}
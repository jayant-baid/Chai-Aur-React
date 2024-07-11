import {createContext, useContext} from 'react'

// Initial Values
export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: ()=>{},
    lightTheme: ()=>{}
});

export const ThemeProvider = ThemeContext.Provider;

// Custom Hook 
export default function useTheme(){
    return useContext(ThemeContext)
}
// -> Now, instead of writing 2 imports, we just have to import useTheme

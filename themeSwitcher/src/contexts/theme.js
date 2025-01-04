import React, { createContext, useContext } from "react";

// Context
export const ThemeContext = React.createContext({
    themeMode: "light",
    lightTheme: () => {},
    darkTheme: () => {},
})

// Provider
export const ThemeProvider = ThemeContext.Provider

// Hooks
export default function useTheme(){
    return useContext(ThemeContext)
}
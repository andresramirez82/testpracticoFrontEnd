import { createContext, useContext } from "react"

/**
 * La idea era implemntar un sistema de state global pero no llegue con el tiempo
 * 
 * */
export type GlobalContent = {
  data: string
  setdata:(c: string) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
  data: 'Hello World', 
  setdata: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext);
import { createContext, useContext } from "react"

export type GlobalContent = {
  data: string
  setdata:(c: string) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
  data: 'Hello World', 
  setdata: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext);
import { createContext, useState } from 'react'

export const SideBarContext = createContext()

const SidebarProvider = ({children}) => {
  const [isShow, setIsShow] = useState(false)
  const handleClose = () => {
    setIsShow(false)
  }
  return (
    <SideBarContext.Provider
      value={{isShow, setIsShow, handleClose}}
    >
      {children}
    </SideBarContext.Provider>
  )
}

export default SidebarProvider
import { createContext, useContext, useState, useEffect } from 'react'
const ThmCtx = createContext()
export function ThmPrv({ children }) {
  const [thm, setThm] = useState(() => localStorage.getItem('slh-thm') || 'dark')
  useEffect(() => {
    document.documentElement.setAttribute('data-thm', thm)
    localStorage.setItem('slh-thm', thm)
  }, [thm])
  const tgl = () => setThm(p => p === 'dark' ? 'light' : 'dark')
  return <ThmCtx.Provider value={{ thm, tgl }}>{children}</ThmCtx.Provider>
}
export const useThm = () => useContext(ThmCtx)
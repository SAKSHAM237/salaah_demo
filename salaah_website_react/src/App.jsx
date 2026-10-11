import { useState, useEffect } from 'react'
import { ThmPrv } from './context/ThemeContext'
import { DataPrv } from './context/DataContext'
import Hdr from './components/Header'
import Sdb from './components/Sidebar'
import Hero from './components/Hero'
import Abt from './components/About'
import Depts from './components/Departments'
import Progs from './components/Programs'
import Evts from './components/Events'
import Soc from './components/SocialMedia'
import Ftr from './components/Footer'
import Adm from './components/AdminPanel'
import './App.css'
export default function App() {
  const [mOpn, setMOpn] = useState(false)
  const [aOpn, setAOpn] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver((es) => es.forEach(e => { if(e.isIntersecting) { e.target.classList.add('rev'); obs.unobserve(e.target) } }), { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    const run = () => document.querySelectorAll('.scr-rev:not(.rev), .scr-stg:not(.rev)').forEach(el => obs.observe(el))
    run()
    const mo = new MutationObserver(run)
    mo.observe(document.getElementById('root'), { childList: true, subtree: true })
    return () => { obs.disconnect(); mo.disconnect() }
  }, [])
  return (
    <ThmPrv>
      <DataPrv>
        <div className="app-wrp">
          <Hdr onMen={() => setMOpn(true)} onAdm={() => setAOpn(true)} />
          <Sdb opn={mOpn} cls={() => setMOpn(false)} />
          <main><Hero /><Abt /><Depts /><Progs /><Evts /><Soc /></main>
          <Ftr />
          <Adm opn={aOpn} cls={() => setAOpn(false)} />
        </div>
      </DataPrv>
    </ThmPrv>
  )
}
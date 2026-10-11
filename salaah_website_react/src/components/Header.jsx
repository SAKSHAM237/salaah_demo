import { useThm } from '../context/ThemeContext'
import './Header.css'
export default function Hdr({ onMen, onAdm }) {
  const { thm, tgl } = useThm()
  return (
    <header className="hdr">
      <div className="hdr-l">
        <button className="men-btn" onClick={onMen}><span/><span/><span/></button>
        <div className="lgo"><span className="lgo-icn">S</span><span className="lgo-txt">Salaah</span></div>
      </div>
      <div className="hdr-r">
        <button className="icn-btn" onClick={tgl}><div className={`thm-icns ${thm}`}><span>☀️</span><span>🌙</span></div></button>
        <button className="icn-btn" onClick={onAdm}>⚙️</button>
      </div>
    </header>
  )
}
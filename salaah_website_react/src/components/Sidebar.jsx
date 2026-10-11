import { useEffect } from 'react'
import './Sidebar.css'
const itms = [
  { lbl: 'About', hr: '#abt', icn: '💡' },
  { lbl: 'Departments', hr: '#dep', icn: '🏢' },
  { lbl: 'Programs', hr: '#prg', icn: '📚' },
  { lbl: 'Events', hr: '#evt', icn: '🎪' },
  { lbl: 'Social Media', hr: '#soc', icn: '🌐' }
]
export default function Sdb({ opn, cls }) {
  useEffect(() => { document.body.style.overflow = opn ? 'hidden' : '' }, [opn])
  const clk = (e, hr) => {
    e.preventDefault(); cls()
    setTimeout(() => document.querySelector(hr)?.scrollIntoView({ behavior: 'smooth' }), 300)
  }
  return (
    <>
      <div className={`sdb-ovr ${opn ? 'act' : ''}`} onClick={cls} />
      <nav className={`sdb ${opn ? 'opn' : ''}`}>
        <div className="sdb-hdr">
          <div className="lgo"><span className="lgo-icn">S</span><span className="lgo-txt">Salaah</span></div>
          <button className="sdb-cls" onClick={cls}>✕</button>
        </div>
        <div className="sdb-tg">The Mentor Community</div>
        <ul className="sdb-mn">
          {itms.map((i, idx) => (
            <li key={i.lbl} style={{ animationDelay: opn ? `${idx * 50 + 100}ms` : '0ms' }}>
              <a href={i.hr} onClick={(e) => clk(e, i.hr)}>
                <span className="mn-icn">{i.icn}</span>
                <span>{i.lbl}</span>
                <span className="mn-arr">→</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="sdb-ftr">
          <div className="sdb-ftr-ln" />
          <p>ABES Engineering College</p>
          <p className="sdb-sml">Ghaziabad, Uttar Pradesh</p>
        </div>
      </nav>
    </>
  )
}
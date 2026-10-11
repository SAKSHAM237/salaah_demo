import { useState } from 'react'
import { useDat } from '../context/DataContext'
import './Departments.css'
export default function Depts() {
  const { dat } = useDat()
  const [act, setAct] = useState(0)
  return (
    <section id="dep" className="dep">
      <div className="sec-cnt">
        <div className="sec-hdr scr-rev"><span className="sec-tg">Our Teams</span><h2 className="sec-tit">Departments</h2></div>
        <div className="dep-lyt scr-rev">
          <div className="dep-tbs">
            {dat.dep.map((d, i) => (
              <button key={d.id} className={`dep-tb ${act === i ? 'act' : ''}`} onClick={() => setAct(i)}>
                <span>{d.icn}</span><span>{d.nm}</span>
              </button>
            ))}
          </div>
          <div className="dep-dtl">
            {dat.dep[act] && (
              <div className="dtl-inr" key={act}>
                <div className="dtl-icn">{dat.dep[act].icn}</div>
                <h3>{dat.dep[act].nm}</h3>
                <p>{dat.dep[act].dsc}</p>
                <div className="dep-hls">
                  {dat.dep[act].hl.map((h, j) => <span key={j} className="dep-hl">{h}</span>)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
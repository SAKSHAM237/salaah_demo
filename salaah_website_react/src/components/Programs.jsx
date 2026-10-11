import { useDat } from '../context/DataContext'
import './Programs.css'
export default function Progs() {
  const { dat } = useDat()
  return (
    <section id="prg" className="prg">
      <div className="sec-cnt">
        <div className="sec-hdr scr-rev"><span className="sec-tg">What We Do</span><h2 className="sec-tit">Our Programs</h2></div>
        <div className="prg-grd scr-stg scr-rev">
          {dat.prg.map((p, i) => (
            <div key={p.id} className="prg-crd shm-crd">
              <div className="prg-tp">
                <div className="prg-icn">{p.icn}</div>
                <span className="prg-sts">{p.sts}</span>
              </div>
              <h3>{p.nm}</h3><p>{p.dsc}</p>
              <div className="prg-num">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
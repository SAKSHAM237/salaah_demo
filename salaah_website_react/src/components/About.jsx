import { useDat } from '../context/DataContext'
import './About.css'
export default function Abt() {
  const { dat } = useDat()
  return (
    <section id="abt" className="abt">
      <div className="sec-cnt">
        <div className="sec-hdr scr-rev">
          <span className="sec-tg">Who We Are</span>
          <h2 className="sec-tit">{dat.abt.tit}</h2>
        </div>
        <div className="abt-grd scr-rev">
          <div className="abt-crd shm-crd abt-mn"><div className="abt-icn">💡</div><h3>Our Story</h3><p>{dat.abt.dsc}</p></div>
          <div className="abt-crd shm-crd"><div className="abt-icn">🎯</div><h3>Mission</h3><p>{dat.abt.mis}</p></div>
          <div className="abt-crd shm-crd"><div className="abt-icn">🔭</div><h3>Vision</h3><p>{dat.abt.vis}</p></div>
        </div>
        <div className="ftr-grd scr-stg scr-rev">
          {[{i:'🎓',t:'Alumni Network',d:'Access to pros'},{i:'📋',t:'Placement Prep',d:'Resumes & mocks'},{i:'🚀',t:'Guidance',d:'Domain expertise'},{i:'📖',t:'Higher Studies',d:'GATE, CAT, GRE'}].map((f,k) => (
            <div key={k} className="ftr-crd"><div className="ftr-icn-w"><span>{f.i}</span></div><h4>{f.t}</h4><p>{f.d}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
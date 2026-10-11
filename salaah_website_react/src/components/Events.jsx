import { useDat } from '../context/DataContext'
import './Events.css'
export default function Evts() {
  const { dat } = useDat()
  return (
    <section id="evt" className="evt">
      <div className="sec-cnt">
        <div className="sec-hdr scr-rev"><span className="sec-tg">What's Happening</span><h2 className="sec-tit">Events</h2></div>
        <div className="evt-tl">
          <div className="evt-ln" />
          {dat.evt.map((e) => (
            <div key={e.id} className="evt-itm scr-rev">
              <div className="evt-dot" />
              <div className="evt-crd shm-crd">
                <div className="evt-dt">{e.dt}</div>
                <h3>{e.nm}</h3><p>{e.dsc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
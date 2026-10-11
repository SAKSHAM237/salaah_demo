import { useDat } from '../context/DataContext'
import './SocialMedia.css'
export default function Soc() {
  const { dat } = useDat()
  return (
    <section id="soc" className="soc">
      <div className="sec-cnt">
        <div className="sec-hdr scr-rev"><span className="sec-tg">Connect</span><h2 className="sec-tit">Follow Us</h2></div>
        <div className="soc-grd scr-stg scr-rev">
          <a href={dat.soc.ig} target="_blank" rel="noreferrer" className="soc-crd"><div className="soc-icn">📸</div><div className="soc-inf"><h3>Instagram</h3><p>@salaah_abesec</p></div></a>
          <a href={dat.soc.in} target="_blank" rel="noreferrer" className="soc-crd"><div className="soc-icn">💼</div><div className="soc-inf"><h3>LinkedIn</h3><p>Salaah Community</p></div></a>
          <a href={dat.soc.yt} target="_blank" rel="noreferrer" className="soc-crd"><div className="soc-icn">🎥</div><div className="soc-inf"><h3>YouTube</h3><p>@salaah2021</p></div></a>
        </div>
      </div>
    </section>
  )
}
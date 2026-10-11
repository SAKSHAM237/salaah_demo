import './Hero.css'
export default function Hero() {
  return (
    <section className="hro">
      <div className="hro-bg"><div className="orb o1"/><div className="orb o2"/><div className="orb o3"/></div>
      <div className="hro-cnt">
        <div className="bdg scr-rev"><span className="dot"/>🎓 ABES Engineering College</div>
        <h1 className="hro-tit scr-rev">
          <span className="hro-ln">सलाह</span>
          <span className="hro-sub">The Mentor Community</span>
        </h1>
        <p className="hro-dsc scr-rev">Bridging the gap between students and alumni — guiding your professional journey.</p>
        <div className="hro-act scr-rev">
          <a href="#abt" className="btn pri">Explore Community</a>
          <a href="#prg" className="btn sec">Our Programs</a>
        </div>
      </div>
    </section>
  )
}
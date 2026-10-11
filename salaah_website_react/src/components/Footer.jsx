import './Footer.css'
export default function Ftr() {
  return (
    <footer className="ftr">
      <div className="ftr-ln" />
      <div className="ftr-inr">
        <div className="ftr-tp">
          <div>
            <div className="ftr-lgo"><span>S</span><span>Salaah</span></div>
            <p className="ftr-txt">ABES Engineering College<br/>Ghaziabad, Uttar Pradesh</p>
          </div>
        </div>
        <div className="ftr-btm"><p>© {new Date().getFullYear()} Salaah. All rights reserved.</p></div>
      </div>
    </footer>
  )
}
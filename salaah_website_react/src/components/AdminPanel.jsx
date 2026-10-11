import { useState, useEffect } from 'react'
import { useDat } from '../context/DataContext'
import './AdminPanel.css'
export default function Adm({ opn, cls }) {
  const { dat, upd, rst } = useDat()
  const [auth, setAuth] = useState(false)
  const [pwd, setPwd] = useState('')
  const [tb, setTb] = useState('abt')
  const [err, setErr] = useState('')
  const [edtA, setEdtA] = useState(dat.abt)
  const [edtD, setEdtD] = useState(dat.dep)
  const [edtP, setEdtP] = useState(dat.prg)
  const [edtE, setEdtE] = useState(dat.evt)
  useEffect(() => {
    if(opn) { setEdtA(dat.abt); setEdtD(dat.dep); setEdtP(dat.prg); setEdtE(dat.evt); document.body.style.overflow = 'hidden' }
    else { document.body.style.overflow = '' }
    return () => { document.body.style.overflow = '' }
  }, [opn, dat])
  const lgn = (e) => { e.preventDefault(); if(pwd.toLowerCase() === 'salaah') { setAuth(true); setErr('') } else setErr('Incorrect') }
  const sav = () => { upd('abt', edtA); upd('dep', edtD); upd('prg', edtP); upd('evt', edtE); cls() }
  if(!opn) return null
  return (
    <div className="adm-ovr" onClick={cls}>
      <div className="adm-pnl" onClick={e => e.stopPropagation()}>
        <div className="adm-hdr"><h2>Admin</h2><button onClick={cls}>✕</button></div>
        {!auth ? (
          <div className="adm-lgn">
            <form onSubmit={lgn}>
              <input type="password" value={pwd} onChange={e => setPwd(e.target.value)} className="adm-inp" placeholder="Password" />
              {err && <div className="adm-err">{err}</div>}
              <div style={{fontSize:'12px',opacity:0.7,margin:'12px 0'}}>Password is "salaah" for demo purposes</div>
              <button className="adm-btn-s">Login</button>
            </form>
          </div>
        ) : (
          <>
            <div className="adm-tbs">
              {[{id:'abt',n:'About'},{id:'dep',n:'Department'},{id:'prg',n:'Program'},{id:'evt',n:'Event'}].map(t => <button key={t.id} className={`adm-tb ${tb===t.id?'act':''}`} onClick={()=>setTb(t.id)}>{t.n}</button>)}
            </div>
            <div className="adm-bdy">
              {tb === 'abt' && <div className="adm-frm"><label>Title</label><input className="adm-inp" value={edtA.tit} onChange={e=>setEdtA({...edtA, tit:e.target.value})}/><label>Desc</label><textarea className="adm-txt" value={edtA.dsc} onChange={e=>setEdtA({...edtA, dsc:e.target.value})}/></div>}
              {tb === 'dep' && edtD.map((d,i) => <div key={i} className="adm-crd"><input className="adm-inp" value={d.nm} onChange={e=>{const n=[...edtD];n[i].nm=e.target.value;setEdtD(n)}}/><textarea className="adm-txt" value={d.dsc} onChange={e=>{const n=[...edtD];n[i].dsc=e.target.value;setEdtD(n)}}/></div>)}
              {tb === 'prg' && edtP.map((p,i) => <div key={i} className="adm-crd"><input className="adm-inp" value={p.nm} onChange={e=>{const n=[...edtP];n[i].nm=e.target.value;setEdtP(n)}}/><textarea className="adm-txt" value={p.dsc} onChange={e=>{const n=[...edtP];n[i].dsc=e.target.value;setEdtP(n)}}/></div>)}
              {tb === 'evt' && edtE.map((ev,i) => <div key={i} className="adm-crd"><input className="adm-inp" value={ev.nm} onChange={e=>{const n=[...edtE];n[i].nm=e.target.value;setEdtE(n)}}/><textarea className="adm-txt" value={ev.dsc} onChange={e=>{const n=[...edtE];n[i].dsc=e.target.value;setEdtE(n)}}/></div>)}
            </div>
            <div className="adm-ftr"><button className="adm-btn-rst" onClick={()=>{rst();cls()}}>Reset to Default</button><button className="adm-btn-s" onClick={sav}>Save Changes</button></div>
          </>
        )}
      </div>
    </div>
  )
}
import { createContext, useContext, useState, useEffect } from 'react'
const DataCtx = createContext()
const defDat = {
  abt: { tit: 'About Salaah', dsc: 'Salaah is the official student mentorship and alumni connect community of ABES Engineering College.', mis: 'Connecting students directly with working alumni mentors.', vis: 'Creating an aspirational environment for alumni to give back.' },
  dep: [
    { id: 1, nm: 'Content', icn: '📝', dsc: 'Crafts content and documentation.', hl: ['Docs', 'Strategy'] },
    { id: 2, nm: 'Social', icn: '📱', dsc: 'Manages social media presence.', hl: ['Engagement', 'Creation'] },
    { id: 3, nm: 'Tech', icn: '⚙️', dsc: 'Handles technical operations.', hl: ['Web Dev', 'Tech Support'] },
    { id: 4, nm: 'Strategy', icn: '🎯', dsc: 'Plans events and tracks outcomes.', hl: ['Planning', 'Impact'] }
  ],
  prg: [
    { id: 1, nm: 'Blueprint', icn: '🗺️', dsc: 'Structured career guidance.', sts: 'Ongoing' },
    { id: 2, nm: 'Connect', icn: '🤝', dsc: '1-on-1 mentorship.', sts: 'Active' },
    { id: 3, nm: 'Meet & Greet', icn: '👋', dsc: 'Informal networking.', sts: 'Seasonal' },
    { id: 4, nm: 'Podcasts', icn: '🎙️', dsc: 'Talk shows.', sts: 'Monthly' }
  ],
  evt: [
    { id: 1, nm: 'Aarambh', dt: 'Orientation', dsc: 'Freshers orientation.', img: '' },
    { id: 2, nm: 'Webinar', dt: 'Quarterly', dsc: 'Live alumni sessions.', img: '' },
    { id: 3, nm: 'Bootcamp', dt: 'Bi-Annual', dsc: 'Hands-on technical workshops.', img: '' },
    { id: 4, nm: 'Podcast', dt: 'Monthly', dsc: 'Career conversations.', img: '' }
  ],
  soc: { ig: 'https://instagram.com/salaah_abesec', in: 'https://linkedin.com/in/salaah-the-mentor-community-29b8b3310', yt: 'https://youtube.com/@salaah2021' }
}
export function DataPrv({ children }) {
  const [dat, setDat] = useState(() => {
    const sv = localStorage.getItem('slh-dat-v2')
    return sv ? { ...defDat, ...JSON.parse(sv) } : defDat
  })
  useEffect(() => { localStorage.setItem('slh-dat-v2', JSON.stringify(dat)) }, [dat])
  const upd = (k, v) => setDat(p => ({ ...p, [k]: v }))
  const rst = () => { setDat(defDat); localStorage.removeItem('slh-dat-v2') }
  return <DataCtx.Provider value={{ dat, upd, rst }}>{children}</DataCtx.Provider>
}
export const useDat = () => useContext(DataCtx)
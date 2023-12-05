'use client'
import { useContext } from 'react'
import AppContext from '@/context/AppContext'
import Banner from '@/components/Banner/Banner'

export default function Home() {

  const { windowWidth } = useContext(AppContext)
  return (
    <div style={{
      display: 'flex',
      height: 'calc(100vh - 5rem)',
      alignItems: 'center',
      justifyContent: 'center'
    }} >
      <div
        style={{
          backgroundColor: '#164280',
          borderRadius: '.5rem',
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem',
          backgroundImage: "url('/images/background-2.png')",
          backgroundSize: '24rem',
          backgroundRepeat: 'repeat',
          boxSizing: 'border-box',
          width: '100%'
        }}
      >
        <p style={{
          margin: 'auto',
          color: '#FFF',
          fontWeight: '500',
          fontSize: '2.75rem',
          lineHeight: '3rem',
          textAlign: "center"
        }} >The D.L.J. Clive Group</p>
      </div>
      {/* <Banner isPrimary={true} text="The D.L.J. Clive Group" /> */}
    </div >
  )
}

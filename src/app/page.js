'use client'
import './home.css'

export default function Home() {

  return (
    <div style={{
      display: 'flex',
      height: 'calc(100vh - 5rem)',
      alignItems: 'center',
      justifyContent: 'center',
    }} >
      <div
        style={{
          backgroundColor: '#164280',
          borderRadius: '.25rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          backgroundImage: "url('/images/background-2.png')",
          backgroundSize: '24rem',
          backgroundRepeat: 'repeat',
          boxSizing: 'border-box',
          width: '100%',
          flexDirection: 'column'
        }}
      >
        <p style={{
          margin: 'auto',
          color: '#FFF',
          fontWeight: '500',
          fontSize: '3rem',
          lineHeight: '3rem',
          textAlign: "center"
        }} >The D.L.J. Clive Group</p>
        <hr className='home-hr' />
        <p style={{
          margin: 'auto',
          color: '#b6d8ef',
          fontWeight: '400',
          fontSize: '2.5rem',
          lineHeight: '3rem',
          textAlign: "center"
        }} >Natural Product Synthesis & Synthetic Methodology</p>
      </div>
    </div >
  )
}

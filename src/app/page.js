'use client'
import { useContext } from 'react'
import AppContext from '@/context/AppContext'
import Banner from '@/components/Banner/Banner'

export default function Home() {

  const { windowWidth } = useContext(AppContext)
  return (
    <div>
      <Banner isPrimary={true} text="The D.L.J. Clive Group" />
      Home
    </div>
  )
}

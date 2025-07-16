import { useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {

  return (
    <>
      <ProfileCard 
        image='./public/assets/img/myPicture.jpg'
        name='Nnolum Eustace C' 
        bio='Frontend Developer with a passion for building beautiful, responsive web apps.
            Lover of open-source, coffee, watching football and  writting clean code.'
        />
    </>
  )
}

export default App

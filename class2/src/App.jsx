import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='h-screen bg-black flex justify-evenly items-center'>
      <Card name='gurl' rating={4.4} img="https://images.pexels.com/photos/3541331/pexels-photo-3541331.jpeg" earning={45} rate={50} slogan="I'm a Brand designer who focuses on clarity & emotional connection." />
      
      <Card name='boy' rating={4.9} img="https://images.pexels.com/photos/3752652/pexels-photo-3752652.jpeg" earning={85} rate={80} slogan="I'm a UX designer who focuses on exquisite design & top-notch performance." />

      {/* <Card name='gal' slogan='Software Developer optimzing code snippets.' rating={4.7} rate={60} earning={67} img="https://images.pexels.com/photos/1800458/pexels-photo-1800458.jpeg" /> */}
    </div>
  )
}

export default App

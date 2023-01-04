import React, { useEffect, useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icons/256x256.png'
import nexticon from '/home/dev/icons/next.png'

import previcon from '/home/dev/icons/back.png'
import playicon from '/home/dev/icons/play.png'
import pauseicon from '/home/dev/icons/pause.png'
import './App.css';
import IconButton from './IconButton';

const MainScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(()=>{
    window.electron.ipcRenderer.on('play-end', ()=>{
      setIsPlaying(false)
      console.log('got pause')
      return 'thanks'
    })
    window.electron.ipcRenderer.on('play-resume', ()=>{
      setIsPlaying(true)
      console.log('got play')
      return 'thanks'
    })
  })
  return (
    <div className='mainbox'>
      <div className="btnbox">
        <img style={{userSelect:'none'}} width="200" alt="icon" id='cover' src={icon} />
      </div>
      <h1 style={{textAlign:'center', userSelect:'none'}} id='title'>testy b</h1>
      <h3 style={{textAlign:'center', userSelect:'none'}}id='artist'>testy b</h3>
      <h3 style={{textAlign:'center', userSelect:'none'}}id='album'>testy b</h3>
      <div className='btnbox'>
          <IconButton cmd='previtem' iconSrc={previcon}/>
          {isPlaying?<IconButton cmd='pause' iconSrc={pauseicon}/>:
          <IconButton cmd='play' iconSrc={playicon}/>}

          <IconButton cmd='nextitem' iconSrc={nexticon}/>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
      </Routes>
    </Router>
  );
}

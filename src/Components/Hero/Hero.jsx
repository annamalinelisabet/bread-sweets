import {useState} from 'react'
import './Hero.css'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import { GiWheat } from 'react-icons/gi'
import 'animate.css'

const Hero = () => {

  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <div className='Hero'>
        <div className="hero-bg">

          {/*------ CALENDAR -------*/}
          <div className={`calendar ${showCalendar ? `show` : ``}`}>
            <div className="calendar-wrapper">
              <div className="calendar-container">
                <div className="flex-div">
                  <ul className='days-list'>
                    <li className='day'>måndag</li>
                    <li className='day'>tisdag</li>
                    <li className='day'>onsdag</li>
                    <li className='day'>torsdag</li>
                    <li className='day'>fredag</li>
                    <li className='day'>lördag</li>
                    <li className='day'>söndag</li>
                  </ul>
                  <ul className='info-list'>
                    <li className='info'></li>
                    <li className='info'><a className='info' href="https://www.instagram.com/p/Cl3NkQijstB/" target="_blank" rel="noopener noreferrer">Lucia</a></li>
                    <li className='info'></li>
                    <li className='info'></li>
                    <li className='info'></li>
                    <li className='info'></li>
                    <li className='info'><a className='info' href="https://www.instagram.com/p/CWva1ChrP4I/" target="_blank" rel="noopener noreferrer">Fjärde advent</a></li>
                  </ul>

                </div>
              </div>

              <p className='week'>vecka 50</p>
              <GiWheat className='wheat'/>
              <div className='open-close' onClick={() => setShowCalendar(state => !state)}>
              {/* <div className={`open-close ${showCalendar ? `light-clr` : `animate__animated animate__heartBeat animate__repeat-3 animate__ slower animate__delay-2s`}`} onClick={() => setShowCalendar(state => !state)}> */}
                { showCalendar 
                  ? <FaAngleLeft className='arrow'/>
                  : <FaAngleRight className='arrow'/>
                }
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
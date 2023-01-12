import React, { useState, useRef, useEffect }from 'react'
import { useLocation} from 'react-router-dom'
import './Modal33.css'
import { IoIosClose } from 'react-icons/io'
import { VscInfo } from 'react-icons/vsc'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import 'animate.css';

const Modal33 = ({setModal33}) => {

  const hamRef = useRef()
  const cheeseRef = useRef()
  const salladRef = useRef()
  const tomatoRef = useRef()
  const cucumberRef = useRef()
  const optionsRef = useRef()

const location = useLocation()
const { product } = location.state


const [all, setAll] = useState({bread: '', seed: ''})

const [ham, setHam] = useState('')
const [sallad, setSallad] = useState('')
const [tomato, setTomato] = useState('')
const [cheese, setCheese] = useState('')
const [cucumber, setCucumber] = useState('')


const [show, setShow] = useState(true);
const [visable, setVisable] = useState(false)


const checkboxData = {
    ham : { state: ham, ref: hamRef},
    cheese: { state: cheese, ref: cheeseRef},
    sallad: { state: sallad, ref: salladRef},
    tomato: { state: tomato, ref: tomatoRef},
    cucumber: { state: cucumber, ref: cucumberRef}
}


const handleCheckboxChange = (e, type) => {
    const checkbox = checkboxData[type]
    const newState = checkbox.state === '' ? type : '';
    switch(type) {
        case 'ham':
            setHam(newState)
            break;
        case 'cheese':
            setCheese(newState)
            break;
        case 'sallad':
            setSallad(newState)
            break;
        case 'tomato':
            setTomato(newState)
            break;
        case 'cucumber':
            setCucumber(newState)
            break;
        default:
            break;
    }
    checkbox.ref.current.classList.toggle('struckOut', newState !== '')
}
  
  
  useEffect(() => {
    if(all.bread !== '' && all.seed !== ''){
        setVisable(true)
    }
  }, [all])

  useEffect(() => {
    if(visable){
        optionsRef.current.scrollIntoView({behavior: "smooth", block: "center"})
    }
  }, [visable])
  
  
  const onClick = () => {
    setModal33(false)

    document.body.style.overflow = 'unset';
    // funkar inte att stänga ner den när jag är längre 
    // ner på rutan
  }

  const onChange = (e) => {
    const{name, value} = e.target;
    setAll({
        ...all,
        [name]: value
    })
  }


  return (
    <div className='Modal33'>

        <div className='modal'>

            <div className='img-wrap'>
                <img src={product.img} alt="food" className='img'/> 
            </div>

            {/* <button className='btn'><IoIosClose onClick={onClick} className='btn-close'/></button> */}
            <IoIosClose onClick={onClick} className='btn-close'/>

            <div className='header'>
                <div className='head-title'>
                    <h2>{product.title}</h2>
                    <VscInfo className='info' />
                </div>
                    <p>från {product.price} kr</p>
            </div>

            <div className='box'>
                <h3 className='rec-head-title'>Obligatoriska val</h3>
                <p className='rec-head-txt'>Vi vill att din order ska bli precis i din smak</p>

                <div className='rec'>

                    <div className='rec-title'>
                        <p>1. Välj bröd</p>
                    </div>

                    <div className='radio-div'>
                        <input id='1' value={'light'} onChange={onChange} type="radio" name='bread' className='radio-btn' checked={all.bread === 'light'}/>
                        <label htmlFor="bread" className='radio-title'>Ljust</label>
                    </div>

                    <div className='radio-div'>
                        <input id='2' value={'dark'} onChange={onChange} type="radio" name='bread' className='radio-btn' checked={all.bread === 'dark'}/>
                        <label htmlFor="bread" className='radio-title'>Mörkt</label>
                    </div>

                   { all.bread !== '' &&
                   
                        <div className='check-mark'></div>
                    }
                </div>

                <div className='rec'>

                    <div className='rec-title'>
                        <p>2. Välj Frön</p>
                    </div>

                    <div className='radio-div'>
                        <input id='1' value={'light'} onChange={onChange} type="radio" name='seed' className='radio-btn' checked={all.seed === 'light'}/>
                        <label htmlFor="seed" className='radio-title'>Solrosfrön</label>
                    </div>

                    <div className='radio-div' >
                        <input id='2' value={'dark'} onChange={onChange} type="radio" name='seed' className='radio-btn' checked={all.seed === 'dark'}/>
                        <label htmlFor="seed" className='radio-title'>Linfrön</label>
                    </div>

                   { all.seed !== '' &&
                   
                        <div className='check-mark'></div>
                    }
                </div>

                { visable && 
                        <>
                        <div className='info-wrap' ref={optionsRef}>
                            <h3>Något extra?</h3>
                            <p>Anpassa din produkt och/eller lägg till något extra</p>
                        </div>
                        
                        <div className='adapt-wrapper animate__animated animate__fadeInUp' id='sec-section'>
                        <div className='adapt'>
                            <div className='title-wrapper'>
                                <h3>Anpassa din order</h3>
                                <button onClick={() => setShow(!show)} className="close-btn">
                                    { show === true ? <MdKeyboardArrowDown className='close-icon animate__animated animate__slideInDown' /> :  <MdKeyboardArrowUp className='close-icon animate__animated animate__slideInUp'/> }
                                </button>
                            </div>

                            { show &&
                                
                                <div className='all-wrapper'>
                                <div className='add-txt'>
                                    <h4>Lägg till</h4>
                                    <p>Klicka i de tillbehören du vill lägga till</p>
                                </div>

                                <div className='d-flex'>
                                    <label className='form-control'>
                                        Salami
                                        <input type="checkbox" name='add' className='input'/>
                                        <span className='newCheck'></span>
                                    </label>
                                    <p>+10kr</p>
                                </div>

                                <div className='d-flex'>
                                    <label className='form-control'>Kalkon
                                        <input type="checkbox" name='add' className='input'/>
                                        <span className='newCheck'></span>
                                    </label>
                                    <p>+10kr</p>
                                </div>

                                <div className='d-flex'>
                                    <label className='form-control'>Brie
                                        <input type="checkbox" name='add' className='input'/>
                                        <span className='newCheck'></span>
                                    </label>
                                    <p>+10kr</p>
                                </div>

                                <div className='add-wrapper'>
                                    <div className='add-txt'>
                                        <h4>Ta bort</h4>
                                        <p>Klicka ur de tillbehören du inte vill ha</p>
                                    </div>

                                        <label className='form-control' ref={hamRef}>Skinka
                                        {/* <label className='form-control'>Skinka */}
                                            {/* <input type="checkbox" name='remove' className='input' value={"ham"} checked={ham === ''} onChange={onChange1}/> */}
                                            <input type="checkbox" name='remove' className='input' value={"ham"} checked={ham === ''} onChange={(e) => handleCheckboxChange(e, 'ham')}/>
                                            <span className='newCheck'></span>
                                        </label>

                                            <label className='form-control' ref={cheeseRef}>Ost
                                                <input type="checkbox" name='remove' className='input remove' value={"cheese"} checked={cheese === ''} onChange={(e) => handleCheckboxChange(e, 'cheese')}/>
                                                <span className='newCheck'></span>
                                            </label>


                                        <label className='form-control' ref={salladRef}>Sallad
                                            <input type="checkbox" name='remove' className='input' value={"sallad"} checked={sallad === ''} onChange={(e) => handleCheckboxChange(e, 'sallad')}/>
                                            <span className='newCheck'></span>
                                        </label>

                                        <label className='form-control struck-out' ref={tomatoRef}>Tomat
                                            <input type="checkbox" name='remove' className='input' value={"tomato"} checked={tomato === ''} onChange={(e) => handleCheckboxChange(e, 'tomato')}/>
                                            <span className='newCheck'></span>
                                        </label>

                                        <label className='form-control struck-out' ref={cucumberRef}>Gurka
                                            <input type="checkbox" name='remove' className='input' value={"cucumber"} checked={cucumber === ''} onChange={(e) => handleCheckboxChange(e, 'cucumber')}/>
                                            <span className='newCheck'></span>
                                        </label>

                                </div>

                            </div>
                            
                            }
                        </div>
                    </div>
                    </>
                }
            </div>
        </div>
    </div>
  )
}

export default Modal33
import React,{ useState }from 'react'
import { useLocation} from 'react-router-dom'
import './Modal33.css'
import { IoIosClose } from 'react-icons/io'
import { VscInfo } from 'react-icons/vsc'

const Modal33 = ({setModal33}) => {

  const location = useLocation()
  const { product } = location.state
  const [bread, setBread] = useState('')

  const [ham, setHam] = useState('')
  const [sallad, setSallad] = useState('')
  const [tomato, setTomato] = useState('')
  const [cheese, setCheese] = useState('')
  const [cucumber, setCucumber] = useState('')

  const onClick = () => {
    setModal33(false)

    document.body.style.overflow = 'unset';
  }

  const onChange = (option) => {
    setBread(option)
  }

  const onChange1 = () => {
    if(ham === ''){
        setHam('ham')
    }else {
        setHam('')
    }
  }
  const onChange2 = () => {
    if(ham === ''){
        setCheese('cheese')
    }else {
        setCheese('')
    }
  }
  const onChange3 = () => {
    if(sallad === ''){
        setSallad('sallad')
    }else {
        setSallad('')
    }
  }
  const onChange4 = () => {
    if(tomato === ''){
        setTomato('tomato')
    }else {
        setTomato('')
    }
  }
  const onChange5 = () => {
    if(cucumber === ''){
        setCucumber('cucumber')
    }else {
        setCucumber('')
    }
  }

  return (
    <div className='Modal33'>

        <div className='modal'>

            <div className='img-wrap'>
                <img src={product.img} alt="food" className='img'/> 
            </div>

                <button onClick={onClick} className='btn'><IoIosClose className='btn-close'/></button>

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
                        <input value={'light'} onChange={onChange} type="radio" name='bread' className='radio-btn'/>
                        <label htmlFor="bread" className='radio-title'>Ljust</label>
                    </div>

                    <div className='radio-div'>
                        <input value={'dark'} onChange={onChange} type="radio" name='bread' className='radio-btn'/>
                        <label htmlFor="bread" className='radio-title'>Mörkt</label>
                    </div>

                   { bread !== '' &&
                   
                        <div className='check-mark'></div>
                    }
                </div>

                <div className='adapt-wrapper'>

                    <div className='info-wrap'>
                        <h3>Något extra?</h3>
                        <p>Anpassa din produkt och/eller lägg till något extra</p>
                    </div>
                    
                    <div className='adapt'>
                        <div className='op-title'>
                            <h3>Anpassa din order</h3>
                        </div>

                        <div className='add-txt'>
                            <h4>Lägg till</h4>
                            <p>Klicka i de tillbehören du vill ha</p>
                        </div>

                        {/* <div className='input-wrap'> */}
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
                        {/* </div> */}

                        <div className='add-txt'>
                            <h4>Ta bort</h4>
                            <p>Klicka ur de tillbehören du inte vill ha</p>
                        </div>

                            <label className='form-control'>
                                <p className='checkbox-title'>Skinka</p>
                                <input type="checkbox" name='remove' className='input' value={"ham"} checked={ham === ''} onChange={onChange1}/>
                                <span className='newCheck'></span>
                            </label>

                            <div className='form-control'>
                                <label className='checkbox-title'>Ost/funkar ej</label>
                                <input type="checkbox" name='remove' className='input remove' value={"cheese"} checked={cheese === ''} onChange={onChange2}/>
                                <span className='newCheck'></span>
                            </div>

                            <label className='form-control struck-out'>Sallad
                                <input type="checkbox" name='remove' className='input' value={"sallad"} checked={sallad === ''} onChange={onChange3}/>
                                <span className='newCheck'></span>
                            </label>

                            <label className='form-control struck-out'>Tomat
                                <input type="checkbox" name='remove' className='input' value={"tomato"} checked={tomato === ''} onChange={onChange4}/>
                                <span className='newCheck'></span>
                            </label>

                            <label className='form-control struck-out'>Gurka
                                <input type="checkbox" name='remove' className='input' value={"cucumber"} checked={cucumber === ''} onChange={onChange5}/>
                                <span className='newCheck'></span>
                            </label>

                    </div>
                </div>

            </div>


        </div>
    </div>
  )
}

export default Modal33
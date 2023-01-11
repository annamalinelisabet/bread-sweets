import React, { useState } from 'react'
import './Modal14.css'
import { VscInfo } from 'react-icons/vsc'
import { IoIosClose, IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { HiMinus, HiPlus } from 'react-icons/hi'

const Modal14 = ({ setModal14 }) => {

    const [oats, setOats] = useState('')
    const [butter, setButter] = useState('butter')
    const [price, setPrice] = useState(27)
    const [quantity, setQuantity] = useState(1)
    const [showBox1, setShowBox1] = useState(true)
    const [showBox2, setShowBox2] = useState(true)
    const [showBox3, setShowBox3] = useState(false)

    const onChange1 = e => {
        setButter(e.target.value)
    }
    const onChange2 = e => {
        setOats(e.target.value)
        setPrice(e.target.value)
        setShowBox3(true)
    }

    // const [state, setState] = useState({
    //     oats: '',
    //     butter: 'butter',
    //     price: 27,
    //     quantity: 1,
    //     showBox1: true,
    //     showBox2: true,
    //     showBox3: false
    //   });

    //   const onChange = (event) => {
    //     const { name, value } = event.target;
    //     setState({
    //       ...state,
    //       [name]: value
    //     });
    //   };

    const handleClose = () => {
        setModal14(false)
        
        document.body.style.overflow = 'unset';

    }

    const changeQuantity = (change) => {
        if(change === 'minus' && quantity > 1 ) {
            setQuantity(quantity -1)
        }
        if(change === 'plus' ) {
            setQuantity(quantity +1)
        }
    }

    // const changeQuantity = (change) => {
    //     if (change === "minus" && state.quantity > 1) {
    //       setState({ ...state, quantity: state.quantity - 1 });
    //     }
    //     if(change === 'plus') {
    //         setState({ ...state, quantity: state.quantity + 1 });
    //     }


  return (
    <div className='Modal14'>
        <div className="modal">

            <div className="top-div">
                <div className="title-close">
                    <div className='title-div'>
                        <h2>CHOKLADBOLL</h2>
                        <VscInfo />
                    </div>
                    <IoIosClose className='close'onClick={handleClose}/>
                </div>
                <p>från 27 kr</p>
            </div>


            <div className="box-wrapper">
                <h3 className='choose-title'>OBLIGATORISKA VAL</h3>
                <p className='choose-subtitle'>Vi vill att din order ska bli precis i din smak.</p>


                <div className="box box1">
                    <div className="box-top">
                        <p className='choice'>1. Välj fett</p>
                        { showBox1 ? <IoIosArrowUp className='arrow' onClick={() => setShowBox1(false)}/> : <IoIosArrowDown className='arrow' onClick={() => setShowBox1(true)}/>}
                        {/* {state.showBox1 ? (
                        <IoIosArrowUp
                            className="arrow"
                            onClick={() => setState({ ...state, showBox1: false })}
                        />
                        ) : (
                        <IoIosArrowDown
                            className="arrow"
                            onClick={() => setState({ ...state, showBox1: true })}
                        />
                        )} */}
                    </div>
                    { showBox1 &&
                        <div className="radio-hej">
                            <div className='input-div-modal'>
                                <input type="radio" name='butter' value={'butter'} checked={butter === 'butter'} onChange={onChange1}/>
                                <label htmlFor="b">Smör</label>
                            </div>
                            <div className="flex-modal">
                                <div className='input-div-modal'>
                                    <input type="radio" name='butter' value={'margin'} checked={butter === 'margin'} onChange={onChange1}/>
                                    <label htmlFor="b">Margarin</label>
                                </div>
                                <p className='modal-price'></p>
                            </div>
                        </div>
                     }
                </div>
                <div className="box box2">
                    <div className="box-top">
                        <p className='choice'>2. Välj gryn</p>
                        { showBox2 ? <IoIosArrowUp className='arrow' onClick={() => setShowBox2(false)}/> : <IoIosArrowDown className='arrow' onClick={() => setShowBox2(true)}/>}
                        {/* {state.showBox2 ? (
                        <IoIosArrowUp
                            className="arrow"
                            onClick={() => setState({ ...state, showBox2: false })}
                        />
                        ) : (
                        <IoIosArrowDown
                            className="arrow"
                            onClick={() => setState({ ...state, showBox2: true })}
                        />
                        )} */}
                    </div>
                    { showBox2 &&
                        <div className="radio-hej">
                            <div className='input-div-modal'>
                                <input type="radio" name='oats' value={27} onChange={onChange2}/>
                                <label htmlFor="oats">Havregryn</label>
                            </div>
                            <div className="flex-modal">
                                <div className='input-div-modal'>
                                    <input type="radio" name='oats' value={34} onChange={onChange2}/>
                                    <label htmlFor="oats">Glutenfria havregryn</label>
                                </div>
                                <p className='modal-price'>+ 7 kr</p>
                            </div>
                        </div>
                     }
                </div>

                <div className="box box3">
                    <div className="box-top">
                        <p className='choice'>3. Välj topping</p>
                        { showBox3 ? <IoIosArrowUp className='arrow' onClick={() => setShowBox3(false)}/> : <IoIosArrowDown className='arrow' onClick={() => setShowBox3(true)}/>}
                        {/* {state.showBox3 ? (
                        <IoIosArrowUp
                            className="arrow"
                            onClick={() => setState({ ...state, showBox3: false })}
                        />
                        ) : (
                        <IoIosArrowDown
                            className="arrow"
                            onClick={() => setState({ ...state, showBox3: true })}
                        />
                        )} */}
                    </div>
                    <small className='topping'>1-2 stycken</small>
                    { showBox3 &&
                        <div className="radio-hej">
                            <div className='input-div-modal'>
                                <input type="radio" name='oats' value={27} onChange={onChange2}/>
                                <label htmlFor="oats">Havregryn</label>
                            </div>
                            <div className="flex-modal">
                                <div className='input-div-modal'>
                                    <input type="radio" name='oats' value={34} onChange={onChange2}/>
                                    <label htmlFor="oats">Glutenfria havregryn</label>
                                </div>
                                <p className='modal-price'>+ 7 kr</p>
                            </div>
                        </div>
                     }
                </div>

            </div>

            <div className="bottom-div">
                <div className="plus-minus">
                    <HiMinus className={`minus ${quantity > 1  ? `minus-active` : ``}` } onClick={() => changeQuantity('minus')}/>
                    <p className='quantity'>{quantity}</p>
                    <HiPlus className='plus'onClick={() => changeQuantity('plus')}/>
                </div>
                <button className='btn add-to-cart'><p>Lägg till i varukorg</p> <p className='btn-price'>{price} kr</p></button>
            </div>

        </div>
    </div>
  )
}


export default Modal14
import React, { useEffect, useState, useRef } from 'react'
import NewProductCard from '../../Components/NewProductCard/NewProductCard';
import './ProductsView.css'
import Filter from '../../Components/Filter/Filter'
import products  from '../../products.json'

const ProductsView = () => {

    const navref = useRef()

    const [active, setActive] = useState('')

    const [gluten, setGluten] = useState(false)
    const [lactose, setLactose] = useState(false)
    const [vegan, setVegan] = useState(false)

    const [category, setCategory] = useState(1)

    const [popular, setPopular] = useState([])
    const [filtred, setFiltred] = useState([])


    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});
      }, [])

    useEffect(() => {        
       setPopular(products.filter(product => product.tag === 'popular'))
       setFiltred(products.filter(product => product.category === category))    
    }, [category])


    useEffect(() => {   
        if(gluten) {
            setFiltred(products.filter(product => product.category === category && product.gluten === true))  
            setPopular(products.filter(product => product.tag === 'popular' && product.gluten === true)) 
            setLactose(false)
            setVegan(false)
        }
        else {
            setFiltred(products.filter(product => product.category === category)) 
            setPopular(products.filter(product => product.tag === 'popular'))
        }
    }, [gluten])

    useEffect(() => {   
        if(lactose) {
            setFiltred(products.filter(product => product.category === category && product.lactose === true))
            setPopular(products.filter(product => product.tag === 'popular' && product.lactose === true))    
            setGluten(false)
            setVegan(false)
        }
        else {
            setFiltred(products.filter(product => product.category === category)) 
            setPopular(products.filter(product => product.tag === 'popular'))
        }
    }, [lactose])

    useEffect(() => {   
        if(vegan) {
            setFiltred(products.filter(product => product.category === category && product.vegan === true))
            setPopular(products.filter(product => product.tag === 'popular' && product.vegan === true))    
            setLactose(false)
            setGluten(false)
        }
        else {
            setFiltred(products.filter(product => product.category === category)) 
            setPopular(products.filter(product => product.tag === 'popular'))
        }
    }, [vegan])


  return (
    <div className='ProductsView frame'>
        <div className="container">
            <Filter setCategory={setCategory}/>

            <div className='allergies-wrap'>


                <div ref={navref} className='allergies-icon gluten' onClick={() => setGluten(state => !state)}>G<p className='tooltiptext'>Gluten</p></div>
                <div ref={navref} className='allergies-icon lactose' onClick={() => setLactose(state => !state)}>L<p className='tooltiptext'>Laktos</p></div>
                <div ref={navref} className='allergies-icon vegan' onClick={() => setVegan(state => !state)}>V<p className='tooltiptext'>Vegan</p></div>

            </div>
            { gluten && !filtred.length && <p className='info-text'>Tyvärr har vi inget glutenfritt i denna kategori</p> }
            { lactose && !filtred.length && <p className='info-text'>Tyvärr har vi inget laktosfritt i denna kategori</p> }
            { vegan && !filtred.length && <p className='info-text'>Tyvärr har vi inget veganskt i denna kategori</p> }
            {
                category === 1 ? 
                <div className='category-wrapper'>

                    {  popular.map(product => 
                        <NewProductCard key={product.id} product={product} />

                    {/* { products.filter(product => product.tag === 'popular').map(product => 
                        <NewProductCard key={product.id} product={product} />
                    )
                    } */}
                    {  
                    popular.sort((a) => a.tag === 'new').map(product => 
                        <NewProductCard key={product.id} product={product}   />

                    )
                    }
                </div>
                :
                <div className='category-wrapper'>

                    { filtred.map(product => 

                    {/* { products.filter(product => product.category === category).map(product => 
                        <NewProductCard key={product.id} product={product}/>
                    )
                    } */}
                    { filtred.sort(product => product.tag === 'new').map(product => 

                        <NewProductCard key={product.id} product={product}/>
                    )
                    }
                </div>
            }
        </div>
    </div>
  )
}

export default ProductsView
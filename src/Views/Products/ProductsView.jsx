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
    
    


  return (
    <div className='ProductsView frame'>
        <div className="container">
            <Filter setCategory={setCategory}/>

            <div className='allergies-wrap'>
                <div ref={navref} className='allergies-icon gluten' onClick={() => setGluten(true)}>G<p className='tooltiptext'>Gluten</p></div>
                <div ref={navref} className='allergies-icon lactose' onClick={() => setLactose(true)}>L<p className='tooltiptext'>Laktos</p></div>
                <div ref={navref} className='allergies-icon vegan' onClick={() => setVegan(true)}>V<p className='tooltiptext'>Vegan</p></div>
            </div>
            {
                category === 1 ? 
                <div className='category-wrapper'>
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
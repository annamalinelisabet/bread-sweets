import React, { useEffect, useState } from 'react'
import NewProductCard from '../../Components/NewProductCard/NewProductCard';
import './ProductsView.css'
import Filter from '../../Components/Filter/Filter'
import products  from '../../products.json'



const ProductsView = () => {

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
                <div className='allergies-icon gluten' onClick={() => setGluten(true)}>G</div>
                <div className='allergies-icon lactose' onClick={() => setLactose(true)}>L</div>
                <div className='allergies-icon vegan' onClick={() => setVegan(true)}>V</div>
            </div>
            {
                category === 1 ? 
                <div className='category-wrapper'>
                    {/* { products.filter(product => product.tag === 'popular').map(product => 
                        <NewProductCard key={product.id} product={product} />
                    )
                    } */}
                    {  popular.map(product => 
                        <NewProductCard key={product.id} product={product} />
                    )
                    }
                </div>
                :
                <div className='category-wrapper'>
                    {/* { products.filter(product => product.category === category).map(product => 
                        <NewProductCard key={product.id} product={product}/>
                    )
                    } */}
                    { filtred.map(product => 
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
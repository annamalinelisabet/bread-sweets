import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NewProductCard from '../../Components/NewProductCard/NewProductCard';
import './ProductsView.css'
import Filter from '../../Components/Filter/Filter'
import products  from '../../products.json'
// import { ImGift } from 'react-icons/im';

const ProductsView = () => {

    const [allergy, setAllergy] = useState('')
    const [category, setCategory] = useState(1)
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')

    const [filtred, setFiltred] = useState([])


    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});
      }, [])

    useEffect(() => {  
        if(category ===1) {
            setFiltred(products.filter(product => product.tag === 'popular'))
        }
        else {
            setFiltred(products.filter(product => product.category === category))    
        }

    }, [category])


    const handleClick = (click) => {
        if(click === allergy){
            setAllergy('')
            if(category === 1) {
                setFiltred(products.filter(product => product.tag === 'popular'))
            } else {
                setFiltred(products.filter(product => product.category === category)) 
            }
        }
        else {
            setAllergy(click)
            if(category === 1) {
                setFiltred(products.filter(product => product.tag === 'popular' && product.allergy === click)) 
            } else {
                setFiltred(products.filter(product => product.category === category && product.allergy === click))  
            }
        }
    }


  return (
    <div className='ProductsView frame'>
        <h1 className='top-header'>SORTIMENT</h1>
        <div className="container">
            <Filter setCategory={setCategory} setAllergy={setAllergy} setName={setName} setDesc={setDesc}/>
            <div className="flex-div">
                <div className='allergies-wrap'>

                    <div className={`allergies-icon gluten ${allergy === 'gluten' ? 'active' : ''}`} onClick={() => handleClick('gluten')}>G<p className='tooltiptext'>Gluten</p></div>
                    <div className={`allergies-icon lactose ${allergy === 'lactose' ? 'active' : ''}`} onClick={() => handleClick('lactose')}>L<p className='tooltiptext'>Laktos</p></div>
                    <div className={`allergies-icon vegan ${allergy === 'vegan' ? 'active' : ''}`} onClick={() => handleClick('vegan')}>V<p className='tooltiptext'>Vegan</p></div>

                </div>
                <div className='header-div'>
                    <h1>{name}</h1>
                    <p>{desc}</p>
                </div>
            </div>
            { allergy === 'gluten' && !filtred.length && <p className='info-text'>Tyvärr har vi inget glutenfritt i denna kategori. <Link to="/contact" className='all-link'>Hör gärna av dig så kanske vi kan lösa det!</Link></p> }
            { allergy === 'lactose' && !filtred.length && <p className='info-text'>Tyvärr har vi inget laktosfritt i denna kategori. <Link to="/contact" className='all-link'>Hör gärna av dig så kanske vi kan lösa det!</Link></p> }
            { allergy === 'vegan' && !filtred.length && <p className='info-text'>Tyvärr har vi inget veganskt i denna kategori. <Link to="/contact" className='all-link'>Hör gärna av dig så kanske vi kan lösa det!</Link></p> }
                            
            <div className='category-wrapper'>
                { filtred.map(product => <NewProductCard key={product.id} product={product}/>) }
            </div>            
            
        </div>
    </div>
  )
}

export default ProductsView
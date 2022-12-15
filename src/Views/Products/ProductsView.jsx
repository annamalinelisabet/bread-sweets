import React, {useEffect, useState} from 'react'
import NewProductCard from '../../Components/NewProductCard/NewProductCard';
import './ProductsView.css'

const ProductsView = () => {

    const [category, setCategory] = useState(1)

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});
      }, [])

    // !  FIXA SÅ DEN AKTUELLA BLIR MARKERAD!!! Gör en funktion med onClick??
      

  return (
    <div className='ProductsView frame'>
        <div className="container">
            <h1>sortiment</h1>
            <div className="category">
                <h3 onClick={() => setCategory(1)}>Populärt</h3>
                <h3 onClick={() => setCategory(2)}>Bröd</h3>
                <h3 onClick={() => setCategory(3)}>Tårtor</h3>
            </div>
            {
                category === 1 &&
                <div className='category-wrapper'>
                    <NewProductCard title={'surdeg ljus'} price={'129'} popular={false} news={true} saldo={'high'} img={'https://gastrogate.com/thumbs2/1000/files/32894/sMGCGc2SUaWyX-iM0_oDfQHPDlptvgMWp-IiIenWlbAHOK89abUrmULjs5YKqvbN/original.jpg?ext=https://locousercontent.com/sMGCGc2SUaWyX-iM0_oDfQHPDlptvgMWp-IiIenWlbAHOK89abUrmULjs5YKqvbN/original.jpg'}/>
                    <NewProductCard title={'minibrytbröd hejhej ljus'} price={'21'} popular={false} news={false} saldo={'low'} img={'https://gastrogate.com/thumbs2/1000/files/32894/OUESuGISD9WpWS0YIWRUt-KLegKS2t7gfzZDBxLjB-EFu267p09j0C2v8HYBOWZZ/original.jpg?ext=https://locousercontent.com/OUESuGISD9WpWS0YIWRUt-KLegKS2t7gfzZDBxLjB-EFu267p09j0C2v8HYBOWZZ/original.jpg'}/>
                    <NewProductCard title={'Sesambagel'} price={'21'} popular={false} news={false} saldo={'out'} img={'https://gastrogate.com/thumbs2/1000/files/32894/vMI-PgK55XrlbYxvgRnCF4sU-tMEKoe3bnvjx-AbZxbFUx3XYhsqA_PSijk9ZOmF/original.jpg?ext=https://locousercontent.com/vMI-PgK55XrlbYxvgRnCF4sU-tMEKoe3bnvjx-AbZxbFUx3XYhsqA_PSijk9ZOmF/original.jpg'} />
                    <NewProductCard title={'fikonråg'} price={'63'} popular={false} news={false} saldo={'high'} img={'https://gastrogate.com/thumbs2/1000/files/32894/l3YNk3FE4YWZGNTvceXlNKxEP08JrMMdkpKUMmerijVdiFem2sIRjmTqRf3c_7So/original.jpg?ext=https://locousercontent.com/l3YNk3FE4YWZGNTvceXlNKxEP08JrMMdkpKUMmerijVdiFem2sIRjmTqRf3c_7So/original.jpg'} />
                </div>
            }
            {
                category === 2 &&
                <div className='category-wrapper'>
                    <NewProductCard title={'hej hej'} price={'29'} popular={false} news={true} saldo={'high'} img={''} />
                    <NewProductCard title={''} price={''} popular={false} news={false} saldo={'high'} img={''} />
                    <NewProductCard title={''} price={''} popular={false} news={false} saldo={'high'} img={''} />
                </div>
            }
            {
                category === 3 &&
                <div className='category-wrapper'>
                    <NewProductCard title={''} price={''} popular={true} news={false} saldo={'high'} img={''} />
                </div>
            }
        </div>
    </div>
  )
}

export default ProductsView
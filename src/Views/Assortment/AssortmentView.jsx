import React, {useEffect, useRef} from 'react'
// import { useLocation } from 'react-router-dom'
import './AssortmentView.css'
import Photo from '../../Images/assortment.jpg'
import ProductCard from '../../Components/ProductCard/ProductCard'

const AssortmentView = () => {

  // const location = useLocation()
  // const { from } = location.state

  useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'instant'}); 
  }, [])



  const pralineRef = useRef();
  const breadRef = useRef();
  const bunsRef = useRef();
  const smallRef = useRef();
  const pastryRef = useRef();
  const cakesRef = useRef();
  const cookieRef = useRef();
  // const drinkRef = useRef();
  const sandwichRef = useRef();
  const packedRef = useRef();
  

  return (
    <div className='AssortmentView frame'>
        <div className="img-div">
          <img src={Photo} alt="Cinnamon buns" />
        </div>
        <h1 className='top-header'>sortiment</h1>
      <div className="wrapper container">
        <ul className='list'>
            <li onClick={() => pralineRef.current.scrollIntoView({behavior: "smooth", block: "center"})}>Praliner</li>
            <li onClick={() => breadRef.current.scrollIntoView({behavior: "smooth", block: "center"})}>Bröd</li>
            <li onClick={() => bunsRef.current.scrollIntoView({behavior: "smooth", block: "center"})}>kaffebröd</li>
            <li onClick={() => smallRef.current.scrollIntoView({behavior: "smooth", block: "center"})}>bitar</li>
            <li onClick={() => pastryRef.current.scrollIntoView({behavior: "smooth", block: "center"})}>bakelser</li>
            <li onClick={() => cakesRef.current.scrollIntoView({behavior: "smooth", block: "center"})}>tårtor</li>
            <li onClick={() => cookieRef.current.scrollIntoView({behavior: "smooth", block: "center"})}>kakor</li>
            {/* <li onClick={() => drinkRef.current.scrollIntoView({behavior: "smooth", block: "center"})}>dryck</li> */}
            <li onClick={() => sandwichRef.current.scrollIntoView({behavior: "smooth", block: "center"})}>smörgåsar</li>
            <li onClick={() => packedRef.current.scrollIntoView({behavior: "smooth", block: "center"})}>förpackat</li>
          </ul>
          <div className="grid-wrapper">
            <h1 className='header' ref={pralineRef} >Praliner</h1>
            <div className='sortiment'>
              <ProductCard title={'espresso'} desc={'Mörk pralin med espressotryffel'} img={'https://gastrogate.com/thumbs2/1000/files/32894/eQswplzQcobXTFWtunLZXmAKLC0Ji1fVtT3uSG0a8HPAjlCy8y2EP8j3RPKGevVV/original.jpg?ext=https://locousercontent.com/eQswplzQcobXTFWtunLZXmAKLC0Ji1fVtT3uSG0a8HPAjlCy8y2EP8j3RPKGevVV/original.jpg'} price={'22'}/>
              <ProductCard title={'saltlakrits'} desc={'Ljus chokladtryffel, lakrits och salmiak'} img={'https://gastrogate.com/thumbs2/1000/files/32894/RLGbhpBFHcIaXqvIU0npEnoeApKH745pe6hjDZwQYF-19R6E2eIWZq0UEu2AMq9-/original.jpg?ext=https://locousercontent.com/RLGbhpBFHcIaXqvIU0npEnoeApKH745pe6hjDZwQYF-19R6E2eIWZq0UEu2AMq9-/original.jpg'} price={'19'}/>
              <ProductCard title={'Citroncheesecake'} desc={'Citronmarmelad, cream cheese-tryffel och digestivekrisp'} img={'https://gastrogate.com/thumbs2/1000/files/32894/w6k6TAg1FuR98aSYBgu0HORCt0cKBPrckfwWtTmEASG4V3_EvOSvH-STqsmzrZEv/original.jpg?ext=https://locousercontent.com/w6k6TAg1FuR98aSYBgu0HORCt0cKBPrckfwWtTmEASG4V3_EvOSvH-STqsmzrZEv/original.jpg'} price={'22'}/>
              <ProductCard title={'rom'} desc={'Mandelpraliné, Don Papa rom'} img={'https://gastrogate.com/thumbs2/1000/files/32894/_RGBZQeVuKleYUC1t-gSohIb5nquCZFOt_zqpVDtjybuWqVpXvAMqzGAYpi8RNvS/original.jpg?ext=https://locousercontent.com/_RGBZQeVuKleYUC1t-gSohIb5nquCZFOt_zqpVDtjybuWqVpXvAMqzGAYpi8RNvS/original.jpg'} price={'22'}/>
              <ProductCard title={'present 6 st'} desc={'6 st mixade praliner i presentförpackning'} img={'https://gastrogate.com/thumbs2/1000/files/32894/tM0xXI0wHlRqFuhHMZPJu4kMQ0cOgAjvqkUo2YeJWMyBGAAEt3e_uRc5lqtSdS3B/original.jpg?ext=https://locousercontent.com/tM0xXI0wHlRqFuhHMZPJu4kMQ0cOgAjvqkUo2YeJWMyBGAAEt3e_uRc5lqtSdS3B/original.jpg'} price={'139'}/>
              <ProductCard title={'present 12 st'} desc={'12 st mixade praliner i presentförpackning'} img={'https://gastrogate.com/thumbs2/1000/files/32894/Leq09j4GzCIZBsJo1hx-9dTV1zl6kyLygR1cvqAKVa5ANUWWPWrgVLiFunKAD5Gr/original.jpg?ext=https://locousercontent.com/Leq09j4GzCIZBsJo1hx-9dTV1zl6kyLygR1cvqAKVa5ANUWWPWrgVLiFunKAD5Gr/original.jpg'} price={'265'}/>
              <ProductCard title={'present 18 st'} desc={'18 st mixade praliner i presentförpackning'} img={'https://gastrogate.com/thumbs2/1000/files/32894/2asZ-tyMs3ZppneQtVqZvN_fhmTZX0EXGuy4PPmzsznSDMEsscMqZrPONGPHeWhT/original.jpg?ext=https://locousercontent.com/2asZ-tyMs3ZppneQtVqZvN_fhmTZX0EXGuy4PPmzsznSDMEsscMqZrPONGPHeWhT/original.jpg'} price={'375'}/>
            </div>
            <h1 className='header' ref={breadRef}>BRÖD</h1>
            <div className='sortiment'>
              <ProductCard title={'surdeg ljus'} desc={'Råg, vetemjöl, surdeg, salt'} img={'https://gastrogate.com/thumbs2/1000/files/32894/sMGCGc2SUaWyX-iM0_oDfQHPDlptvgMWp-IiIenWlbAHOK89abUrmULjs5YKqvbN/original.jpg?ext=https://locousercontent.com/sMGCGc2SUaWyX-iM0_oDfQHPDlptvgMWp-IiIenWlbAHOK89abUrmULjs5YKqvbN/original.jpg'} price={'58'}/>
              <ProductCard title={'minibrytbröd'} desc={'Surdegsbröd för två, penslat med olivolja, toppad med flingsalt och frön'} img={'https://gastrogate.com/thumbs2/1000/files/32894/OUESuGISD9WpWS0YIWRUt-KLegKS2t7gfzZDBxLjB-EFu267p09j0C2v8HYBOWZZ/original.jpg?ext=https://locousercontent.com/OUESuGISD9WpWS0YIWRUt-KLegKS2t7gfzZDBxLjB-EFu267p09j0C2v8HYBOWZZ/original.jpg'} price={'21'}/>
              <ProductCard title={'Sesambagel'} desc={'Bagels, vete, olivolja, salt, jäst, maltsirap, sesamfrön'} img={'https://gastrogate.com/thumbs2/1000/files/32894/vMI-PgK55XrlbYxvgRnCF4sU-tMEKoe3bnvjx-AbZxbFUx3XYhsqA_PSijk9ZOmF/original.jpg?ext=https://locousercontent.com/vMI-PgK55XrlbYxvgRnCF4sU-tMEKoe3bnvjx-AbZxbFUx3XYhsqA_PSijk9ZOmF/original.jpg'} price={'21'}/>
              <ProductCard title={'fikonråg'} desc={'Råg, surdeg, fikon, russin, solrosfrön, linfrön, maltsirap'} img={'https://gastrogate.com/thumbs2/1000/files/32894/l3YNk3FE4YWZGNTvceXlNKxEP08JrMMdkpKUMmerijVdiFem2sIRjmTqRf3c_7So/original.jpg?ext=https://locousercontent.com/l3YNk3FE4YWZGNTvceXlNKxEP08JrMMdkpKUMmerijVdiFem2sIRjmTqRf3c_7So/original.jpg'} price={'63'}/>
              <ProductCard title={'tunnbrödsknäcke'} desc={'4-pack med flingsalt'} img={'https://gastrogate.com/thumbs2/1000/files/32894/cK6FQDm4Ik3nU3Fz4PlMS-dTaw-JFrmKjvgKmyFRmTpdeHHTbOIikW_aTb0_5myW/original.jpg?ext=https://locousercontent.com/cK6FQDm4Ik3nU3Fz4PlMS-dTaw-JFrmKjvgKmyFRmTpdeHHTbOIikW_aTb0_5myW/original.jpg'} price={'98'}/>
              <ProductCard title={'surdegsfralla'} desc={'Råg, vetemjöl, surdeg, salt'} img={'https://gastrogate.com/thumbs2/1000/files/32894/Ff6zTzpCLksOzBgAvYhhTxDs1HO3fgb8XH9cRPja_yA3hKL-o6ReUklD7s9WvKXu/original.jpg?ext=https://locousercontent.com/Ff6zTzpCLksOzBgAvYhhTxDs1HO3fgb8XH9cRPja_yA3hKL-o6ReUklD7s9WvKXu/original.jpg'} price={'15'}/>
            </div>
            <h1 className='header' ref={bunsRef}>KAFFEBRÖD</h1>
            <div className='sortiment'>
              <ProductCard title={'Croissant'} desc={''} img={'https://gastrogate.com/thumbs2/1000/files/32894/d_h9h7_iGlfAoxAhWXqeH_hIyoZMMhh1j26xwEesraxqy9xfcn-SU8Oa_9MMbMzg/original.jpg?ext=https://locousercontent.com/d_h9h7_iGlfAoxAhWXqeH_hIyoZMMhh1j26xwEesraxqy9xfcn-SU8Oa_9MMbMzg/original.jpg'} price={'32'}/>
              <ProductCard title={'Valnötscroissant'} desc={''} img={'https://gastrogate.com/thumbs2/1000/files/32894/C9hzomWpgjajgWazfamxXRnNQqqUya_QZ_dx4SWZuz2q5jJQRbJIDVxyDDTPSuo2/original.jpg?ext=https://locousercontent.com/C9hzomWpgjajgWazfamxXRnNQqqUya_QZ_dx4SWZuz2q5jJQRbJIDVxyDDTPSuo2/original.jpg'} price={'21'}/>
              <ProductCard title={'kanelbulle'} desc={''} img={'https://gastrogate.com/thumbs2/1000/files/32894/9jhiyIa-vguz0hzeplKHQWF6ZZMuSkNRvLI_ZQ1OrD26DEdhX_-KukbKJiKMkkun/original.jpg?ext=https://locousercontent.com/9jhiyIa-vguz0hzeplKHQWF6ZZMuSkNRvLI_ZQ1OrD26DEdhX_-KukbKJiKMkkun/original.jpg'} price={'32'}/>
              <ProductCard title={'kardemummabulle'} desc={''} img={'https://gastrogate.com/thumbs2/1000/files/32894/BK4z5dvMjrn53z9vYZauwwKBPsDlpGeZVDjBVz2Ip_pVtgZwmLHl39sOrv4JxucB/original.jpg?ext=https://locousercontent.com/BK4z5dvMjrn53z9vYZauwwKBPsDlpGeZVDjBVz2Ip_pVtgZwmLHl39sOrv4JxucB/original.jpg'} price={'32'}/>
            </div>
            <h1 className='header' ref={smallRef}>BITAR</h1>
            <div className='sortiment'>
              <ProductCard title={'saltkolabrownie'} desc={''} img={'https://gastrogate.com/thumbs2/1000/files/32894/UrJMkZhCtZaGHSv5xe2togHsssqQf-cYJZ-91zLTZO3gjLm_Yn_X9ADgoIy1h3RA/original.jpg?ext=https://locousercontent.com/UrJMkZhCtZaGHSv5xe2togHsssqQf-cYJZ-91zLTZO3gjLm_Yn_X9ADgoIy1h3RA/original.jpg'} price={'30'}/>
              <ProductCard title={'chokladbiskvi'} desc={''} img={'https://gastrogate.com/thumbs2/1000/files/32894/M2H6CRJNUWqVPjf_Boh7ZbKJqzCHzFpVJxSjqAygrdA01imSZHY3h0ljcsHY5QOA/original.jpg?ext=https://locousercontent.com/M2H6CRJNUWqVPjf_Boh7ZbKJqzCHzFpVJxSjqAygrdA01imSZHY3h0ljcsHY5QOA/original.jpg'} price={'30'}/>
              <ProductCard title={'macadamiabrownie'} desc={'Brownie, med chokladkräm & en nypa salt, macadamianötter'} img={'https://gastrogate.com/thumbs2/1000/files/32894/NO2YgyV7I79PHcy6Rqwu2880nWXQ6szmx9MLOPMDsgDXzpQAB2qOyIboKH9pzUV8/original.jpg?ext=https://locousercontent.com/NO2YgyV7I79PHcy6Rqwu2880nWXQ6szmx9MLOPMDsgDXzpQAB2qOyIboKH9pzUV8/original.jpg'} price={'35'}/>
              <ProductCard title={'tosca'} desc={''} img={'https://gastrogate.com/thumbs2/1000/files/32894/8pBimCg24H4stNLxf2BN1m-abJQ0xF3w7x0a-X3LjPSy8zV21QC26zlFJD9ezDLW/original.jpg?ext=https://locousercontent.com/8pBimCg24H4stNLxf2BN1m-abJQ0xF3w7x0a-X3LjPSy8zV21QC26zlFJD9ezDLW/original.jpg'} price={'36'}/>
              <ProductCard title={'chokladboll'} desc={'Laktosfri med pärlsocker'} img={'https://gastrogate.com/thumbs2/1000/files/32894/t2aVBVZH9M3dVuNpS1FIc-fnhHgfWB9fEOnb2F6xZLU69m5ue6T0S1A8D3nDXF1e/original.jpg?ext=https://locousercontent.com/t2aVBVZH9M3dVuNpS1FIc-fnhHgfWB9fEOnb2F6xZLU69m5ue6T0S1A8D3nDXF1e/original.jpg'} price={'27'}/>
              <ProductCard title={'chokladboll'} desc={'Laktosfri med rostad kokos'} img={'https://gastrogate.com/thumbs2/1000/files/32894/4jSr0FDQ351-PlcNBRS_JPqvasEeUEMDn52vCmOUj1EASHZZ2Mk1eN5vv-QaaFJm/original.jpg?ext=https://locousercontent.com/4jSr0FDQ351-PlcNBRS_JPqvasEeUEMDn52vCmOUj1EASHZZ2Mk1eN5vv-QaaFJm/original.jpg'} price={'27'}/>
              <ProductCard title={'punchrulle'} desc={''} img={'https://gastrogate.com/thumbs2/1000/files/32894/sjVuyKFUDJ8p6thVnbN8FbuofTRABATsjH0wWX2EsVcQADPaXNv7ZxmUFejPh5MW/original.jpg?ext=https://locousercontent.com/sjVuyKFUDJ8p6thVnbN8FbuofTRABATsjH0wWX2EsVcQADPaXNv7ZxmUFejPh5MW/original.jpg'} price={'30'}/>
            </div>
            <h1 className='header' ref={pastryRef}>BAKELSER</h1>
            <div className='sortiment'>
              <ProductCard title={'prinsessbakelse'} desc={'Sockerkaka, hallonsylt, vaniljkräm, grädde och marsipan'} img={'https://gastrogate.com/thumbs2/1000/files/32894/6AR2j4dEt_nitzGNQIX8RF8FbLjt6pAXoMjui5btxh1b2UUCPYAoygsfClBhjwHj/original.jpg?ext=https://locousercontent.com/6AR2j4dEt_nitzGNQIX8RF8FbLjt6pAXoMjui5btxh1b2UUCPYAoygsfClBhjwHj/original.jpg'} price={'59'}/>
              <ProductCard title={'Citrontartelette'} desc={'Citrontartelette med italiensk maräng (nötfri)'} img={'https://gastrogate.com/thumbs2/1000/files/32894/1wAnJ3VBhojXD5_wPZmCS0ugeOQN2sKvfgrDLz_OO_byTuUfSxnTozH5tkLwJCBP/original.jpg?ext=https://locousercontent.com/1wAnJ3VBhojXD5_wPZmCS0ugeOQN2sKvfgrDLz_OO_byTuUfSxnTozH5tkLwJCBP/original.jpg'} price={'42'}/>
              <ProductCard title={'Vegansk bakelse'} desc={'Hallonmousse, passionskräm och krispig kokosbotten (nöt- och glutenfri)'} img={'https://gastrogate.com/thumbs2/1000/files/32894/XZ8rozCfGF1iTke9E8KgjAzQynkiTgnDk0m9mzmA-lcUhpUdCdAJVyWevdAcQ0h5/original.jpg?ext=https://locousercontent.com/XZ8rozCfGF1iTke9E8KgjAzQynkiTgnDk0m9mzmA-lcUhpUdCdAJVyWevdAcQ0h5/original.jpg'} price={'62'}/>
              <ProductCard title={'Jennies vinnarbakelse'} desc={'Vit chokladmousse, jordgubb- och rabarberkompott och mandelbotten (glutenfri)'} img={'https://gastrogate.com/thumbs2/1000/files/32894/0_00VBOTSf1DMvtVR5FcuUdyuj3_5lVol7vi5v-l1_nisogXGYzBw8uXI10gOzqh/original.jpg?ext=https://locousercontent.com/0_00VBOTSf1DMvtVR5FcuUdyuj3_5lVol7vi5v-l1_nisogXGYzBw8uXI10gOzqh/original.jpg'} price={'62'}/>
              <ProductCard title={'Créme brulée'} desc={'Chokladmousse, crème brûlée och browniebotten (nöt-, gluten- och laktosfri)'} img={'https://gastrogate.com/thumbs2/1000/files/32894/3lJUCYmyMbaO6l8bneT5xoktajKSanLBCCUJw6asfEVPe63TSPyGv2qnDDNEQQPE/original.jpg?ext=https://locousercontent.com/3lJUCYmyMbaO6l8bneT5xoktajKSanLBCCUJw6asfEVPe63TSPyGv2qnDDNEQQPE/original.jpg'} price={'62'}/>
              <ProductCard title={'morotskaka'} desc={'Morotskaka med cream cheese frosting (nöt- och laktosfri)'} img={'https://gastrogate.com/thumbs2/1000/files/32894/ToXfD2PJiUiT2lf17BGJc12naTDfPQUyDd-paxbwUrG_WoAu_4mobqcDB0FEiHoz/original.jpg?ext=https://locousercontent.com/ToXfD2PJiUiT2lf17BGJc12naTDfPQUyDd-paxbwUrG_WoAu_4mobqcDB0FEiHoz/original.jpg'} price={'46'}/>
              <ProductCard title={'Pecankolapaj portion'} desc={'Pecankolapaj med vispad vaniljpannacotta'} img={'https://gastrogate.com/thumbs2/1000/files/32894/dKoen3nL6KCj_faADgaPfQ4rZraeT5pr6fSx0g0t5xAxEQ3GeEHtsrWf299lcG03/original.jpg?ext=https://locousercontent.com/dKoen3nL6KCj_faADgaPfQ4rZraeT5pr6fSx0g0t5xAxEQ3GeEHtsrWf299lcG03/original.jpg'} price={'59'}/>
            </div>
            <h1 className='header' ref={cakesRef}>TÅRTOR</h1>
            <div className="sortiment">
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
            </div>
            <h1 className='header' ref={cookieRef}>KAKOR</h1>
            <div className="sortiment">
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
            </div>
            <h1 className='header' ref={sandwichRef}>SMÖRGÅSAR</h1>
            <div className="sortiment">
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
            </div>
            <h1 className='header' ref={packedRef}>FÖRPACKAT</h1>
            <div className="sortiment">
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
              <ProductCard title={''} desc={''} img={''} price={''} />
            </div>
          </div>

      </div>

    </div>
  )
}

export default AssortmentView
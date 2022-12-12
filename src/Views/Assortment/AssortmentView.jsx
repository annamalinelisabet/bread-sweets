import {useEffect, useRef} from 'react'
// import { useLocation } from 'react-router-dom'
import './AssortmentView.css'
import Photo from '../../Images/assortment.jpg'
import ProductCard from '../../Components/ProductCard/ProductCard'

const AssortmentView = () => {

  // const location = useLocation()
  // const { from } = location.state

  
  useEffect(() => {
    // console.log(from)
    // if(from === null){
    //   window.scrollTo({top: 0, left: 0, behavior: 'instant'}); 
    // } else {
    //   console.log(from)
    //   scrollToRef(from)
    // }
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
              <ProductCard title={'prinsesstårta'} desc={'6-8 / 10-12 / 15 bitar'} img={'https://gastrogate.com/thumbs2/1000/files/32894/afJ3spcUE7SEz6N72Qs30Rq4obCj0ACFF-lsAYDCPj29NVl-hAYPdROm7PGDZfNc/original.jpg?ext=https://locousercontent.com/afJ3spcUE7SEz6N72Qs30Rq4obCj0ACFF-lsAYDCPj29NVl-hAYPdROm7PGDZfNc/original.jpg'} price={'350 / 450 / 595'} />
              <ProductCard title={'Creme brûlée'} desc={'10-12 bitar. Chokladbotten, krispigt flarn, creme brule, mörk chokladmousse. Gluten & laktosfri'} img={'https://gastrogate.com/thumbs2/1000/files/32894/2LRDnNkPoz4p-EyWCn2BIVaT53NreIEmP3boDDjdXUY0ic7ZkCijca_StRU8YZef/original.jpg?ext=https://locousercontent.com/2LRDnNkPoz4p-EyWCn2BIVaT53NreIEmP3boDDjdXUY0ic7ZkCijca_StRU8YZef/original.jpg'} price={'525'} />
              <ProductCard title={'Jennies vinnartårta'} desc={'5-6 / 10-12 bitar. Mandelbotten, jordgubb/rabarberkompott, vit chokladmousse med citrus'} img={'https://gastrogate.com/thumbs2/1000/files/32894/917J5CwBn4kZp_gJ1Pwx89kylNhZ9J461JAw0_hqTQ1nNZjZkWSDpvcsnHCtN43I/original.jpg?ext=https://locousercontent.com/917J5CwBn4kZp_gJ1Pwx89kylNhZ9J461JAw0_hqTQ1nNZjZkWSDpvcsnHCtN43I/original.jpg'} price={'295 / 525'} />
              <ProductCard title={'Choklad- och passionstårta'} desc={'5-6 / 10-12 bitar. Ljus chokladmousse, passionskräm och browniebotten (nöt- och glutenfri)'} img={'https://gastrogate.com/thumbs2/1000/files/32894/y4jHY-wQ8LYo0maQqly8a5kMIViPopDvwABTFaFEXcpg511urvGicQz_4kGPgUCK/original.jpg?ext=https://locousercontent.com/y4jHY-wQ8LYo0maQqly8a5kMIViPopDvwABTFaFEXcpg511urvGicQz_4kGPgUCK/original.jpg'} price={'295 / 525'} />
              <ProductCard title={'Budapeststubbe'} desc={'4-5 bitar. Budapeststubbe med jordgubbar'} img={'https://gastrogate.com/thumbs2/1000/files/32894/L4SL2jeQlcHCr2H9VgnqVjH-B-_kpXP0YScOJtC2sTAhq5ofL1ayUTNkFj11wYVe/original.jpg?ext=https://locousercontent.com/L4SL2jeQlcHCr2H9VgnqVjH-B-_kpXP0YScOJtC2sTAhq5ofL1ayUTNkFj11wYVe/original.jpg'} price={'210'} />
            </div>
            <h1 className='header' ref={cookieRef}>KAKOR</h1>
            <div className="sortiment">
              <ProductCard title={'Kolasnitt (styckvis)'} desc={'Råsocker, dinkel, vete, smör, sirap'} img={'https://gastrogate.com/thumbs2/1000/files/32894/uoH7dnBSl_c6oQHZZ7XMyMLA_WSHj-Et75P5oybjpZEzpYksTPlU6F9qa-mZGEkv/original.jpg?ext=https://locousercontent.com/uoH7dnBSl_c6oQHZZ7XMyMLA_WSHj-Et75P5oybjpZEzpYksTPlU6F9qa-mZGEkv/original.jpg'} price={'8'} />
              <ProductCard title={'Kolasnitt (10 st)'} desc={'10-pack kolasnittar'} img={'https://gastrogate.com/thumbs2/1000/files/32894/agw3G3HExjt-ZQqc5x-9-W3BXwIWHsBeznbgAwo7hpaRj0BC8Ey6cVqzpWjFzA3K/original.jpg?ext=https://locousercontent.com/agw3G3HExjt-ZQqc5x-9-W3BXwIWHsBeznbgAwo7hpaRj0BC8Ey6cVqzpWjFzA3K/original.jpg'} price={'65'} />
              <ProductCard title={'Syltkaka (styckvis)'} desc={'Mördeg/sylt'} img={'https://gastrogate.com/thumbs2/1000/files/32894/NPk_PChYlMQJHzOHqr9LD9Z4hQ_jVNwl0IU4lRNEn6xkjGWb95PY8RBhww1Ff2EA/original.jpg?ext=https://locousercontent.com/NPk_PChYlMQJHzOHqr9LD9Z4hQ_jVNwl0IU4lRNEn6xkjGWb95PY8RBhww1Ff2EA/original.jpg'} price={'8'} />
              <ProductCard title={'Syltkaka (10 st)'} desc={'10-pack syltkakor'} img={'https://gastrogate.com/thumbs2/1000/files/32894/5yIVc8Eq48HDa9uPgJFvGwfGLcdpnOFADJfbwJGunYAXsDZ6I6oBXxdcV7XjFnAn/original.jpg?ext=https://locousercontent.com/5yIVc8Eq48HDa9uPgJFvGwfGLcdpnOFADJfbwJGunYAXsDZ6I6oBXxdcV7XjFnAn/original.jpg'} price={'65'} />
            </div>
            <h1 className='header' ref={sandwichRef}>SMÖRGÅSAR</h1>
            <div className="sortiment">
              <ProductCard title={'Fralla med ost & skinka'} desc={'Ost, skinka, sallad, tomat, gurka'} img={'https://gastrogate.com/thumbs2/1000/files/32894/4kbaz6ubqRtCkTD7zq0Ttg3cbzjRyPZjYALN7BnsT-kXIp52BxYru3tT6kPSifLp/original.jpg?ext=https://locousercontent.com/4kbaz6ubqRtCkTD7zq0Ttg3cbzjRyPZjYALN7BnsT-kXIp52BxYru3tT6kPSifLp/original.jpg'} price={'45'} />
              <ProductCard title={'Baguette med ost & skinka'} desc={'Ost, skinka, sallad, tomat, gurka'} img={'https://gastrogate.com/thumbs2/1000/files/32894/rEnfK0BVLTyNWUo4C_vkWSPsKfDMgS3FPYkwd4q-utI5BlS6gjqLZxQmk8TW1g1U/original.jpg?ext=https://locousercontent.com/rEnfK0BVLTyNWUo4C_vkWSPsKfDMgS3FPYkwd4q-utI5BlS6gjqLZxQmk8TW1g1U/original.jpg'} price={'58'} />
              <ProductCard title={'Baguette med salami & brie'} desc={'Salami, brie, sallad, paprika'} img={'https://gastrogate.com/thumbs2/1000/files/32894/7y8bwSUyORgwxCPfhwUMOrF_ms5wRepXXYft9Xx_lr1RCnTRRFLPMpeylOQuWdXX/original.jpg?ext=https://locousercontent.com/7y8bwSUyORgwxCPfhwUMOrF_ms5wRepXXYft9Xx_lr1RCnTRRFLPMpeylOQuWdXX/original.jpg'} price={'65'} />
              <ProductCard title={'Grillsmörgås med grönsallad'} desc={'Grillsmörgås med skinka/mozzarella och grönsallad med basilikaolja.'} img={'https://gastrogate.com/thumbs2/1000/files/32894/o-5dVeH76ouOLCSqXLBnJRpsTMXCqcKey_ZMaKonl-BVJOmOQBFEyX4EKWMie21O/original.jpg?ext=https://locousercontent.com/o-5dVeH76ouOLCSqXLBnJRpsTMXCqcKey_ZMaKonl-BVJOmOQBFEyX4EKWMie21O/original.jpg'} price={'95'} />
            </div>
            <h1 className='header' ref={packedRef}>FÖRPACKAT</h1>
            <div className="sortiment">
              <ProductCard title={'Granola'} desc={'Honungsrostad krispig müsli med dinkelflingor, havre, solros, linfrö, mandel, kokosflakes'} img={'https://gastrogate.com/thumbs2/1000/files/32894/FMAd3SohsY8aVEBtvsFPxd0aO-qzYeAyK3XFu_QYXzL0VLDxvXhiSE000MKeTeef/original.jpg?ext=https://locousercontent.com/FMAd3SohsY8aVEBtvsFPxd0aO-qzYeAyK3XFu_QYXzL0VLDxvXhiSE000MKeTeef/original.jpg'} price={'49'} />
              <ProductCard title={'Granola frukt'} desc={'Honungsrostad krispig müsli med torkade blåbär, dinkelflingor, havre, solros, linfrö, mandel, kokosflakes'} img={'https://gastrogate.com/thumbs2/1000/files/32894/TtgcpPksvg6Wwm64IPU5qO2YxlnJMnnQERvQXvUO5jUB38kGJ7vHXBNqBMi2VVCj/original.jpg?ext=https://locousercontent.com/TtgcpPksvg6Wwm64IPU5qO2YxlnJMnnQERvQXvUO5jUB38kGJ7vHXBNqBMi2VVCj/original.jpg'} price={'59'} />
              <ProductCard title={'Granola choklad & hallon'} desc={'Hallon, mörka chokladbitar, kakao, pumpa, solros, linfrö, havre, dinkel, vanilj, rapsolja, honung'} img={'https://gastrogate.com/thumbs2/1000/files/32894/ZMijp62Sf_hRtWBlUSuoq7YCfdtHFvwRbUdCtoc2Orzf5qsp6YOBqWV7Qq_JY1F4/original.jpg?ext=https://locousercontent.com/ZMijp62Sf_hRtWBlUSuoq7YCfdtHFvwRbUdCtoc2Orzf5qsp6YOBqWV7Qq_JY1F4/original.jpg'} price={'69'} />
              <ProductCard title={'Kardemummaskorpor'} desc={'Fyllda kardemummaskorpor'} img={'https://gastrogate.com/thumbs2/1000/files/32894/7J_2beeabecgXLo3r55tkJrT7Bbvjnw2wa7eDUPMcogOTeOqTMg3iW6A4UX5bgdI/original.jpg?ext=https://locousercontent.com/7J_2beeabecgXLo3r55tkJrT7Bbvjnw2wa7eDUPMcogOTeOqTMg3iW6A4UX5bgdI/original.jpg'} price={'39'} />
              <ProductCard title={'Björklunds Te'} desc={'Hel förpackning'} img={'https://gastrogate.com/thumbs2/1000/files/32894/7ioQcwCLFA5zW4uIQta577Wa9_DTsSAzAI8qMdbYWnWzRxJ74qAFutDRpxWZqvJz/original.jpg?ext=https://locousercontent.com/7ioQcwCLFA5zW4uIQta577Wa9_DTsSAzAI8qMdbYWnWzRxJ74qAFutDRpxWZqvJz/original.jpg'} price={'85'} />
              <ProductCard title={'Björklunds kaffe, Svartån'} desc={'Kraftig Mörkrost paket 500 g'} img={'https://gastrogate.com/thumbs2/1000/files/32894/TgWuevN6futbyr_mbpfhJTq63d-hYzh37PTev6Dpy6WpwCMRhu2YWUxMB35Tw6-F/original.jpg?ext=https://locousercontent.com/TgWuevN6futbyr_mbpfhJTq63d-hYzh37PTev6Dpy6WpwCMRhu2YWUxMB35Tw6-F/original.jpg'} price={'95'} />
            </div>
          </div>

      </div>

    </div>
  )
}

export default AssortmentView
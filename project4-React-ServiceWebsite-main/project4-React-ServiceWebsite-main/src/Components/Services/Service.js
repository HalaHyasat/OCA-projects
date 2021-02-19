import React from 'react'
import '../../Styles/Service.css'
import Slider from './Slider'
import Scard from './Scard'
import Datacard from './Datacard'
import Scard1 from '../../img/Scard1.jpg'
import Scard2 from '../../img/Scard2.jpg'
import Scard3 from '../../img/Scard3.jpg'
import Scard4 from '../../img/Scard4.jpg'
import Scard5 from '../../img/Scard5.jpg'
import Scard6 from '../../img/Scard6.jpg'
import Scard7 from '../../img/Scard7.jpg'
import Scard8 from '../../img/Scard8.jpg'
import Scard9 from '../../img/Scard9.jpg'


const Datac = Datacard.map (x=> <Scard id={x.id} maintext={x.maintext} subtext={x.subtext} cardimg={x.cardimg}/> )
function Service (){
    return(

    <div>
    <div className="slider-container-pr">
        <Slider/>
    </div>
<div className="flexcontainer">   
{Datac}
</div>
    </div>

)
}
export default Service;
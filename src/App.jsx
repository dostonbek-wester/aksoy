import React from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Xamnafas from './assets/Xamnafas.jpg'
import ss1 from './assets/ss1.jpg'
import ss2 from './assets/ss2.jpg'
import Xamnafas1 from './assets/Xamnafas1.jpg'
import ss11 from './assets/ss11.jpg'

const App = () => {
  return (
    <div>
      <div className="fanta">
        <div className="main-one">
          <div className="main">
            <div className="cococola">
              <img className='bosh-surat' src={Xamnafas1} alt="" />
              <h1>Brands</h1>

              <h1 >tasir</h1>




            </div>
          </div>
        </div>
        <div className="bosh-fanta-main">
          <img className='bosh-fanta' src={Xamnafas1} alt="" />
        </div>



        <div className="qolgani">

          <img className='taste-the-fun' src={Xamnafas} alt="" />

        </div>



        <h1 className='h1main'>Products</h1>


        <div className="bilmiman">
          <div className="fanta-c">
            <div className="img-c">
              <img className='img-c' src={ss1} alt="" />
            </div>
            <div className="text-c-main">
              <div className="text-c">
                <h1>Aksoy ichimlik suvi</h1>

                <p>Toglarning bagridan tuhfa</p>

              </div>
            </div>
          </div>
          <div className="fanta-cit">
            <div className="text-cit-main">
              <div className="text-cit">
                <h1>Aksoy ichimlik suvi</h1>

                <p>Farzandingiz uchun vitamin boy suv</p>

              </div>
            </div>
            <img className='img-cit' src={ss2} alt="" />

          </div>
        </div>


        <div className="text-mini">
          <h1 >Akso</h1>

          <p>Introduced in 1940, Fanta is the second largest brand of The CocaCola Company. Although Fanta Orange is the main flavour, Fanta's portfolio offers consumers a wide range of fruity flavours. Drinked more than 130 million times every day around the world, Fanta is loved by consumers for its great fruity taste.</p>
        </div>
        <div className="Follow">
          <h1>Follow us on social networks</h1>
          <div className="icons">
          <div className="ins">
                    < InstagramIcon /></div>
                  <div className="face">
                    <FacebookIcon /></div>
                  <div className="you">
                    <YouTubeIcon /></div>
        </div>
        </div>
          <div className="footer">
            <div className="footer-mini">
              <div className="f-1">
              <img className='ss11' src={ss11} alt="" />
                <div className="uzb">
                  <LocationOnIcon />
                  <h1>Uzbekistan | RU</h1>
                </div>
                
                <br />
              </div> <div className="f2">
                <div className="o">
                  <p>ABOUT US</p>
                  <p> KOMPANIYALOR</p>
                  <p>CHIQISH TARIXI</p>
                  <p>JOYLASHUV</p>
                </div>
                <div className="help">
                  <p>YORDAM KERAKMI</p>
                  <p>HARITE VEB SAYTI</p>
                  <p>KONTAKLAR</p>
                </div>
                <div className="l">
                  <p>YURIDLI MALUMOT</p>
                  <p>SOZLAMA FAYLLARI AKSOY </p>

                </div>
                <div className="icon2">
                  <div className="ins1">
                    < InstagramIcon /></div>
                  <div className="face1">
                    <FacebookIcon /></div>
                  <div className="you1">
                    <YouTubeIcon /></div>
                </div>
              </div>

            </div>
            <hr />
            <div className="f3">
              <p>© 2023 The CocaCola Company.  права защищены.</p>
            </div>
            <hr />
             

          </div>
      </div>
    </div>
  )
}

export default App
import React from 'react';
import ReactDOM from 'react-dom';
import './LandingPage.scss';
import '../assets/Fonts/Fonts.scss';
import Header from '../Header/Header';
import BannerTxt from './BannerTxt.json';
import CardImg1 from '../assets/Img/LandingPage/card1.png';
import CardImg2 from '../assets/Img/LandingPage/card2.png';
import CardImg3 from '../assets/Img/LandingPage/card3.png';
import Footer from '../Footer/Footer';
import RouterLinks from '../Router/RouterLinks';
import { Link } from 'react-router-dom';

const LandingPage = () =>{
    return(
        <>
            <Header />
             <section className="BannerBg">
                 <div className="container">
                     <div className="Banner-Txt-Area">
                 <h1 className="Banner-Heading">{BannerTxt.heading}</h1>
                 <div className="banner-Btn-section">
                     <Link to="/pricing" className="primary-btn btn">{BannerTxt.BtnTxt1}</Link>
                     <button className="secondary-btn btn">{BannerTxt.BtnTxt2}</button>
                 </div>
                 </div>
                 </div>
             </section>
             <section className="Unlimited-Benefit-Section">
             <h1 className="Unlimited-Benefit-Heading Banner-Heading text-center">{BannerTxt.Section2Title}</h1>
             <p className="Unlimited-Benefit-subhead">{BannerTxt.Section2SubTitle}</p>
             <div className="container">
                 <div className="row">
                 <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-xs-12">
                     <div className="Card-bg1 Card-bg">
                    <img src={CardImg1} className="Card-img img-fluid" alt="card img 1" />
                    <div className="card-title">
                        {BannerTxt.CardTitle1}
                    </div>
                         </div>
                </div>
                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-xs-12">
                     <div className="Card-bg2 Card-bg">
                    <img src={CardImg2} className="Card-img img-fluid" alt="card img 1" />
                    <div className="card-title">
                        {BannerTxt.CardTitle2}
                    </div>
                         </div>
                </div>
                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-xs-12">
                     <div className="Card-bg3 Card-bg">
                    <img src={CardImg3} className="Card-img img-fluid" alt="card img 1" />
                    <div className="card-title">
                        {BannerTxt.CardTitle3}
                    </div>
                         </div>
                </div>
             </div>
             </div>
             </section>
             <Footer />
             </>
    )
}

export default LandingPage;
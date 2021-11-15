import React from "react";
import Recommended from "../assets/Svg/Recommended";
import RecommendedIcon from "../assets/Svg/RecommenedIcon";
import Header from "../Header/Header";
import './Pricing.scss';
import PricingTxt from './PricingTxt.json';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import FooterInnerPage from "../Footer/FooterInnerPage";
const Pricing =() =>{
    return(
        <>
        <Header />
        <section className="Right-plan-section">
        <div className="Right-plan-section-whole">
            <div className="container-fluid">
                <div className="PricingTxt-heading">{PricingTxt.PricingText}</div>
                <div className="PricingTxt-userrange">
                <div className="PricingTxt-userrange-section">
                    <label>Users Range</label>
                    <ul>
                        <li>{PricingTxt.UserRange}</li>
                        <li className="userramge-active">{PricingTxt.UserRange1}</li>
                        <li>{PricingTxt.UserRange2}</li>
                    </ul>
                    </div>
                    <div className="PricingTxt-montly">
                    <label>Monthly</label>
                    <ul>
                        <li>{PricingTxt.TermPackage}</li>
                        <li className="termpackage-active">{PricingTxt.TermPackage1}</li>
                        <li>{PricingTxt.TermPackage2}</li>
                        <li>{PricingTxt.TermPackage3}</li>
                    </ul>
                    </div>
            </div>
            <div className="PricingTxt-plan">



                <div className="row">
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="PricingTxt-plan-card">
                            <div className="PricingTxt-plan-subhead">{PricingTxt.PriceCardSubHead}</div>
                            <div className="PricingTxt-plan-heading">{PricingTxt.PriceCardValue}</div>
                            <div className="PricingTxt-plan-para">{PricingTxt.PriceCardPara}</div>
                            <div className="PricingTxt-plan-button">
                                <button className="primary-btn btn">{PricingTxt.PriceCardBtnTxt}</button>
                                <button className="secondary-btn btn">{PricingTxt.PriceCardBtnTxt2}</button>
                                </div>
                                <div className="PricingTxt-credit">
                                {PricingTxt.PriceCreditTxt}
                                    </div>
                                <div className="PricingTxt-planHead">
                                {PricingTxt.PriceCardPlanHead}
                                    </div>

                                <ul className="PlanDetailsList">
                                    <li>{PricingTxt.PriceCardPlanTxt}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt1}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt2}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt3}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt4}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt5}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt6}</li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="PricingTxt-plan-card">
                            <div className="PricingTxt-plan-subhead">{PricingTxt.PriceCardSubHead}</div>
                            <div className="PricingTxt-plan-heading">{PricingTxt.PriceCardValue}</div>
                            <div className="PricingTxt-plan-para">{PricingTxt.PriceCardPara}</div>
                            <div className="PricingTxt-plan-button">
                                <button className="primary-btn btn">{PricingTxt.PriceCardBtnTxt}</button>
                                <button className="secondary-btn btn">{PricingTxt.PriceCardBtnTxt2}</button>
                                </div>
                                <div className="PricingTxt-credit">
                                {PricingTxt.PriceCreditTxt}
                                    </div>
                                <div className="PricingTxt-planHead">
                                {PricingTxt.PriceCardPlanHead}
                                    </div>

                                <ul className="PlanDetailsList">
                                    <li>{PricingTxt.PriceCardPlanTxt}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt1}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt2}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt3}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt4}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt5}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt6}</li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="PricingTxt-plan-card PricingTxt-recommended-card">
                            <div className="PricingTxt-recommended-svg"><Recommended/></div>
                            <div className="PricingTxt-plan-subhead">{PricingTxt.PriceCardSubHead}</div>
                            <div className="PricingTxt-plan-heading">{PricingTxt.PriceCardValue}</div>
                            <div className="PricingTxt-plan-para">{PricingTxt.PriceCardPara}</div>
                            <div className="PricingTxt-plan-button">
                                <button className="primary-btn btn">{PricingTxt.PriceCardBtnTxt}</button>
                                <button className="secondary-btn btn">{PricingTxt.PriceCardBtnTxt2}</button>
                                </div>
                                <div className="PricingTxt-credit">
                                {PricingTxt.PriceCreditTxt}
                                    </div>
                                <div className="PricingTxt-planHead">
                                {PricingTxt.PriceCardPlanHead}
                                    </div>

                                <ul className="PlanDetailsList">
                                    <li>{PricingTxt.PriceCardPlanTxt}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt1}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt2}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt3}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt4}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt5}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt6}</li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="PricingTxt-plan-card">
                            <div className="PricingTxt-plan-subhead">{PricingTxt.PriceCardSubHead}</div>
                            <div className="PricingTxt-plan-heading">{PricingTxt.PriceCardValue}</div>
                            <div className="PricingTxt-plan-para">{PricingTxt.PriceCardPara}</div>
                            <div className="PricingTxt-plan-button">
                                <button className="primary-btn btn">{PricingTxt.PriceCardBtnTxt}</button>
                                <button className="secondary-btn btn">{PricingTxt.PriceCardBtnTxt2}</button>
                                </div>
                                <div className="PricingTxt-credit">
                                {PricingTxt.PriceCreditTxt}
                                    </div>
                                <div className="PricingTxt-planHead">
                                {PricingTxt.PriceCardPlanHead}
                                    </div>

                                <ul className="PlanDetailsList">
                                    <li>{PricingTxt.PriceCardPlanTxt}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt1}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt2}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt3}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt4}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt5}</li>
                                    <li>{PricingTxt.PriceCardPlanTxt6}</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            </div>
        </section>
        <section className="Compare-plans-section">
<div className="container-fluid">
<div className="PricingTxt-heading">{PricingTxt.CompareHeadingText}</div>
<div className="row">
<div className="col-md-3 col-lg-3 col-sm-3 col-xl-3">
</div>
<div className="col-md-9 col-lg-9 col-sm-9 col-xl-9">
<div className="row">
<div className="col-md-3 col-lg-3 col-sm-3 col-xl-3">
</div>
<div className="offset-md-3 col-md-3 col-lg-3 col-sm-3 col-xl-3">
   <div className="RecommendedIcon1">
    <RecommendedIcon />
    </div>
</div>
<div className="col-md-3 col-lg-3 col-sm-3 col-xl-3">
</div>
</div>

</div>
</div>
<div className="row">
<div className="col-md-3 col-lg-3 col-sm-3 col-xl-3">
<div className="havequestions-txt-main">
    <div className="havequestions-txt">
        {PricingTxt.HaveQuestionsText} <a href="tel:1800 856 2145">{PricingTxt.HaveQuestionsCall}</a>
        </div>
</div>
</div>
<div className="col-md-9 col-lg-9 col-sm-9 col-xl-9">
<div className="row">
<div className="col-md-3 col-lg-3 col-sm-3 col-xl-3">
    <div className="compare-plan-card">
        <div className="compare-plan-card-heading">{PricingTxt.PriceCardSubHead}</div>
        <div className="PricingTxt-plan-button">
                                <button className="primary-btn btn">{PricingTxt.PriceCardBtnTxt}</button>
                                <button className="secondary-btn btn">{PricingTxt.PriceCardBtnTxt2}</button>
                                </div>
                                <div className="PricingTxt-credit">
                                {PricingTxt.PriceCreditTxt}
                                    </div>
        </div>
</div>

<div className="col-md-3 col-lg-3 col-sm-3 col-xl-3">
    <div className="compare-plan-card">
        <div className="compare-plan-card-heading">{PricingTxt.PriceCardSubHead}</div>
        <div className="PricingTxt-plan-button">
                                <button className="primary-btn btn">{PricingTxt.PriceCardBtnTxt}</button>
                                <button className="secondary-btn btn">{PricingTxt.PriceCardBtnTxt2}</button>
                                </div>
                                <div className="PricingTxt-credit">
                                {PricingTxt.PriceCreditTxt}
                                    </div>
        </div>
</div>
<div className="col-md-3 col-lg-3 col-sm-3 col-xl-3">
    <div className="compare-plan-card">
        <div className="compare-plan-card-heading">{PricingTxt.PriceCardSubHead}</div>
        <div className="PricingTxt-plan-button">
                                <button className="primary-btn btn">{PricingTxt.PriceCardBtnTxt}</button>
                                <button className="secondary-btn btn">{PricingTxt.PriceCardBtnTxt2}</button>
                                </div>
                                <div className="PricingTxt-credit">
                                {PricingTxt.PriceCreditTxt}
                                    </div>
        </div>
</div>
<div className="col-md-3 col-lg-3 col-sm-3 col-xl-3">
    <div className="compare-plan-card">
        <div className="compare-plan-card-heading">{PricingTxt.PriceCardSubHead}</div>
        <div className="PricingTxt-plan-button">
                                <button className="primary-btn btn">{PricingTxt.PriceCardBtnTxt}</button>
                                <button className="secondary-btn btn">{PricingTxt.PriceCardBtnTxt2}</button>
                                </div>
                                <div className="PricingTxt-credit">
                                {PricingTxt.PriceCreditTxt}
                                    </div>
        </div>
</div>
</div>

</div>
</div>
</div>
        </section>
        <section className="Pricing-Table">
            <div className="container-fluid">
            <div className="Pricing-Table-area">
        <table>
  <colgroup>
    <col className="grey" />
    <col className="red"/>
    <col className="blue" />
    <col className="red" />
    <col className="blue" />
  </colgroup>
  <thead>
    <tr>
      <th className="color-032C7E Custom-Width-40">{PricingTxt.KeyFeatures}</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>{PricingTxt.KeyFeaturesHeading}</th>
      <td><i className="fa fa-check" aria-hidden="true"></i>
</td>
      <td><i className="fa fa-check" aria-hidden="true"></i></td>
      <td><i className="fa fa-check" aria-hidden="true"></i></td>
      <td><i className="fa fa-check" aria-hidden="true"></i></td>
    </tr>
    <tr>
      <th>{PricingTxt.KeyFeaturesHeading1}</th>
      <td>{PricingTxt.KeyFeaturesData}</td>
      <td>{PricingTxt.KeyFeaturesData}</td>
      <td>{PricingTxt.KeyFeaturesData}</td>
      <td>{PricingTxt.KeyFeaturesData1}</td>
    </tr>
    <tr>
      <th>{PricingTxt.KeyFeaturesHeading2}</th>
      <td>{PricingTxt.KeyFeaturesData6}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
    </tr>
    <tr>
      <th>{PricingTxt.KeyFeaturesHeading3}</th>
      <td>{PricingTxt.KeyFeaturesData3}</td>
      <td>{PricingTxt.KeyFeaturesData4}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
    </tr>
    <tr>
      <th>{PricingTxt.KeyFeaturesHeading4}</th>
      <td>{PricingTxt.KeyFeaturesData3}</td>
      <td>{PricingTxt.KeyFeaturesData4}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
    </tr>
    <tr>
      <th>{PricingTxt.KeyFeaturesHeading5}</th>
      <td>{PricingTxt.KeyFeaturesData3}</td>
      <td>{PricingTxt.KeyFeaturesData4}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
    </tr>
    <tr>
      <th>{PricingTxt.KeyFeaturesHeading6}</th>
      <td>{PricingTxt.KeyFeaturesData3}</td>
      <td>{PricingTxt.KeyFeaturesData4}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
    </tr>
    <tr>
      <th>{PricingTxt.KeyFeaturesHeading7}</th>
      <td>{PricingTxt.KeyFeaturesData3}</td>
      <td>{PricingTxt.KeyFeaturesData4}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
    </tr>
    <tr>
      <th>{PricingTxt.KeyFeaturesHeading8}</th>
      <td>{PricingTxt.KeyFeaturesData3}</td>
      <td>{PricingTxt.KeyFeaturesData4}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
    </tr>
    <tr>
      <th>{PricingTxt.KeyFeaturesHeading9}</th>
      <td>{PricingTxt.KeyFeaturesData3}</td>
      <td>{PricingTxt.KeyFeaturesData4}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
      <td>{PricingTxt.KeyFeaturesData2}</td>
    </tr>
  </tbody>
</table>
</div>
</div>
        </section>
        <FooterInnerPage />
        </>
    )
}

export default Pricing;
import "./About.scss";
import Products from "../Products/Products";
import img from "../../../assets/about.png";
import Fields from "../Fields/Fields";
import Process from "../Process/Process";
import Installation from "../Installation/Installation";
import {FormattedMessage} from "react-intl";

function About() {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <FormattedMessage id="header.gioiThieu" />
        </h1>
        <div className="row">
          <div className="box image">
            <img src={img} />
          </div>
          <div className="box content">
            <h3>
              <FormattedMessage id="nguonLucNhanSu" />
            </h3>
            <p>
              <FormattedMessage id="hrDiv1" />
            </p>
            <p>
              <FormattedMessage id="hrDiv2" />
            </p>
          </div>
        </div>
        <div className="box-container">
          <div className="box">
            <h3>500+</h3>
            <p>
              <FormattedMessage id="tongNhanSu" />
            </p>
          </div>
          <div className="box">
            <h3>40</h3>
            <p>
              <FormattedMessage id="kySuVanPhong" />
            </p>
          </div>
          <div className="box">
            <h3>280</h3>
            <p>
              <FormattedMessage id="thiCongLapDung" />
            </p>
          </div>
          <div className="box">
            <h3>170</h3>
            <p>
              <FormattedMessage id="boPhanSanXuat" />
            </p>
          </div>
          <div className="box">
            <h3>10</h3>
            <p>
              <FormattedMessage id="boPhanCungUng" />
            </p>
          </div>
        </div>
      </section>
      <Fields />
      <Process />
      <Installation />
      <Products />
    </>
  );
}

export default About;

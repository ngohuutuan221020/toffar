import "./Footer.scss";
import logo from "../../assets/Logo_toffar.png";
import {FormattedMessage} from "react-intl";
function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <footer className="text-center text-lg-start text-white mt-5" style={{backgroundColor: "#45526e"}}>
        <div className="pb-0">
          <section className="footer" style={{padding: "2rem 5%"}}>
            <div className="row">
              <div
                className="col-md-4 col-lg-4 col-xl-4 "
                style={{display: "flex", textAlign: "center", flexDirection: "column", justifyContent: "center", alignItems: "center"}}
              >
                <img src={logo} />
                <h3 className="text-uppercase mt-4 font-weight-bold">CÔNG TY TNHH TOFFAR</h3>
                <h3 className="text-uppercase mb-4" style={{fontStyle: "italic", fontWeight: "normal"}}>
                  TOFFAR STEEL FACILITIES
                </h3>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-4 col-lg-4 col-xl-4 links">
                <h6 className="text-uppercase font-weight-bold">Quick Links</h6>
                <p>
                  <i className="fa-solid fa-chevron-right mx-2"></i>
                  <a className="text-white" href="#about">
                    <FormattedMessage id="nguonLucNhanSu" />
                  </a>
                </p>
                <p>
                  <i className="fa-solid fa-chevron-right mx-2"></i>
                  <a className="text-white" href="#Fields">
                    <FormattedMessage id="linhVucHoatDong" />
                  </a>
                </p>
                <p>
                  <i className="fa-solid fa-chevron-right mx-2"></i>
                  <a className="text-white" href="#Process">
                    <FormattedMessage id="quyTrinhSanXuat" />
                  </a>
                </p>
                <p>
                  <i className="fa-solid fa-chevron-right mx-2"></i>
                  <a className="text-white" href="#products">
                    <FormattedMessage id="quyTrinhLapDung" />
                  </a>
                </p>
                <p>
                  <i className="fa-solid fa-chevron-right mx-2"></i>
                  <a className="text-white" href="#products">
                    <FormattedMessage id="trangThietBiSanXuat" />
                  </a>
                </p>

                <p>
                  <i className="fa-solid fa-chevron-right mx-2"></i>
                  <a className="text-white" href="#project">
                    <FormattedMessage id="duAnTieuBieu" />
                  </a>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-4 col-lg-4 col-xl-4  ">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  <FormattedMessage id="header.lienHe" />
                </h6>
                <p>
                  <i className="fas fa-home  m-2"></i> <FormattedMessage id="diaChi" />
                </p>
                <p>
                  <i className="fas fa-envelope m-2"></i> info@toffar.com | ndt@toffar.com
                </p>
                <p>
                  <i className="fas fa-phone m-2"></i> (028) 3 997 6667 | 0903349668
                </p>
                <p>
                  <i className="fas fa-print m-2"></i>
                  (Tax Code) 0305585346
                </p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © {year} Copyright:{" "}
                  <a className="text-white" href="https://mdbootstrap.com/">
                    TOFFAR STEEL FACILITIES
                  </a>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a className="btn btn-outline-light btn-floating m-1  text-white" role="button">
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                  <i className="fab fa-twitter"></i>
                </a>

                <a className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                  <i className="fab fa-google"></i>
                </a>

                <a className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;

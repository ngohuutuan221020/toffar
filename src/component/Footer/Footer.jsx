import "./Footer.scss";
import logo from "../../assets/Logo_toffar.png";
function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <footer className="text-center text-lg-start text-white mt-5" style={{backgroundColor: "#45526e"}}>
        <div className="p-4 pb-0">
          <section className="footer" style={{padding: "1rem 5%"}}>
            <div className="row">
              <div className="col-md-4 col-lg-4 col-xl-4 mt-3">
                <img src={logo} alt="" style={{width: "20rem"}} />
                <h1 className="text-uppercase mt-4 font-weight-bold">CÔNG TY TNHH TOFFAR</h1>
                <h1 className="text-uppercase mb-4" style={{fontStyle: "italic", fontWeight: "normal"}}>
                  TOFFAR STEEL FACILITIES
                </h1>
                <p></p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Infomation</h6>
                <p>
                  <a className="text-white">Lĩnh vực hoạt động</a>
                </p>
                <p>
                  <a className="text-white"> Quy trình sản xuất</a>
                </p>
                <p>
                  <a className="text-white">Quy trình lắp dựng</a>
                </p>
                <p>
                  <a className="text-white" href="#products">
                    Trang thiết bị sản xuất
                  </a>
                </p>
                <p>
                  <a className="text-white" href="#about">
                    Nguồn nhân lực
                  </a>
                </p>
                <p>
                  <a className="text-white" href="#project">
                    Dự án tiêu biểu
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Liên hệ</h6>
                <p>
                  <i className="fas fa-home  m-2"></i> Địa chỉ: 194-6 Nguyễn Trọng Tuyển, Phường 8, Phú Nhuận, Thành phố Hồ Chí Minh, Việt
                  Nam
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

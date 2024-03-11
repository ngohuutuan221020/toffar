/* eslint-disable no-unused-vars */
import "./Header.scss";
import Logo from "../../assets/Logo_toffar.png";
import {useEffect} from "react";
function Header() {
  window.onscroll = () => {
    document.querySelector(".header .navBar").classList.remove("active");
    // document.querySelector('.header .search-form').classList.remove('active');
  };
  const handleClickMenu = () => {
    document.querySelector(".header .navBar").classList.toggle("active");
  };
  const handleClickSearch = () => {
    document.querySelector(".header .search-form").classList.toggle("active");
  };
  const handleClickContact = () => {
    document.querySelector(".contactInfo").classList.toggle("active");
  };
  const handleClickCloseContact = () => {
    document.querySelector(".contactInfo").classList.remove("active");
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? header.classList.add("is-sticky") : header.classList.remove("is-sticky");
  };
  return (
    <>
      <div className="header header-section">
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navBar">
          <a href="#home">Trang chủ</a>
          <a href="#about">Giới thiệu</a>
          <a href="#service">Dịch vụ</a>
          <a href="#project">Dự án</a>
          <a href="#contact">Liên hệ</a>
          <a href="#partners">Đối tác</a>
        </nav>
        <div className="icons" style={{display: "flex"}}>
          <div id="menu-btn" className="bi bi-list" onClick={handleClickMenu}></div>
          <div id="info-btn" className="bi bi-info-circle-fill" onClick={handleClickContact}></div>
        </div>
        <form action="" className="search-form">
          <input type="search" name="" id="search-box" placeholder="Tìm kiếm ..." />
          <label htmlFor="search-box" className="bi bi-search"></label>
        </form>
      </div>
      <div className="contactInfo">
        <div id="close-contact-info" className="bi bi-x-circle" onClick={handleClickCloseContact}></div>
        <div className="info">
          <h3>Tên công ty tiếng Việt</h3>
          <p>(Company name in VietNamese)</p>
          <p>CÔNG TY TNHH TOFFAR</p>
        </div>
        <div className="info">
          <h3>Tên công ty tiếng Anh</h3>
          <p>(Company name in English)</p>
          <p>TOFFAR STEEL FACILITIES</p>
        </div>
        <div className="info">
          <i className="bi bi-telephone-fill"></i>
          <h3>Số điện thoại</h3>
          <p>(Phone)</p>
          <p>(028) 3 997 6667</p>
        </div>
        <div className="info">
          <i className="bi bi-envelope-at"></i>
          <h3>Email</h3>
          <p>info@toffar.com</p>
        </div>
        <div className="info">
          <i className="bi bi-person"></i>
          <h3>Đại diện pháp lý</h3>
          <p>Mr.NGUYỄN ĐỨC TRIỆU</p>
        </div>
        <div className="info">
          <i className="bi bi-file-earmark"></i>
          <h3>Mã số thuế</h3>
          <p>(Tax Code)</p>
          <p>0305585346</p>
        </div>
        <div className="info-building">
          <h3>Nhà máy sản xuất 1 (Factory 1)</h3>
          <p>Thửa đất số 177, tờ bản đồ số 11, đường 21, Khu phố 5, Phường Vĩnh Tân, Thị xã Tân Uyên, Tỉnh Bình Dương</p>
        </div>
        <div className="info-building">
          <h3>Nhà máy sản xuất 2 (Factory 2)</h3>
          <p>Ấp Tân Bình, xã Tân Hiệp, Huyện Tân Châu, Tỉnh Tây Ninh</p>
        </div>
      </div>
    </>
  );
}

export default Header;

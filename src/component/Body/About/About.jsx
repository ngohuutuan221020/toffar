import "./About.scss";
import Products from "../Products/Products";

import img from "../../../assets/about.png";

function About() {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">About</h1>
        <div className="row">
          <div className="image">
            <img src={img} />
          </div>
          <div className="content">
            <h3>Nguồn lực nhân sự</h3>
            <p>
              Nguồn nhân lực là động lực tăng trưởng bền vững của doanh nghiệp, phát triển một đội ngũ nhân sự có chuyên môn cao, tâm huyết
              với nghề để cùng xây dựng giá trị bền vững theo thời gian.
            </p>
            <p>
              Sự kết hợp và phát triển giữa mô hình công ty hiện đại tân tiến với một Ban lãnh đạo trình độ cao, giàu kinh nghiệm cùng với
              đội ngũ nhân viên năng động, luôn nghiệt huyết và sáng tạo, đó chính là niềm tự hào và lợi thế cạnh tranh của chúng tôi.
            </p>
          </div>
          <div className="box-container">
            <div className="box">
              <h3>500+</h3>
              <p>Tổng nhân sự</p>
            </div>
            <div className="box">
              <h3>40</h3>
              <p>Kỹ sư văn phòng</p>
            </div>
            <div className="box">
              <h3>280</h3>
              <p>Thi công lắp dựng</p>
            </div>
            <div className="box">
              <h3>170</h3>
              <p>Bộ phận sản xuất</p>
            </div>
            <div className="box">
              <h3>10</h3>
              <p>Bộ phận cung ứng, đặt hàng</p>
            </div>
          </div>
        </div>
      </section>
      <Products />
    </>
  );
}

export default About;

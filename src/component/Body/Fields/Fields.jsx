import "./Fields.scss";
import image1 from "../../../assets/field-1.jpg";
import image2 from "../../../assets/field-2.jpg";
import image3 from "../../../assets/field-3.jpg";
import ShowMoreText from "react-show-more-text";

function Fields() {
  return (
    <>
      <section className="Fields" id="Fields">
        <h1 className="heading">Lĩnh vực hoạt động</h1>
        <div className="field">
          <div className="box-1">
            <div className="image">
              <img src={image1} />
            </div>
          </div>
          <div className="box-2">
            <div className="image-text">
              <img src={image2} />
              <div className="text-content">
                <h4>Gia công cơ ký chế tạo kết cấu thép</h4>

                <ShowMoreText lines={2} more="Xem thêm" less="Đóng" className="content-css" truncatedEndingComponent={" ... "}>
                  <p>
                    CÔNG TY TNHH TOFFAR thành lập năm 2008 nhưng đã có nhiều năm kinh nghiệm trong lĩnh vực gia công cơ khí với các loại
                    hạng mục: Khung kèo thép tiền chế, kết cấu các loại cho nhà công nghiệp và dân dụng với mọi khẩu độ theo yêu cầu của
                    khách hàng.
                  </p>
                </ShowMoreText>
              </div>
            </div>
          </div>
          <div className="box-3">
            <div className="image-text">
              <img src={image3} />
              <div className="text-content">
                <h4>THI CÔNG CÁC CÔNG TRÌNH NHÀ XƯỞNG, NHÀ THÉP TIỀN CHẾ</h4>
                <a href="#project" className="btn btn-warning">
                  Xem thêm
                </a>
                {/* <ShowMoreText lines={3} more="Xem thêm" less="Đóng" className="content-css" truncatedEndingComponent={" ... "}>
                  <p>
                    CÔNG TY TNHH TOFFAR thành lập năm 2008 nhưng đã có nhiều năm kinh nghiệm trong lĩnh vực gia công cơ khí với các loại
                    hạng mục: Khung kèo thép tiền chế, kết cấu các loại cho nhà công nghiệp và dân dụng với mọi khẩu độ theo yêu cầu của
                    khách hàng.
                  </p>
                </ShowMoreText> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Fields;

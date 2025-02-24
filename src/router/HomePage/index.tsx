import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap Icons if you're using them
import './home.css'
const HomePage = () => {
    return (
<>
  {/* Hello world */}
  <div className="awesome" style={{ border: "1px solid red" }}>
    <header />
    <main>
      {/* banner */}
      <div id="banner" className="banner section-space--ptb_100">
        <div className="banner__bg" />
        <div className="banner__container">
          <div className="banner__container-inside container">
            <div className="">
              <div className="banner__breadcrumb">
                <span className="banner__breadcrumb-item">Trang chủ</span> /
                <span className="banner__breadcrumb-item">Mạng lưới</span> /
                <span className="banner__breadcrumb-item banner__breadcrumb-item--highlight">
                  Mở khóa iCloud
                </span>
              </div>
              <div className="banner__content">
                <h1 className="banner__heading">
                  Dịch vụ mở khóa iCloud - Vĩnh viễn. Đảm bảo trọn đời!
                </h1>
                <img
                  className="banner__icon"
                  src="https://cellunlocks.com/resize/100/images/WNEEYym8KMeuo7GOA5SX8f6buMt365JXISDyWJyn.jpg"
                  alt="Mở khóa iCloud"
                />
              </div>
              <div className="banner__description">
                <h5 className="banner__subheading h5 font-weight--regular text-white mb-20">
                  Đáng tin cậy. Giá cả phải chăng. Dễ dàng.
                </h5>
                <p className="banner__text">
                  Chúng tôi là công ty mở khóa iCloud hàng đầu, cung cấp dịch vụ
                  mở khóa iCloud và gỡ bỏ khóa kích hoạt mà không công ty nào
                  khác có thể thực hiện.
                </p>
              </div>
              <div className="banner__example">
                <h6 className="banner__example-heading">
                  iPhone của bạn trông như thế này không?
                </h6>
                <img
                  className="banner__example-image mt-3"
                  src="https://cellunlocks.com/assets/icloud-activation.webp"
                  alt="Kích hoạt iCloud"
                />
              </div>
            </div>
            <div className="container mt-5">
              <div className="banner__form-wrapper">
                <form className="banner__form">
                  <h3 className="banner__form-title">Gỡ bỏ kích hoạt iCloud</h3>
                  <p className="banner__form-text">
                    Gỡ bỏ tài khoản iCloud của chủ sở hữu trước khỏi thiết bị
                    của bạn.
                  </p>
                  <div className="banner__form-group mt-3">
                    <input
                      id="inputImei"
                      name="imei"
                      type="text"
                      className="banner__form-input"
                      placeholder="Nhập số IMEI "
                    />
                  </div>
                  <div className="banner__form-group mt-3">
                    <input
                      id="inputCode"
                      name="code"
                      type="text"
                      className="banner__form-input"
                      placeholder="Nhập Số Điện Thoại"
                    />
                  </div>
                  <div className="banner__form-group mt-3">
                    <select
                      name="device"
                      id="selectDevice"
                      className="banner__form-select"
                    >
                      <option value="">
                        Chọn thiết bị
                      </option>
                      <option value="iphone">iPhone</option>
                      <option value="ipad">iPad</option>
                      <option value="macbook">MacBook</option>
                      <option value="apple-watch">Apple Watch</option>
                    </select>
                  </div>
                  <a href="https://mylockshopicloud.com/dangnhap">
                    <button
                      id="submitBtn"
                      type="button"
                      className="banner__form-button btn btn-primary"
                    >
                      <i className="bi bi-unlock-fill" /> Mở khóa iCloud
                    </button>
                  </a>
                </form>
              </div>
            </div>
            {/* Progress Overlay */}
            <div id="progressOverlay">
              <div className="">
                <div className="loading-circle" />
                <div id="progressBar" className="mt-3 text-center">
                  0%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end banner */}
      {/* three step */}
      <div id="three-step" className="gradation-process section-space--ptb_100">
        <div className="gradation-process__container container">
          <div className="gradation-process__header section-space--mb_40 text-center">
            <div className="gradation-process__title-wrap">
              <h3 className="gradation-process__title">
                Mở khóa iCloud
                <span className="gradation-process__highlight text-color-primary">
                  Vĩnh viễn
                </span>
                Dịch vụ Trực tuyến - <br />
                Tự do mãi mãi!
              </h3>
              <h4 className="gradation-process__subheading mt-3">
                Miễn phí và mở khóa tài khoản iCloud trên bất kỳ thiết bị Apple
                đã qua sử dụng nào.
              </h4>
            </div>
            <div className="gradation-process__steps-title mt-4">
              <h3 className="gradation-process__steps-heading">
                <span className="gradation-process__steps-number bg-transparent">
                  03
                </span>
                <span className="gradation-process__steps-text">Bước</span>
              </h3>
            </div>
          </div>
          <div className="gradation-process__steps">
            <div className="gradation-process__step-item">
              <div className="gradation-process__circle-wrap">
                <div className="gradation-process__circle">
                  <span>1</span>
                </div>
              </div>
              <div className="gradation-process__line" />
              <div className="gradation-process__content-wrap">
                <h6 className="gradation-process__heading mt-3">
                  Gửi số IMEI của bạn
                </h6>
                <p className="gradation-process__description mt-2">
                  Với kết nối trực tiếp đến tất cả cơ sở dữ liệu của nhà sản
                  xuất, chúng tôi phát hiện ngay mẫu điện thoại và mạng của bạn
                  chỉ cần số IMEI.
                  <br />
                  KHÔNG công ty mở khóa nào khác làm được điều này!
                </p>
              </div>
            </div>
            <div className="gradation-process__step-item">
              <div className="gradation-process__circle-wrap">
                <div className="gradation-process__circle">
                  <span>2</span>
                </div>
              </div>
              <div className="gradation-process__line" />
              <div className="gradation-process__content-wrap">
                <h6 className="gradation-process__heading mt-3">
                  Chúng tôi xóa tài khoản <var>iCloud</var> hiện tại
                </h6>
                <p className="gradation-process__description mt-2">
                  Chúng tôi xóa thiết bị của bạn khỏi tài khoản iCloud của chủ
                  sở hữu trước, nghĩa là thiết bị sẽ không còn bị khóa kích
                  hoạt.
                </p>
              </div>
            </div>
            <div className="gradation-process__step-item">
              <div className="gradation-process__circle-wrap">
                <div className="gradation-process__circle">
                  <span>3</span>
                </div>
              </div>
              <div className="gradation-process__line" />
              <div className="gradation-process__content-wrap">
                <h6 className="gradation-process__heading mt-3">
                  Thiết lập tài khoản <var>iCloud</var> của bạn
                </h6>
                <p className="gradation-process__description mt-2">
                  Chúng tôi sẽ gửi email thông báo cho bạn rằng tài khoản iCloud
                  đã được xóa. Chỉ cần tắt và bật lại thiết bị của bạn, bạn sẽ
                  được nhắc thiết lập Apple ID mới.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end three step */}
      {/* Why we're great */}
      <div
        id="why-great"
        className="about about--delivering section-space--ptb_100"
      >
        <div className="about__container container">
          <div className="about__header section-title-wrap text-center section-space--mb_20">
            <h3 className="about__heading">
              CellUnlocks - Tiêu Chuẩn Vàng trong
              <span className="about__highlight text-color-primary">
                Mở Khóa Kích Hoạt iCloud
              </span>
            </h3>
            <p
              className="about__subheading mt-3"
              style={{ fontSize: "0.9rem" }}
            >
              Chuyên môn, Tốc độ, Minh bạch và Hỗ trợ trong Mọi lần Mở Khóa
            </p>
          </div>
          <div className="about__row row">
            <div className="about__col col-lg-6">
              <div className="about__content delivering-optimal-wrap">
                <div className="about__item list-item">
                  <div className="about__marker marker" />
                  <div className="about__title-wrap title-wrap">
                    <h5 className="about__title title">Chuyên Môn Vượt Trội</h5>
                    <p className="about__desc desc">
                      Đội ngũ của <var>CellUnlocks</var> bao gồm các chuyên gia
                      dày dặn kinh nghiệm trong lĩnh vực mở khóa kích hoạt
                      <var>iCloud</var>. Với nhiều năm kinh nghiệm sử dụng các
                      công cụ mở khóa iCloud khác nhau, chúng tôi đã phát triển
                      quy trình đảm bảo mở khóa thành công mỗi lần. Hãy tin
                      tưởng chúng tôi để xử lý thiết bị của bạn với sự cẩn thận
                      và chính xác cao nhất.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about__col col-lg-6">
              <div className="about__content delivering-optimal-wrap">
                <div className="about__item list-item">
                  <div className="about__marker marker" />
                  <div className="about__title-wrap title-wrap">
                    <h5 className="about__title title">
                      Dịch Vụ Mở Khóa <var>iCloud</var> Trực Tuyến Nhanh Chóng
                    </h5>
                    <p className="about__desc desc">
                      Thời gian là yếu tố quan trọng, và tại
                      <var>CellUnlocks</var>, chúng tôi hiểu điều đó. Phần mềm
                      mở khóa iCloud của chúng tôi được thiết kế để nhanh chóng
                      và hiệu quả, thường hoàn tất quá trình mở khóa tài khoản
                      iCloud trong chưa đầy 24 giờ. Chúng tôi đảm bảo thiết bị
                      của bạn sẵn sàng sử dụng sớm nhất có thể mà không làm giảm
                      chất lượng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about__col col-lg-6">
              <div className="about__content delivering-optimal-wrap">
                <div className="about__item list-item">
                  <div className="about__marker marker" />
                  <div className="about__title-wrap title-wrap">
                    <h5 className="about__title title">Giá Cả Minh Bạch</h5>
                    <p className="about__desc desc">
                      Tại <var>CellUnlocks</var>, chúng tôi đề cao tính trung
                      thực và minh bạch. Cấu trúc giá cho công cụ mở khóa iCloud
                      của chúng tôi rất rõ ràng, không có phí ẩn hoặc các khoản
                      phụ thu bất ngờ. Những gì bạn thấy là những gì bạn nhận
                      được, và chúng tôi đảm bảo rằng dịch vụ của chúng tôi xứng
                      đáng với từng đồng tiền bạn chi trả.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about__col col-lg-6">
              <div className="about__content delivering-optimal-wrap">
                <div className="about__item list-item">
                  <div className="about__marker marker" />
                  <div className="about__title-wrap title-wrap">
                    <h5 className="about__title title">
                      Hỗ Trợ Khách Hàng 24/7
                    </h5>
                    <p className="about__desc desc">
                      Chúng tôi tự hào về dịch vụ khách hàng xuất sắc của mình.
                      Đội ngũ tận tâm của chúng tôi luôn sẵn sàng hỗ trợ bạn bất
                      cứ lúc nào để giải đáp mọi câu hỏi hoặc thắc mắc về cách
                      mở khóa tài khoản <var>iCloud</var>. Chúng tôi luôn ở đây
                      để hướng dẫn bạn từng bước, đảm bảo một trải nghiệm mượt
                      mà và không rắc rối.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End why we're great */}
      {/* slide review */}
      <div id="review" className="">
        <div className="reviews-section">
          <div className="reviews-header text-center">
            <h2>Tuyệt vời 4.7/5</h2>
            <p>3,698 Đánh giá Đã Xác Thực từ Khách Hàng</p>
            <div className="star-rating">
              <span>★★★★★</span>
            </div>
            <p>12 - 21 / 3,698 (đánh giá)</p>
            <div className="reviews-nav">
              <button id="prevBtn" className="nav-button">
                ←
              </button>
              <button id="nextBtn" className="nav-button">
                →
              </button>
            </div>
          </div>
          <div className="reviews-container" id="reviewsCarousel">
            <div className="review-card">
              <div className="review-card-container">
                <div className="review-card__header">
                  <div className="review-card__rating">
                    <span className="review-card__star">★</span>
                    <span className="review-card__star">★</span>
                    <span className="review-card__star">★</span>
                    <span className="review-card__star">★</span>
                    <span className="review-card__star">★</span>
                  </div>
                  <span className="review-card__time">2 giờ trước</span>
                </div>
                <div className="review-card__user">
                  <img
                    className="review-card__user-flag"
                    src="./assets/imgs/united-states.png"
                    alt="Hoa Kỳ"
                  />
                  <span className="review-card__user-name">
                    Carlos Melendres
                  </span>
                </div>
                <div className="review-card__content">
                  <h4 className="review-card__title">Excelente trabajo imen</h4>
                  <p className="review-card__text">
                    Una excelente aplicación y con buen resultado yo me temía
                    que no funcionaria, pero funciona a la perfección muchas
                    gracias por todo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end slide review */}
      {/* cta */}
      <div id="cta" className="cta cta--one section-space--ptb_80 cta__bg--one">
        <div className="cta__container container">
          <div className="cta__row row align-items-center">
            <div className="cta__col-content col-xl-8 col-lg-7">
              <div className="cta__content md-text-center">
                <h3 className="cta__heading text-white">
                  Chúng tôi có thể mở khóa mọi điện thoại, mọi mạng!
                </h3>
              </div>
            </div>
            <div className="cta__col-button col-xl-4 col-lg-5">
              <div className="cta__button-group text-center">
                <a
                  href="https://cellunlocks.com/unlock-phones"
                  title="Dịch vụ mở khóa điện thoại"
                  aria-label="Dịch vụ mở khóa điện thoại"
                  className="cta__button btn btn-primary py-3 w-100"
                >
                  Xem Tất Cả Dịch Vụ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer className="footer">
      <div className="footer__area-wrapper bg-gray">
        <div className="footer__area section-space--ptb_80">
          <div className="container mb-4 mb-lg-0">
            <div className="row footer__widget-wrapper">
              <div className="col-lg-4 col-md-6 col-sm-6 footer__widget footer__widget--contact">
                <div className="footer__logo d-flex align-items-center">
                  <img
                    src="https://cellunlocks.com/assets/logo/CellUnlocks-white.png"
                    width={117}
                    height="28.5"
                    alt="CellUnlocks"
                    title="CellUnlocks"
                    className="footer__logo-img"
                  />
                  <img
                    src="https://cellunlocks.com/default/images/logo/logo-cards.png"
                    width={120}
                    height="25.8"
                    className="ms-3 mt-1 footer__logo-cards"
                    alt="Phương thức thanh toán"
                    title="Phương thức thanh toán"
                  />
                </div>
                <ul className="footer__list footer__list--contact">
                  <li>
                    Liên hệ:
                    <a
                      href="#"
                      title="sales@cellunlocks.com"
                      className="footer__link"
                    >
                      <span>sales@cellunlocks.com</span>
                    </a>
                  </li>
                  <li>
                    <span className="footer__copyright">
                      Bản quyền © 2011-2024
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://phonetopups.com"
                      className="footer__link footer__link--web"
                    >
                      https://phonetopups.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-6 footer__widget">
                <div className="footer__title">Hỗ trợ và giúp đỡ</div>
                <ul className="footer__list">
                  <li>
                    <a
                      href="https://cellunlocks.com/pricelist"
                      className="footer__link"
                    >
                      Mạng lưới hỗ trợ
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cellunlocks.com/faqs"
                      className="footer__link"
                    >
                      Câu hỏi thường gặp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tracking.cellunlocks.com"
                      className="footer__link"
                    >
                      Theo dõi đơn hàng
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-6 footer__widget">
                <div className="footer__title">Kiểm tra IMEI</div>
                <ul className="footer__list">
                  <li>
                    <a
                      href="https://cellunlocks.com/imei-check"
                      className="footer__link"
                    >
                      Kiểm tra iPhone
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cellunlocks.com/imei-check"
                      className="footer__link"
                    >
                      Kiểm tra Samsung
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cellunlocks.com/imei-check"
                      className="footer__link"
                    >
                      Kiểm tra các loại khác
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-6 footer__widget">
                <div className="footer__title">Dịch vụ</div>
                <ul className="footer__list">
                  <li>
                    <a
                      href="https://cellunlocks.com/unlock/iphone"
                      className="footer__link"
                    >
                      Mở khóa iPhone
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cellunlocks.com/unlock/samsung"
                      className="footer__link"
                    >
                      Mở khóa Samsung
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cellunlocks.com/unlock-phones"
                      className="footer__link"
                    >
                      Mở khóa các loại khác
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-6 footer__widget">
                <div className="footer__title">Điều hướng nhanh</div>
                <ul className="footer__list">
                  <li>
                    <a
                      href="https://cellunlocks.com/pages/terms-and-conditions"
                      className="footer__link"
                    >
                      Điều khoản và điều kiện
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cellunlocks.com/pages/refund-policy"
                      className="footer__link"
                    >
                      Chính sách hoàn tiền
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cellunlocks.com/pages/privacy-policy"
                      className="footer__link"
                    >
                      Chính sách bảo mật
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cellunlocks.com/reviews"
                      className="footer__link"
                    >
                      Đánh giá
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* Nút Unlock iCloud cố định */}
    <a href="https://mylockicloud.com/dangnhap">
      <button id="fixedButton" className="fixed-button">
        <i className="bi bi-unlock-fill" /> Mở khóa iCloud
      </button>
    </a>
  </div>
</>

    )
}
export default HomePage

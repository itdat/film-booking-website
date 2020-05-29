import React from "react";
import './footer.css'
export default function Footer() {
  return (
    <footer className="footer container-fuild">
      <div className="container">
        {/* Footer top */}
        <div className="footer-top">
          <div className="row footer-top-line">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 footer-top__secure">
              <div className="footer-top__item">
                <p className="footer-top__item-title">TIX</p>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Brand Guidelines</a>
                  </li>
                  <li>
                    <a href="#">Thõa thuận sử dụng</a>
                  </li>
                  <li>
                    <a href="#">Chính sách bảo mật</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 footer-top__partner">
              <div className="footer-top__item">
                <p className="footer-top__item-title">ĐỐI TÁC</p>
                <div className="partner-content">
                  <div className="row partner">
                    <div className="partner__item">
                      <a href="#">
                        <img src="./images/logo-dark-mode.png" alt />
                      </a>
                    </div>
                    <div className="partner__item">
                      <a href="#">
                        <img src="./images/cgvLogo.png" alt />
                      </a>
                    </div>
                    <div className="partner__item">
                      <a href="#">
                        <img src="./images/bhdLogo.png" alt />
                      </a>
                    </div>
                    <div className="partner__item">
                      <a href="#">
                        <img src="./images/lottleLogo.png" alt />
                      </a>
                    </div>
                  </div>
                  <div className="row partner">
                    <div className="partner__item">
                      <a href="#">
                        <img src="./images/footer6.png" alt />
                      </a>
                    </div>
                    <div className="partner__item">
                      <a href="#">
                        <img src="./images/footer4.png" alt />
                      </a>
                    </div>
                    <div className="partner__item">
                      <a href="#">
                        <img src="./images/footer2.png" alt />
                      </a>
                    </div>
                    <div className="partner__item">
                      <a href="#">
                        <img src="./images/lottleLogo.png" alt />
                      </a>
                    </div>
                  </div>
                  <div className="row partner">
                    <div className="partner__item">
                      <a href="#">
                        <img src="./images/lottleLogo.png" alt />
                      </a>
                    </div>
                    <div className="partner__item">
                      <a href="#">
                        <img src="./images/foot1.jpg" alt />
                      </a>
                    </div>
                    <div className="partner__item">
                      <a href="#">
                        <img src="./images/footer4.png" alt />
                      </a>
                    </div>
                    <div className="partner__item">
                      <a href="#">
                        <img src="./images/foot1.jpg" alt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 contact">
              <p className="footer-top__item-title">LIÊN HỆ</p>
              <div className="contact-content">
                <div className="row partner">
                  <div className="contact__item">
                    <a href="#">
                      <img src="./images/facebook-logo.png" alt />
                    </a>
                  </div>
                  <div className="contact__item">
                    <a href="#">
                      <img src="./images/zalopay_icon.png" alt />
                    </a>
                  </div>
                  <div className="contact__item">
                    <a href="#">
                      <img src="./images/cybersoft.png" alt />
                    </a>
                  </div>
                  <div className="contact__item">
                    <a href="#">
                      <img src="./images/lottleLogo.png" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3 services">
              <p className="footer-top__item-title">CHĂM SÓC KHÁCH HÀNG</p>
              <ul>
                <li>Hotline: 113</li>
                <li>
                  Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)
                </li>
                <li>Email hỗ trợ: hoidap@tix.vn</li>
              </ul>
            </div>
          </div>
        </div>
        {/* End footer top */}
        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="row">
            <div className="col-12 col-md-4 ">
              <img src="./images/zion-logo.jpg" alt />
            </div>
            <div className="col-12 col-md-4 ">
              <p className="footer-bottom-title text-white">
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
              </p>
              <p>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </p>
              <p>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,đăng ký thay
                đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu
                tư Thành phố Hồ Chí Minh cấp.
              </p>
              <p>Số Điện Thoại (Hotline): 1900 545 436</p>
              <p>
                Email: <a href="#">support@tix.vn</a>
              </p>
            </div>
            <div className="col-12 col-md-4">
              <img src="./images/license.png" alt="lisence" />
            </div>
          </div>
        </div>
        {/* End footer bottom */}
      </div>
    </footer>
  );
}

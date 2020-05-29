import React, { Component } from "react";
import "./news.css";
export default class News extends Component {
  render() {
    return (
      <div>
        <section className="news container">
          <div className="home-title">
            <a className="active">TIN TỨC</a>
            <a>ƯU ĐÃI</a>
          </div>
          <div className="news__content">
            <div className="row">
              <div className="col-12 col-md-6 padding-col">
                <div className="news-item">
                  <div href="#" className="news-item__img">
                    <img
                      src="./images/coco-nguon-cam-hung-mexico-bat-tan-chay-tran-trong-tac-pham-15112415262155.jpg"
                      alt
                    />
                    <div className="movieItemOverlay" />
                  </div>
                  <a href="#" className="news-item__title">
                    <p>Batman vs Jorker ai tốt ai xấu</p>
                  </a>
                  <p className="news-item__description">
                    Người ta nói Batman có một giàn phản diện hay nhất trong
                    giới truyện tranh cũng như điện ảnh, nhưng mình biết chắc
                    chắn khi nghe câu đó người ta chỉ nghĩ đến một người, The
                    Joker - Hoàng tử hề của giới tội phạm.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 padding-col">
                <div className="news-item">
                  <div href="#" className="news-item__img">
                    <img
                      src="./images/diem-mat-dan-sao-dinh-dam-trong-bom-tan-lien-minh-cong-ly-15106519084263.jpg"
                      alt
                    />
                    <div className="movieItemOverlay" />
                  </div>
                  <a href="#" className="news-item__title">
                    <p>Điểm mặt dàn sao hot trong các phim sắp tới</p>
                  </a>
                  <p className="news-item__description">
                    Người ta nói Batman có một giàn phản diện hay nhất trong
                    giới truyện tranh cũng như điện ảnh.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 padding-col">
              <div className="news-item">
                <div href="#" className="news-item__img">
                  <img
                    src="./images/nhom-losers-club-lon-dang-dan-dan-lo-dien-trong-sieu-pham-it-chapter-two-15265444875493.jpg"
                    alt
                  />
                  <div className="movieItemOverlay" />
                </div>
                <a href="#" className="news-item__title">
                  <p>Batman vs Jorker ai tốt ai xấu</p>
                </a>
                <p className="news-item__description">
                  Người ta nói Batman có một giàn phản diện hay nhất trong giới
                  truyện tranh cũng như điện ảnh, nhưng mình biết chắc chắn khi
                  nghe câu đó người ta chỉ nghĩ đến một người, The Joker - Hoàng
                  tử hề của giới tội phạm.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 padding-col">
              <div className="news-item">
                <div href="#" className="news-item__img">
                  <img
                    src="./images/coco-nguon-cam-hung-mexico-bat-tan-chay-tran-trong-tac-pham-15112415262155.jpg"
                    alt
                  />
                  <div className="movieItemOverlay" />
                </div>
                <a href="#" className="news-item__title">
                  <p>Batman vs Jorker ai tốt ai xấu</p>
                </a>
                <p className="news-item__description">
                  Người ta nói Batman có một giàn phản diện hay nhất trong giới
                  truyện tranh cũng như điện ảnh, nhưng mình biết chắc chắn khi
                  nghe câu đó người ta chỉ nghĩ đến một người, The Joker - Hoàng
                  tử hề của giới tội phạm.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 padding-col">
              <div className="news-item">
                <div href="#" className="news-item__img">
                  <img
                    src="./images/coco-nguon-cam-hung-mexico-bat-tan-chay-tran-trong-tac-pham-15112415262155.jpg"
                    alt
                  />
                  <div className="movieItemOverlay" />
                </div>
                <a href="#" className="news-item__title">
                  <p>Batman vs Jorker ai tốt ai xấu</p>
                </a>
                <p className="news-item__description">
                  Người ta nói Batman có một giàn phản diện hay nhất trong giới
                  truyện tranh cũng như điện ảnh, nhưng mình biết chắc chắn khi
                  nghe câu đó người ta chỉ nghĩ đến một người, The Joker - Hoàng
                  tử hề của giới tội phạm.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

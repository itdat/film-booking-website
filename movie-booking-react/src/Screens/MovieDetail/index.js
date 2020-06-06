import React, { Component, Fragment } from "react";
import {fetchDetailMovie} from '../../Redux/Action/user'
import { connect } from "react-redux";
import './movieDetail.css'
class MovieDetail extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDetailMovie(this.props.match.params.movieID));
  }
  render() {
    let movieDetail = this.props.movieDetail;
    return (
      <Fragment>
        <div className="background p-3 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="poster">
                  <img className="poster-img" src={movieDetail.hinhAnh} alt />
                  <button
                    className="trailer"
                    data-toggle="modal"
                    data-target="#trailer"
                  >
                    <img src="/images/play-video.png" alt />
                  </button>
                </div>
              </div>
              <div className="col-md-8 d-flex justify-content-center align-items-center text-center mt-3">
                <div className="detail_in_poster align-items-center">
                  <p>{movieDetail.ngayKhoiChieu}</p>
                  <div className="film-name">
                    <span className="mb-0 align-middle badge badge-primary mr-1">
                      C16
                    </span>
                    <span className="align-middle">{movieDetail.tenPhim}</span>
                  </div>
                  <div className="inline-block">
                    <span>120 phút</span>- <span>10.0 IMDb</span> -{" "}
                    <span>2D-3D</span>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary mt-3">
                      ĐẶT VÉ NGAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <div className="home-title">
              <a className="active">LỊCH CHIẾU</a>
              <a>THÔNG TIN</a>
              <a>ĐÁNH GIÁ</a>
            </div>
            <div className="infomation rounded">
              <div className="row p-3">
                <div className="col-md-6">
                  <div className="row information__item">
                    <p className="information__title">Trạng thái:</p>
                    <p>Còn vé</p>
                  </div>
                  <div className="row information__item">
                    <p className="information__title">Điểm IMDb:</p>
                    <p>10.0</p>
                  </div>
                  <div className="row information__item">
                    <p className="information__title">Ngày phát hành:</p>
                    <p>11/04/2020</p>
                  </div>
                  <div className="row information__item">
                    <p className="information__title">Thời lượng:</p>
                    <p>120 phút</p>
                  </div>
                  <div className="row information__item">
                    <p className="information__title">Thể loại:</p>
                    <p>Hành động</p>
                  </div>
                  <div className="row information__item">
                    <p className="information__title">Định dạng:</p>
                    <p>2D/3D</p>
                  </div>
                  <div className="row information__item">
                    <p className="information__title">Đạo diễn:</p>
                    <p>VMH</p>
                  </div>
                  <div className="row information__item">
                    <p className="information__title">Quốc gia SX:</p>
                    <p>Mỹ</p>
                  </div>
                </div>
                <div className="col-md-6 justify-content-start px-0">
                  <div className="information__item">
                    <p className="information__title">Nội dung:</p>
                    <p className="text-justify">{movieDetail.moTa}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Button trigger modal */}
          {/* Modal */}
          <div
            className="modal fade"
            id="trailer"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div className="modal-content">
                <iframe
                  width={813}
                  height={457}
                  src={movieDetail.trailer}
                  frameBorder={0}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movie.movieDetail,
  };
};
export default connect(mapStateToProps)(MovieDetail);

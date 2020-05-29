import axios from "axios";

class MovieServices {

// GET list of movie
  getMovies() {
    return axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    });
  }

  getMovieDetail(id){
    return axios({
      method:"GET",
      url:`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}
      `
    });
  }
}

export default MovieServices;

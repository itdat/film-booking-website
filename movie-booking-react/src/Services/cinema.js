import axios from "axios";

class CinemaServices {
  getCinemaClusters() {
    return axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
    });
  }

  // Lấy danh sách rạp theo hệ thống rạp
  getCinemas(cinemaType){
    return axios({
      method:'GET',
      url:`http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cinemaType}
      `
    })
  }

  getMovieSchedule(cinemaType){
    return axios({
      method:'GET',
      url:`http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${cinemaType}&maNhom=GP01`
    })
  }
}

export default CinemaServices;
import axios from "axios";

class CinemaServices {
  getCinemaClusters() {
    return axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
    });
  }
}

export default CinemaServices;
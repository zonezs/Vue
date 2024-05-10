import axios from "../utils/request";
import path from "./path";

const api = {
  // 获取接口数据
  getHeFei() {
    return axios.get(path.baseUrl + path.soulWordsUrl);
  },
};

export default api;

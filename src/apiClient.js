import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: API_URL, // 기본 URL 추가
});

apiClient.interceptors.request.use(
  (config) => {
    return config; // 요청 계속 진행
  },
  (error) => {
    return Promise.reject(error); // 요청 에러 처리
  }
);

// 생성한 인스턴스 사용
export default apiClient;

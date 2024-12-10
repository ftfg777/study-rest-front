import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner"; // 로딩 컴포넌트 임포트
import { useSelector, useDispatch } from "react-redux";
import { startLoading, stopLoading } from "./redux/loadingSlice";
import axios from "./apiClient";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading); // Redux 상태 가져오기

  useEffect(() => {
    // API 요청 시작 전에 로딩 상태 시작
    dispatch(startLoading());

    const timeout = setTimeout(async () => {
      try {
        const response = await axios.get("greeting");
        console.log(response.data);
        setData(response.data); // 데이터 저장
      } catch (err) {
        setError(err); // 에러 저장
      } finally {
        // API 요청이 끝나면 로딩 상태 종료
        dispatch(stopLoading());
      }
    }, 3000); // 3초 후 실행

    // 컴포넌트가 언마운트될 때 setTimeout을 정리하는 코드
    return () => clearTimeout(timeout);
  }, [dispatch]); // 빈 배열은 컴포넌트 마운트 시 한 번만 실행

  if (loading) {
    return <LoadingSpinner />; // 로딩 컴포넌트 사용
  }
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Fetched Data</h1>
      {data.id}
      {data.content}
    </>
  );
}

export default App;

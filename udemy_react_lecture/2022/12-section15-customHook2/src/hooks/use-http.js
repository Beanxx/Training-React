import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        // GET요청의 경우 method, headers, body를 안 넘겨줘도 되기 때문에
        // 인자로 넘어오는게 없으면 기본값 처리를 해줌
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json(); // 응답 변환

      // 데이터를 가져오면 이 훅을 사용하는 컴포넌트로부터 얻은 함수를 실행해서 그 함수에 데이터를 넘기는 방법 사용
      // => 세부적인 변환 과정은 훅이 사용되는 컴포넌트 안에서 정의 가능!
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;

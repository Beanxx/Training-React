const OddEvenResult = ({ count }) => {
  console.log(count);
  // 부모 컴포넌트 요소가 변경이 되어 리렌더링 되어도 자식 요소 컴포넌트도 리렌더링됨!
  return <>{count % 2 === 0 ? "짝수" : "홀수"}</>;
};

export default OddEvenResult;

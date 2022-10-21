// 하나의 루트로 요소로 묶어주는 역할
// 보통 이렇게 Wrapper를 별도로 만들어서 사용하진 않고, React.Fragment 사용
const Wrapper = (props) => {
  return props.children; // 하나만 반환
};

export default Wrapper;

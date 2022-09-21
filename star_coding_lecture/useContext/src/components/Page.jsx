import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

// 실질적으로 Page 컴포넌트는 isDark, setIsDark 값 필요 없음
// Page 하위 컴포넌트들이 필요 -> context 처리
function Page() {
  // context를 사용했기 때문에 props로 값을 안 넘겨줘도 됌!
  // const data = useContext(ThemeContext);
  // console.log("data: ", data);

  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Page;

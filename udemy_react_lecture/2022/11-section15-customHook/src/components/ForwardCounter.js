import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter(); // 기본값이 존재하므로 인자 없어도 OK

  return <Card>{counter}</Card>;
};

export default ForwardCounter;

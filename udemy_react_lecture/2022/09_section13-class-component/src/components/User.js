import { Component } from "react";
import classes from "./User.module.css";

// Component 키워드는 곧 props를 사용하기 위함! -> props 사용시엔 this.props.~
class User extends Component {
  componentWillUnmount() {
    console.log("User will unmount!");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;

// 클래스형과 함수형 컴포넌트 방식을 섞어 쓸 수도 있다~

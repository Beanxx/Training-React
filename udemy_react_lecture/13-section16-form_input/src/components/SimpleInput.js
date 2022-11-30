import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  // 입력값이 건드려진 뒤면서 값이 유효하지 않은 경우 => true (error message 표시해주기)

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true); // input focus를 잃었다는건 그 전에 사용자가 input을 건드렸다는 의미이기 때문!
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true); // input focus를 잃었다는건 그 전에 사용자가 input을 건드렸다는 의미이기 때문!
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // 기본 동작인 http 요청 막기 -> 새로고침 방지

    setEnteredNameTouched(true);

    // trim()으로 값 사이에 있는 공백들 모두 제거
    if (!enteredNameIsValid) return; // 함수 뒷부분 실행되지 않도록 처리

    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredName(""); // 입력된 값 초기화 -> invalid 상태가 되어버리므로 아래처럼 touched도 false로 변경해주어야 함
    setEnteredNameTouched(false);

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

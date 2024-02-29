import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  //an alternative to combine the states:
  // const [enteredValues, setEnteredValue] = useState({
  //   email: "",
  //   password: "",
  // });

  // //isto taka sakame da keep tack of whether the user touched this value or not

  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // });

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty(value));

  // const emailIsInvalid =
  //   didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty;
  // const passwordIsInvalid =
  //   didEdit.password && !hasMinLength(enteredValues.password, 6) && !isNotEmpty;

  function handleSubmit(event) {
    event.preventDefault(); // it prevents the default browser behaviour which would be to generate and send this HTTP request, the page is not getting re-loaded
    // console.log(enteredValue);
    // setEnteredValue({
    //   email: "",
    //   password: "",
    // });
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }

  // function handleInputChange(identifier, event) {
  //   setEnteredValue((prevValues) => ({
  //     // so the other field value is not lost
  //     ...prevValues,
  //     [identifier]: event.target.value, // holds the name of property that should be set
  //   }));
  //   setDidEdit((prevEdit) => ({
  //     //koga userot ke pocne da pisuva da se resetira vrednosta
  //     //to reset whenever we start typing
  //     ...prevEdit,
  //     [identifier]: false,
  //   }));
  // }

  // function handleInputBlur(identifier) {
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: true, //this will be fired when an input is blurred
  //   }));
  // }
  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

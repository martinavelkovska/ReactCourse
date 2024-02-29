import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault(); // it prevents the default browser behaviour which would be to generate and send this HTTP request, the page is not getting re-loaded
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    // console.log(enteredEmail, enteredPassword);

    // //resetting inputs
    // email.current.value = ""; // not recommended
    // password.current.value = ""; // not recommended

    //I CAN validate obnly when the user submits the form

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return; // we might want to make sure that no other code gets executed
    }
    setEmailIsInvalid(false);

    console.log("Sending HTTP request...."); //if invalid data has been entered in the if condition we don't wanna this code for execution
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address!</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

import { useState } from "react";
import { isNotEmpty, hasMinLength } from "../util/validation";
export function useInput(defaultValue, validationFn){ //once per input element in the form
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState(false);

  //validation
    const valueIsValid = validationFn(enteredValue);

  function handleInputChange( event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {  /// treba da gi izlozime do komponetata kade so ke so koristi ovoj hook
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid
  };
}
import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName,setEnteredName] = useState('')
  const [enteredNameTouched,setEnteredNameTouched] = useState(false);

  // we can eliminate enteredNameIsValid useState and replace it with varible as it will 
  // re render when any useState changes
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;


  const nameInputChangeHandler = (event) =>{
    setEnteredName(event.target.value)

  }

  const nameInputBlurHandler = (event)=>{
    setEnteredNameTouched(true)

  }
  const onSubmitHandler = (event)=>{
    event.preventDefault()

    // after the form is submitted then we consider that every feild is touched 
    setEnteredNameTouched(true)

    // If we have empty feild then do nothing
    if (!enteredNameIsValid){
      return
    }

    console.log(enteredName);
    setEnteredName('')
    setEnteredNameTouched(false)
  }



  const nameInputClasses = nameInputIsInvalid?'form-control invalid':'form-control'
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlurHandler}/>
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

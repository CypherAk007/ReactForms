import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName,setEnteredName] = useState('')
  const [enteredNameTouched,setEnteredNameTouched] = useState(false);
  
  const [enteredEmail,setEnteredEmail]= useState('')
  const [enteredEmailTouched,setEnteredEmailTouched] = useState(false);

  // we can eliminate enteredNameIsValid useState and replace it with varible as it will 
  // re render when any useState changes
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@')
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid){
    formIsValid=true;
  }

  // dependencies in useEffect are all the useStates of the input feilds

  const nameInputChangeHandler = (event) =>{
    setEnteredName(event.target.value)

  }

  const nameInputBlurHandler = (event)=>{
    setEnteredNameTouched(true)

  }

  const emailInputChangeHandler = (event)=>{
    setEnteredEmail(event.target.value)
  }

  const emailInputBlurHandler = (event)=>{
    setEnteredEmailTouched(true)
  }

  const onSubmitHandler = (event)=>{
    event.preventDefault()

    // after the form is submitted then we consider that every feild is touched 
    setEnteredNameTouched(true)
    setEnteredEmailTouched(true)

    // If we have empty feild then do nothing
    if ((!enteredNameIsValid) || (!enteredEmailIsValid)){
      return
    }

    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName('')
    setEnteredNameTouched(false)
    setEnteredEmail('')
    setEnteredEmailTouched(false)
  }



  const nameInputClasses = nameInputIsInvalid?'form-control invalid':'form-control'
  const emailInputClasses = emailInputIsInvalid?'form-control invalid':'form-control'
  
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlurHandler}/>
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='text' id='email' onChange={emailInputChangeHandler} value={enteredEmail} onBlur={emailInputBlurHandler}/>
        {emailInputIsInvalid && <p className="error-text">Invalid Email.</p>}
      </div>


      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

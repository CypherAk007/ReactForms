import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName,setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredNameTouched,setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) =>{
    setEnteredName(event.target.value)

    // onEvery key stroke we check  if input is valid 
    if (event.target.value.trim()!==''){
      setEnteredNameIsValid(true)
    }
  }

  const nameInputBlurHandler = (event)=>{
    setEnteredNameTouched(true)

    // we check if the user has not left the input feild empty.
    if (enteredName.trim()===''){
      setEnteredNameIsValid(false)
      
    }
  }
  const onSubmitHandler = (event)=>{
    event.preventDefault()

    // after the form is submitted then we consider that every feild is touched 
    setEnteredNameTouched(true)

    // If we have empty feild then do nothing
    if (enteredName.trim()===''){
      setEnteredNameIsValid(false)
      return
    }

    console.log(enteredName);
    setEnteredName('')
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  useEffect(()=>{
    console.log(enteredName);
  },[enteredName])

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

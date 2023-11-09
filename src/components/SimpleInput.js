import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName,setEnteredName] = useState('')

  const nameInputChangeHandler = (event) =>{
    setEnteredName(event.target.value)
  }
  const onSubmitHandler = (event)=>{
    event.preventDefault()
    // If we have empty feild then do nothing
    if (enteredName.trim()===''){
      return
    }
    console.log(enteredName);
    setEnteredName('')
  }
  useEffect(()=>{
    console.log(enteredName);
  },[enteredName])

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

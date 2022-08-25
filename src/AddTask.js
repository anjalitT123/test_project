import React, { useEffect, useState } from "react";

function RegistrationView() {
  const [inputValues, setInputValue] = useState({
    task: "",
    description: "",
  
    date: "",
  });

  const [validation, setValidation] = useState({
    task: "",
    description: "",
  
   date: "",
  });


  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let errors = validation;

    //first Name validation
    if (!inputValues.task) {
      errors.task = "First name is required";
    } else {
      errors.task = "";
    }
    //last Name validation
    if (!inputValues.description.trim()) {
      errors.description = "Last name is required";
    } else {
      errors.description = "";
    }


    if (!inputValues.date) {
      errors.date = "password is required";
    } else {
      errors.date = "";
    }


    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="sign-up-form">
        <form
          id="registrationForm"
          action="/"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="form-control">
            <input
              placeholder="First Name"
              type="string"
              name="task"
              id="task"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.task}
            />
            {validation.task && <p>{validation.task}</p>}
            {validation.task && console.log(validation)}
          </div>
          <div className="form-control">
            <input
              placeholder="Last Name"
              type="string"
              id="description"
              name="description"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.lName}
            />
            {validation.lName && <p>{validation.lName}</p>}
          </div>
         
          

          <div className="form-control">
            <input
              placeholder="date"
              type="date"
              name="date"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.date}
              
            />
            {validation.date && <p>{validation.date}</p>}
          </div>
          
          <button type="submit" id="submit-button">
            submit
          </button>
          <span className="form-input-login">
            Already have an account? Login <a href="#">here</a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default RegistrationView;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTutorial } from "../actions/tutorials";

const AddEmployee = () => {
  const initialTutorialState = {
    id: null,
    empname: "",
    age: "",
    state: "",
    country: "",
    published: false
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    const { empname, age,state,country } = tutorial;

    dispatch(createTutorial(empname, age,state,country ))
      .then(data => {
        setTutorial({
          id: data.id,
          empname: data.empname,
          age: data.age,
          state: data.state,
          country: data.country,
          published: data.published
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="empname">Name</label>
            <input
              type="text"
              className="form-control"
              id="empname"
              required
              value={tutorial.title}
              onChange={handleInputChange}
              name="empname"
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              required
              value={tutorial.description}
              onChange={handleInputChange}
              name="age"
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              className="form-control"
              id="state"
              required
              value={tutorial.description}
              onChange={handleInputChange}
              name="state"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              required
              value={tutorial.description}
              onChange={handleInputChange}
              name="country"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddEmployee;
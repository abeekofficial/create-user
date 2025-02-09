import React, { useState } from "react";
import "./newUserForm.css";
import { v4 as uuidv4 } from "uuid";

const NewUserForm = ({ closeModal, addUser }) => {
  const [user, setUser] = useState({
    id: uuidv4(),
    image: "https://images.app.goo.gl/kDSQsRqZswHSAU4L9",
    firstName: "",
    lastName: "",
    age: null,
    country: "",
    job: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...user, id: uuidv4() }; // Generate id on submit
    addUser(newUser);
    closeModal();
  };

  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create new user</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">
              <span>Image url:</span>
              <input
                type="url"
                required
                value={user.image}
                onChange={(e) =>
                  setUser((prev) => {
                    return { ...prev, image: e.target.value };
                  })
                }
              />
            </label>
            <label htmlFor="">
              <span>Firstname</span>
              <input
                type="text"
                required
                onChange={(e) =>
                  setUser((prev) => {
                    return { ...prev, firstName: e.target.value };
                  })
                }
              />
            </label>
            <label htmlFor="">
              <span>Lastname</span>
              <input
                type="text"
                required
                onChange={(e) =>
                  setUser((prev) => {
                    return { ...prev, lastName: e.target.value };
                  })
                }
              />
            </label>
            <label htmlFor="">
              <span>Country</span>
              <input
                type="text"
                required
                onChange={(e) =>
                  setUser((prev) => {
                    return { ...prev, country: e.target.value };
                  })
                }
              />
            </label>
            <label htmlFor="">
              <span>Age</span>
              <input
                type="number"
                required
                onChange={(e) =>
                  setUser((prev) => {
                    return { ...prev, age: e.target.value };
                  })
                }
              />
            </label>
            <label htmlFor="">
              <span>Job</span>
              <input
                type="text"
                onChange={(e) =>
                  setUser((prev) => {
                    return { ...prev, job: e.target.value };
                  })
                }
              />
            </label>
            <div className="gender">
              <span>Gender:</span>
              <label>
                <small>Male</small>
                <input
                  type="radio"
                  required
                  name="gender"
                  value={"male"}
                  onChange={(e) =>
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value };
                    })
                  }
                />
              </label>
              <label>
                <small>Female</small>
                <input
                  type="radio"
                  required
                  name="gender"
                  value={"female"}
                  onChange={(e) =>
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value };
                    })
                  }
                />
              </label>
            </div>
            <button className="modal-btn">Submit</button>
            <div className="modal-btns">
              <button onClick={closeModal} className="close-modal">
                &times;
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUserForm;

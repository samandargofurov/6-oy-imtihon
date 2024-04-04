import { NavLink } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

function Register() {
  const name = useRef("");
  const email = useRef();
  const password = useRef("");
  const [ users, setUser ] = useState('');

  useEffect(() => {
    let u = getUsers();
    setUsers(u);
  }, []);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function validate(username, email, password) {
    if (username.trim().value > 3) {
      alert("username is empty");
      return false;
    }

    const emailValid = validateEmail(email);
    if (!emailValid) {
      alert("Email is empty");
      return false;
    }

    if (pass.trim().length < 3) {
      alert("Password is empty");
      return false;
    }

    return true;
  }

  function getUsers() {
    let users = [];
  
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
    }
  
    return users;
  }

  function handleClick(e) {
    e.preventDefault();

    const isValid = validate(username, email, password);

    if (isValid) {
      const user = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };
    }
    let copied = JSON.parse(JSON.stringify(users));
      copied.push(user);
      localStorage.setItem("users", JSON.stringify(copied));
      name("");
      email('');
      password("");
      setUsers(copied);
  }

  return (
    <>
      <div className="container mx-auto">
        <form className="d-flex flex-column w-50 mx-auto gap-3 mt-5 p-5 shadow p-3 bg-body-tertiary rounded">
          <h1 className="text-center">Register</h1>
          <div class="mb-2">
            <label for="exampleFormControlInput1" class="form-label">
              Username
            </label>
            <input
              ref={name}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-2">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              ref={email}
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-2">
            <label for="exampleFormControlInput1" class="form-label">
              Password
            </label>
            <input
              ref={password}
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <button className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>

          <div className="whatif d-flex gap-5 mt-3 mb-3">
            <span>Already a member?</span>
            <NavLink to="/login">
              <span>Login</span>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;

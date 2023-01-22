import React, { useState } from "react";
import Error from "./Error";
import FormField from "./FormField";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        name,
        location,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="containerr">
		  <div className="contact-boxx">
        <div className="lefty"></div>
			  <div className="righty">
          <h2>Sign Up</h2>
          <input
            type="text"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="field1"
            placeholder="Your Names"
          />
          <input
            type="text"
            id="location"
            autoComplete="off"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="field1"
            placeholder="Your Location"
          />
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="field1"
            placeholder="Your Username"
          />
				  <input
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="field1"
            placeholder="Password"
          />
          <input
            type="password"
            id="password_confirmation"
            autoComplete="new-password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="field1"
            placeholder="Confirm Your Password"
          />
				  <button
            className="btn1"
            type="submit">{isLoading ? "Loading..." : "Sign Up"}
          </button>
				  <FormField>
         		{errors.map((err) => (
           		<Error key={err}>{err}</Error>
         		))}
       		</FormField>
          <div class="socials">
            <a href=" "><i class="fab fa-facebook-f"></i></a>
            <a href=" "><i class="fab fa-google-plus-g"></i></a>
            <a href=" "><i class="fa-brands fa-yahoo"></i></a>
          </div>
        </div>
      </div>
      </div>
    </form>
  );
}

export default SignUpForm;

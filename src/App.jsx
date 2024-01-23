import "./styles.css";
import { useState } from "react";

export default function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setlastName] = useState("");
  return (
    <div>
      <h1>Full Name Display</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target.firstName.value) {
            setFirstName(e.target.firstName.value);
          }
          if (e.target.lastName.value) {
            setlastName(e.target.lastName.value);
          }
        }}
      >
        <div>
          <label for="firstName">First Name:</label>
          <input required id="firstName" name="firstName" type="text" />
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input required id="flastName" name="lastName" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className={firstname && lastname ? "name" : "hidden" }>{`Full Name: ${firstname + " " + lastname}`}</div>
    </div>
  );
}

import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  // const [firstname, setFirstName] = useState("");
  // const [lastname, setlastName] = useState("");
  const [inputFirst, setInputFirst] = useState("");
  const [inputLast, setInputLast] = useState("");
  const [FullName, setFullName] = useState("");
  
  useEffect(() =>{
     if(inputFirst.length <=0){
       setFullName("")
     }else if(inputLast.length <=0){
      setFullName("")
     }
  },[inputFirst, inputLast])


  return (
    <div>
      <h1>Full Name Display</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
            setFullName(inputFirst + " " + inputLast);
        }}
      >
        <div>
          <label >First Name:</label>
          <input onChange={(e) => {
            setInputFirst(e.target.value)}} required id="firstName" name="firstName" type="text" />
        </div>
        <div>
          <label >Last Name:</label>
          <input onChange={(e) => setInputLast(e.target.value)} required id="flastName" name="lastName" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
      {FullName? <div className="name">{`Full Name: ${FullName}`}</div>:null}
      
    </div>
  );
}

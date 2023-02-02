import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [regNo, setRegNo] = useState("")
  const [regNoError, setRegNoError] = useState("")
  const [lpumail, setLpumail] = useState("")
  const [lpumailError, setLpumailError] = useState("")
  const [pNUm, setPnum] = useState("")
  const [pNUmError, setPnumError] = useState("")
  const [domain, setDomain] = useState("")
  const [domainError, setDomainError] = useState("")
  const [pswd, setPswd] = useState("")
  const [pswdError, setPswdError] = useState("")
  const [emptyError, setEmptyError] = useState("")
  const [userName, setUserName] = useState("Will be shown once entered")


  const ResetError = () => {
    setNameError("")
    setEmptyError("")
    setDomainError("")
    setPswdError("")
    setPnumError("")
    setRegNoError("")
    setEmailError("")
    setLpumailError("")
  }
  const Result = `Name: ${name}  ,
  Registration Number: ${regNo}  ,
  Email: ${email}  ,
  LPU Mail: ${lpumail}  ,
  Domain: ${domain}  ,
  Phone Number: ${pNUm}`



  const validation = () => {
    if (name === "" || email === "" || regNo === "" || lpumail === "" || pNUm === "" || domain === "" || pswd === "") {
      ResetError()
      setEmptyError("**All fields are mandatory, Please fill all the fields**")
      setUserName("")
      return false
    }
    else if (!name.match(/^[A-Za-z0-9- ]+$/)) {
      ResetError()
      setNameError("**Invalid character has been used in Name**")
      setUserName("")
      return false
    }
    else if (!pNUm.match(/^[0-9-]+$/)) {
      ResetError()
      setPnumError("**Invalid Phone Number**")
      setUserName("")
      return false
    }
    else if (!regNo.match(/^[0-9-]+$/)) {
      ResetError()
      setRegNoError("**Invalid Registration Number**")
      setUserName("")
      return false
    }
    else if (!email.includes("@")) {
      ResetError()
      setEmailError("**Please type a valid Email**")
      setUserName("")
      return false
    }
    else if (!lpumail.includes("@lpu")) {
      ResetError()
      setLpumailError("**PLease type a valid LPU Email**")
      setUserName("")
      return false
    }
    else if (!domain.match(/WebD|DS|Cyber/i)) {
      ResetError()
      setDomainError("**Please Choose from the given domains**")
      setUserName("")
      return false
    }
    else if (pswd.length < 8) {
      ResetError()
      setPswdError("**Mininum characters should be 8**")
      setUserName("")
      return false
    }
    else {
      return true
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault()

    const isvalid = validation()
    if (isvalid) {
      setUserName(Result)
      setDomain("")
      setEmail("")
      setLpumail("")
      setName("")
      setPnum("")
      setPswd("")
      setRegNo("")
      ResetError()
    } else {
      setUserName("No Data Found")
    }

  }


  return (
    <div className='text-bg-secondary p-3'>
      <div className='App-header'>
        Student Form
      </div>
      <div className='body'>
      <div className="container text">
        <form onSubmit={handleSubmit}>
          <label className="form-label">Name </label>
          <input className="form-control" type="text" placeholder="Full Name" value={name} onChange={(e) => { setName(e.target.value) }} /><br />
          <p>{nameError}</p>
          <label className="form-label">Registration Number </label>
          <input className="form-control" type="text" placeholder=" eg 1208689" value={regNo} onChange={(e) => { setRegNo(e.target.value) }} /><br />
          <p>{regNoError}</p>
          <label className="form-label">LPU email Id </label>
          <input className="form-control" type="text" placeholder='YourName.1208689@lpu.com' value={lpumail} onChange={(f) => { setLpumail(f.target.value) }} /><br />
          <p>{lpumailError}</p>
          <label className="form-label">Email Id </label>
          <input className="form-control" type="text" placeholder='Your email' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
          <p>{emailError}</p>
          <label className="form-label">Phone Number </label>
          <input className="form-control" type="text" placeholder='Your Number' value={pNUm} onChange={(e) => { setPnum(e.target.value) }} /><br />
          <p>{pNUmError}</p>
          <label className="form-label">Domain  </label>
          <select className="form-control" name='Domain' value={domain} onChange={(e) => { setDomain(e.target.value) }}>
            <option value='none'>--Select--</option>
            <option value="WebD">Web Development</option>
            <option value="DS">Data Science</option>
            <option value="Cyber">Cyber Security</option>
          </select><br />
          <p>{domainError}</p>
          <label className="form-label">Password </label>
          <input className="form-control" type="password" value={pswd} onChange={(e) => { setPswd(e.target.value) }}></input><br />
          <p >{pswdError}</p>
          <button type="submit" className="btn btn-dark" >Submit</button>
          <p id="emailHelp" className="form-text">{emptyError}</p>

        </form>
      </div>
      <div className="container-lg">
        <h1>Student's Details</h1>
        <h4 className=''>
          {userName}

        </h4>
      </div>
      </div>
    </div>
  );
}

export default App;

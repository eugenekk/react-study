import { useState } from "react"

const useInput = (initialValue) => {
  const [value, setValue ] = useState(initialValue);
  return [
    {value, onInput: (e) => setValue(e.target.value)},
    () => setValue(initialValue)
  ]
}

const useToken = () => {
  const getToken = () => {
    const token = localStorage.getItem('token')
    return token
  }
  const [ token, setToken ] = useState(getToken());
  
  const saveToken = token => {
    localStorage.setItem('token', token)
    setToken(token)
  }

  return {
    token,
    setToken : saveToken,
  }
}


export default function UserForm() {
  const [ userName, resetUserName ] = useInput("");
  const [ password, resetPassword ] = useInput("");
  const { token, setToken } = useToken();

  const submitForm = (event) => {
    event.preventDefault();
    console.log("userForm", userName.value, password.value)
    // server login 성공
    // setToken(token)


    resetUserName();
    resetPassword();
  }

  return (
    <form onSubmit={submitForm}>
      <div>
        userName : <input type="text" {...userName} />
      </div> 
      <div>
        password : <input type="text" {...password} />
      </div>  
      <button>제출</button>
    </form>
  )
}
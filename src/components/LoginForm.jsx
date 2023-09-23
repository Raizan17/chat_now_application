import { useState } from "react"
import axios from "axios";


const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const authObject = { 'Project-ID': "2f3287bf-c31c-4fb5-ae0b-5a48aabfce19", 'User-Name': username , 'User-Secret':password };


      try {
      // username / password => chatenngine -> givemessages
        await axios.get('https://api.chatengine.io/chats', {headers: authObject});

        // to prevent user from having to keep logging in everytime they come to window
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        window.location.reload();

        // works out --> logged in
      } catch (error) {
      // error --> try with new username...
        setError('Oops, incorrect credentials. Please try again')
      }

    
      
    

    }


    return (
      <div className="wrapper">
          <div className="form">
              <h1 className="title"> Chat Now Application</h1>
              <form onSubmit={handleSubmit}>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                  <div align="center">
                      <button type="submit" className="button">
                          <span> Chat Now!</span>
                      </button>
                  </div>
                  <h2 className="error">{error}</h2>
              </form>
          </div>

      </div>


    );

  }

  export default LoginForm
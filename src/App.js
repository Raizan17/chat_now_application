import { ChatEngine } from "react-chat-engine";

import LoginForm from "./components/LoginForm";
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />


  return(
      <ChatEngine 
          height="100vh"
          projectID="
          2f3287bf-c31c-4fb5-ae0b-5a48aabfce19"
          // Raizan : chatnow  Elon: 12345
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      
      />

  );

}

export default App;
import { ChatEngine } from "react-chat-engine";

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return(
      <ChatEngine 
          height="100vh"
          projectID="
          2f3287bf-c31c-4fb5-ae0b-5a48aabfce19"
          userName="Raizan"
          userSecret="chatnow"
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      
      />

  );

}

export default App;
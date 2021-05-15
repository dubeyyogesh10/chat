import logo from './logo.svg';
import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import LoginFrom from './components/LoginForm';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginFrom/>
  return(

    <ChatEngine
      height = "100vh"
      projectID = {localStorage.getItem('publicKey')} // chat Engine IO website was used for chatting funcion
      userName = {localStorage.getItem('username')}///
      userSecret = {localStorage.getItem('password')}///
      renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps}/> }/>
  )
}

export default App;

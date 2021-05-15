import {useState} from 'react'
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [publicKey, setPublicKey] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = {
            'Project-ID' : '9b9bf877-c480-4cf6-b2be-270a8fea88ae',
            'UserName' : username,
            'User-Secret': password
        }
        try {
            await axios.get('https://api.chatengine.io/chats',{headers: authObject});

            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            localStorage.setItem('publicKey',publicKey);
            window.location.reload();

        } catch (error) {
            setError('Oops, Incorrect Credentials');
            localStorage.clear();
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <form onSubmit= {handleSubmit}>
                    <input type="text" value= {username} onChange = {(e) => setUsername(e.target.value)} className ="input" placeholder="username" required/>
                    <input type="password" value= {password} onChange = {(e) => setPassword(e.target.value)} className ="input" placeholder="password" required/>
                    <input type="password" value= {publicKey} onChange = {(e) => setPublicKey(e.target.value)} className ="input" placeholder="Key" required/>

                    <div align = "center">
                        <button type = "submit" className= "button">
                            <span> Login </span>
                        </button>
                    </div>
                    <h2 className="error">{error}
                    </h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
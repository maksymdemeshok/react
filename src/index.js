import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, addMessage, updateNewPostText, updateNewMessage } from './redux/state';


export let renderTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App
            state={state}
            addPost={addPost}
            addMessage={addMessage}
            updateNewMessage ={updateNewMessage}
            updateNewPostText={updateNewPostText} />
      </React.StrictMode>,
      document.getElementById('root')
   );
}


renderTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

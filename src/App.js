import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Casie's App!</h1>
        </header>
        <main>
          <div id="intro">
            Lorem Ipsum is the single greatest threat. 
            We are not - we are not keeping up with other websites. 
            Lorem Ipsum best not make any more threats to your website. 
            It will be met with fire and fury like the world has never seen.
            Does everybody know that pig named Lorem Ipsum? 
            An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.
          </div>
          <div id="form">
            <label for="title">Title:</label>
            <input id="title"></input>
            <label for="description">Description:</label>
            <input id="description"></input>
            <label for="image">Image URL:</label>
            <input id="image"></input>
            <button>Submit</button>
          </div>
          <ul>
            <li><img src="http://www.fillmurray.com/200/250"/></li>
            <li><img src="http://www.fillmurray.com/300/250"/></li>
            <li><img src="http://www.fillmurray.com/50/50"/></li>
            <li><img src="http://www.fillmurray.com/200/100"/></li>
            <li><img src="http://www.fillmurray.com/50/100"/></li>
            <li><img src="http://www.fillmurray.com/100/100"/></li>
          </ul>
          </main>
          <div id="footer">
            <p id="footerCopy">
              Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.
            </p>
            <div id="contactInfo">
              <p>Casie Siekman</p>
              <p>@CassandraDanger</p>
              <p>www.cassandradanger.com</p>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

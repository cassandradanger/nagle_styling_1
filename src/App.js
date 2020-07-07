import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Casie's App!</h1>
        <div>
          <input placeholder="Title"></input>
          <input placeholder="Description"></input>
          <input placeholder="Image"></input>
          <button>Submit</button>
        </div>
        <div>
          Lorem Ipsum is the single greatest threat. 
          We are not - we are not keeping up with other websites. 
          Lorem Ipsum best not make any more threats to your website. 
          It will be met with fire and fury like the world has never seen.
          Does everybody know that pig named Lorem Ipsum? 
          An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.
        </div>
        <ul>
          <li><img src="http://www.fillmurray.com/200/250"/></li>
          <li><img src="http://www.fillmurray.com/250/250"/></li>
          <li><img src="http://www.fillmurray.com/300/250"/></li>
          <li><img src="http://www.fillmurray.com/50/50"/></li>
          <li><img src="http://www.fillmurray.com/100/250"/></li>
          <li><img src="http://www.fillmurray.com/200/100"/></li>
          <li><img src="http://www.fillmurray.com/50/100"/></li>
          <li><img src="http://www.fillmurray.com/100/100"/></li>
        </ul>
        <div id="footer">
          <p>
            Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.
          </p>
        </div>
      </div>
    );
  }
}

export default App;

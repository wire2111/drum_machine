import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './extra.css';
import reportWebVitals from './reportWebVitals';


const URL_HEAD = "https://s3.amazonaws.com/freecodecamp/drums/"

const DrumPad = (clickHandler, padId, keyId, src) => {
  return (
    <button
      id={padId}
      className="drum-pad btn btn-default btn-primary"
      onClick={clickHandler}
      accesskey={keyId}
      onKeyPress={clickHandler}>
      <audio
        class="clip"
        id={keyId}
        src={URL_HEAD+src}>
      </audio>
      {keyId}
    </button>
  )
}



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'n/a'
    }
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(event) {
    const key = event.target.innerText
    const name = event.target.id
    this.setState({
      display: name.replaceAll('-', ' ')
    })
    
    document.getElementById(key).play();
  }
  
  render() {
    return (
      <div id="drum-machine">
        <h1 id="display">{this.state.display}</h1>
        <div id="drum-pads">
          {DrumPad(this.onClick, "Heater-1", "Q", "Heater-1.mp3")}
          {DrumPad(this.onClick, "Heater-2", "W", "Heater-2.mp3")}
          {DrumPad(this.onClick, "Heater-3", "E", "Heater-3.mp3")}
          {DrumPad(this.onClick, "Heater-4", "A", "Heater-4_1.mp3")}
          {DrumPad(this.onClick, "Clap", "S", "Heater-6.mp3")}
          {DrumPad(this.onClick, "Open-HH", "D", "Dsc_Oh.mp3")}
          {DrumPad(this.onClick, "Kick-n'-Hat", "Z", "Kick_n_Hat.mp3")}
          {DrumPad(this.onClick, "Kick", "X", "RP4_KICK_1.mp3")}
          {DrumPad(this.onClick, "Closed-HH", "C", "Cev_H2.mp3")}
        </div>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

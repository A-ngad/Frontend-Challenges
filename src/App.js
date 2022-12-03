import logo from './logo.svg';
import './App.css';
import QR from './assests/images/qrcode.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div class="wrapper-block">
        <div class="inside-block">
          <img class="qr-code" src={QR}></img>
        </div>
        <div class="align-center">
          <p class="display-text fw-heading">Imporve your front-end skills by building projects</p>
          <p class="display-text fw-text">Scan the QR code to visit frontend mentor and take your skills to the next level</p>
        </div>
       </div>
      </header>
    </div>
  );
}

export default App;

import "./styles.scss";
import "./assets/fonts/styles.scss";
function App() {
  return (
    <div className="App">
      <a
        className="social-icon"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.coingecko.com/en/coins/infinity-protocol-bsc"
      >
        <div className="coinesco"></div>
      </a>
      <a
        className="social-icon"
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/infinity_proto"
      >
        <div className="twitter"></div>
      </a>
      <a
        className="social-icon"
        rel="noopener noreferrer"
        target="_blank"
        href="https://t.me/infinityprotocol"
      >
        <div className="telegram"></div>
      </a>
      <a
        className="social-icon"
        rel="noopener noreferrer"
        target="_blank"
        href="https://medium.com/infinitywin"
      >
        <div className="medium"></div>
      </a>
    </div>
  );
}

export default App;

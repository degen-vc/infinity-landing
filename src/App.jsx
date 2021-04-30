import { Footer } from "./Footer";
import logo from "./assets/logo.png";
import styled from "styled-components";

const Logo = styled.div`
  height: 100px;
  width: 200px;
  margin: 100px auto 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${logo});
`;
const LinksBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  margin: 250px auto;
  @media screen and (max-width: 440px) {
    width: 300px;
    flex-direction: column;
    margin: 100px auto;
  }
`;

const Link = styled.a`
  width: 200px;
  text-align: center;
  padding: 20px 20px;
  border-radius: 35px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  cursor: pointer;
  color: black;
  text-decoration: none;
  background: black;
  color: white;
  font-size: 18px;
  :hover {
    background: rgba(0, 0, 0, 0.8);
  }
  @media screen and (max-width: 440px) {
    margin: 10px 0;
  }
`;

function App() {
  return (
    <div className="App">
      <Logo />
      <LinksBlock>
        <Link href="https://kovan.3t.finance/">Ethereum Chain</Link>
        <Link href="https://degen-vc.github.io/infinity-frontend/">
          Binance Smart Chain
        </Link>
      </LinksBlock>
      <Footer />
    </div>
  );
}

export default App;

import styled from "styled-components";
import uniswap from "./assets/icons1/uniswap.png";
import coingecko from "./assets/icons1/coingecko.png";
import github from "./assets/icons1/github.png";
import medium from "./assets/icons1/medium.png";
import telegram from "./assets/icons1/telegram.png";
import twitter from "./assets/icons1/twitter.png";
import dextool from "./assets/icons1/dextool.png";
import discord from "./assets/icons1/discord.png";
import gitbook from "./assets/icons1/gitbook.png";

const IconWrap = styled.a({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "60px",
  width: "60px",
  margin: "20px",
  borderRadius: "50%",
  cursor: "pointer",
  border: "2px solid rgba(0, 0, 0, 0.1)",
  ":hover": {
    opacity: "0.8",
  },
  "@media screen and (max-width: 440px)": {
    margin: "10px",
    height: "40px",
    width: "40px",
  },
});
const Uniswap = styled.div({
  height: "36px",
  width: "32px",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${uniswap})`,
});
const Dextool = styled.div({
  height: "28px",
  width: "25px",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${dextool})`,
});

const Gitbook = styled.div({
  width: "34px",
  height: "24px",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${gitbook})`,
});

const Coingecko = styled.div({
  height: "32px",
  width: "32px",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${coingecko})`,
});
const Github = styled.div({
  height: "31px",
  width: "32px",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${github})`,
});
const Medium = styled.div({
  height: "18px",
  width: "32px",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${medium})`,
});
const Telegram = styled.div({
  height: "24px",
  width: "28px",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${telegram})`,
});
const Twitter = styled.div({
  height: "24px",
  width: "30px",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${twitter})`,
});
const Discord = styled.div({
  width: "34px",
  height: "25px",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${discord})`,
});

const FooterSection = styled.div({
  paddingBottom: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",

  "@media screen and (max-width: 440px)": {
    padding: "30px 0",
  },
});

const IconsWrap = styled.div({
  display: "flex",
});

export const Footer = () => {
  return (
    <>
      <FooterSection>
        <IconsWrap className="icons">
          <IconWrap
            rel="noopener noreferrer"
            target="_blank"
            href={`https://app.uniswap.org/#/swap?inputCurrency=0x25ECA1C6fa59D3C7917f94B663203F41266667E1&outputCurrency=ETH`}
          >
            <Uniswap className="footer-icon" title="Coming soon" />
          </IconWrap>
          <IconWrap title="Coming soon">
            <Coingecko className="footer-icon" title="Coming soon" />
          </IconWrap>

          <IconWrap
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/degen-vc/infinity-contracts"
          >
            <Github className="footer-icon" />
          </IconWrap>

          <IconWrap
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.dextools.io/app/uniswap/pair-explorer/0x52fc3e01d8c3b602ae51eef83df0c7e285b9f4f9"
          >
            <Dextool className="footer-icon" />
          </IconWrap>

          <IconWrap
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/infinity_proto"
          >
            <Twitter className="footer-icon" />
          </IconWrap>

          <IconWrap
            rel="noopener noreferrer"
            target="_blank"
            href="https://t.me/infinityprotocol"
          >
            <Telegram className="footer-icon" />
          </IconWrap>

          <IconWrap
            rel="noopener noreferrer"
            target="_blank"
            href="https://medium.com/infinitywin"
          >
            <Medium className="footer-icon" />
          </IconWrap>
        </IconsWrap>
      </FooterSection>
    </>
  );
};

//@flow
import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import phpLogo from "../../assets/php-loho.png";
import mysqlLogo from "../../assets/mysql.png";
import styled from "styled-components";
import { Button } from "../../components";
import theme from "../../theme";

type Props = {};

type State = {};

class AboutProject extends Component<Props, State> {
  render() {
    return (
      <Styled>
        <div>
          <h1>O PROJEKCIE</h1>

          <HeadInfo>
            Projekt jest rodzajem albumu zdjęć z wakacji z krotkim opisem
            odwiedzanego miejsca i zdjeciem, z możliwością komentowania dla
            odwiedzających.
          </HeadInfo>
          <h1>UŻYTE TECHNOLOGIE</h1>
          <TechWrap className="shadow-1">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h3>React</h3>
            </header>
            <p>
              React to biblioteka języka programowania JavaScript, która
              wykorzystywana jest do tworzenia interfejsów graficznych aplikacji
              internetowych. Została stworzona przez Jordana Walke, programistę
              Facebooka, a zainspirowana przez rozszerzenie języka PHP - XHP. Z
              głównych cech wyróżniających bibliotekę React.js jest wirtualny
              DOM (Document Object Model, po polsku Obiektowy Model Dokumentu).
              React przechowuje cały DOM aplikacji w pamięci, po zmianie stanu
              wyszukuje różnice między wirtualnym i prawdziwym DOM i aktualizuje
              zmiany. Drugą z cech szczególnych React jest język JSX. Jest on
              nakładką na JavaScript, która dodaje możliwość wstawiania kodu
              html (lub komponentów React) bezpośrednio w kodzie, zamiast ciągu
              znaków. React.js jest obecnie używany na stronach internetowych
              firm takich jak Netflix, Imgur, PayPal, Archive.org, Gamepedia,
              SeatGeek, HelloSign czy Walmart. W 2015 roku React.js i React
              Native były dwoma najpopularniejszymi otwartymi projektami na
              stronie GitHub. React jest także piątym z najpopularniejszych
              projektów na GitHub (dane na styczeń 2017).
            </p>
            <Button
              className="shadow-1"
              onClick={() =>
                window.open("https://reactjs.org/docs/hello-world.html")
              }
            >
              Naucz się reacta
            </Button>
          </TechWrap>

          <TechWrap className="shadow-1">
            <header className="App-header">
              <img src={phpLogo} alt="logo" />
              <h3>PHP</h3>
            </header>
            <p>
              interpretowany skryptowy język programowania zaprojektowany do
              generowania stron internetowych i budowania aplikacji webowych w
              czasie rzeczywistym. PHP jest najczęściej stosowany do tworzenia
              skryptów po stronie serwera WWW, ale może być on również używany
              do przetwarzania danych z poziomu wiersza poleceń, a nawet do
              pisania programów pracujących w trybie graficznym (np. za pomocą
              biblioteki GTK+, używając rozszerzenia PHP-GTK). Implementacja PHP
              wraz z serwerem WWW Apache oraz serwerem baz danych MySQL
              określana jest jako platforma AMP (w środowisku Linux – LAMP, w
              Windows – WAMP).
            </p>
            <Button
              className="shadow-1"
              onClick={() =>
                window.open("https://www.w3schools.com/php/default.asp")
              }
            >
              Naucz się PHP
            </Button>
          </TechWrap>

          <TechWrap className="shadow-1">
            <header className="App-header">
              <img src={mysqlLogo} alt="logo" />
              <h3>MYSQL</h3>
            </header>
            <p>
              MySQL rozwijany jest przez firmę Oracle. Wcześniej przez większość
              czasu jego tworzeniem zajmowała się szwedzka firma MySQL AB. MySQL
              AB została kupiona 16 stycznia 2008 roku przez Sun Microsystems, a
              ten 27 stycznia 2010 roku przez Oracle. W międzyczasie Monty
              Widenius (współtwórca MySQL) stworzył MariaDB – forka
              (alternatywną wersję) opartego na licencji GPL. MariaDB jest
              oparta na tym samym kodzie bazowym co MySQL i dąży do utrzymania
              kompatybilności z jej poprzednimi wersjami.
            </p>
            <Button
              className="shadow-1"
              onClick={() => window.open("https://dev.mysql.com/doc/?")}
            >
              Naucz się MYSQL
            </Button>
          </TechWrap>
        </div>
      </Styled>
    );
  }
}

const Styled = styled.div`
  color: ${theme.color.text};
  padding-top: 80px;
  background: ${theme.secondary};

  h1 {
    padding: 25px 0;
  }
  > div {
    width: 90%;
    margin: 0 auto;
    min-height: 90vh;
    padding-bottom: 10vh;
  }
`;

const TechWrap = styled.div`
  color: ${theme.color.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 35px 0;
  margin-bottom: 50px;
  border-radius: 8px;
  background: ${theme.blockBackground};
  header {
    display: flex;
    align-items: center;
  }
  h3 {
    color: ${theme.color.text};
    margin: 0;
    padding-left: 1rem;
  }
  img {
    max-width: 100px;
    max-height: 100px;
  }
  p {
    max-width: 80%;
    font-size: 1rem;
    padding: 2rem;
    border-radius: 8px;
    background: ${theme.blockBackground};
  }
`;

const HeadInfo = styled.div`
  max-width: 80%;
  margin: 0 auto;
  font-size: 1rem;
  padding: 2rem;
  border-radius: 8px;
  background: ${theme.blockBackground};
`;

export default AboutProject;

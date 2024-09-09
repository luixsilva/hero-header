import { ButtonContact } from "../atoms/ButtonContact";
import FrontEnd from "../templates/FrontEnd";
import imgHero from "../assets/img-hero-header.png";
import * as S from "./styles";
import { CardActivity } from "../molecules/CardActivity";

function App() {
  return (
    <>
      <FrontEnd>
        <S.Container>
          <div>
            <h1>Design driven development of your web product</h1>
            <h6>
              We are a full service digital agency that builds immesive user
              experience.
            </h6>
            <ButtonContact title="Contact Us"></ButtonContact>
          </div>
          <S.ColumnImage>
            <CardActivity></CardActivity>
            <img src={imgHero} alt="Uma mulher fazendo uma pesquisa" />
          </S.ColumnImage>
        </S.Container>
      </FrontEnd>
    </>
  );
}

export default App;

import Header from "../../organisms/Header";
import * as S from "./styles";

type FrontEndProps = {
  children: React.ReactNode;
};

const FrontEnd = ({ children }: FrontEndProps) => {
  return (
    <>
      <S.Container>
        <Header></Header>
        <main>{children}</main>
      </S.Container>
    </>
  );
};

export default FrontEnd;

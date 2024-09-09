import * as S from "./styles";

import Button from "../../atoms/Button";
import Menu from "../../molecules/Menu";
import Logo from "../../molecules/Logo";

const Header = () => {
  return (
    <>
      <S.Box>
        <Logo />
        <Menu />
        <Button title="Sign In" />
      </S.Box>
    </>
  );
};

export default Header;

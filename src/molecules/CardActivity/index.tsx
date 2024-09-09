import * as S from "./styles";
import { MdTrendingUp } from "react-icons/md";

const CardActivity = () => {
  return (
    <>
      <S.Container>
        <small>Activity</small>
        <strong>
          18 <MdTrendingUp size={20} color="#fff" />
        </strong>
      </S.Container>
    </>
  );
};
export { CardActivity };

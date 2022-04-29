import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

// export는 맨 밑에 안 하고 이렇게 위에서 바로 붙여줄 수 있다
export default function usePrototypes() {
  /* AppStateContext에서 생성하고 AppStateProvider에서 제공하는 데이터들을 받아온 것.
  이제 usePrototypes 훅을 통해 Provider에서 제공하는 것 중 prototypes 데이터를 사용할 수 있게 됨
  useOrders랑 useAction도 마찬가지임 */
  const { prototypes } = useContext(AppStateContext);
  return prototypes;
}

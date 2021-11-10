import axios from "axios";
import { mutations } from "./mutations";

export const actions = {
  getSpots({ state }, payload) {
    console.log("1 : ", payload);
    axios
      .get(
        `http://api.kcisa.kr/openapi/service/rest/convergence2019/getConver01?serviceKey=${process.env.VUE_APP_SPOT}`
      )
      .then((res) => {
        mutations.SET_SPOTS(state, res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

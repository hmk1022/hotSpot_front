import axios from "axios";
import { mutations } from "./mutations";

export const actions = {
  getSpots({ state }, payload) {
    console.log("1 : ", payload.test);
    axios
      .get(
        `http://api.kcisa.kr/openapi/service/rest/convergence2019/getConver01?serviceKey=${process.env.VUE_APP_SPOT}`
      )
      .then((res) => {
        console.log(res);
        let data = res.data.response.body.items.item;
        mutations.SET_SPOTS(state, data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

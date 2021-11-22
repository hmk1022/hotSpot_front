//const SET_SPOTS = "SET_SPOTS";
const SET_SEARCH_RESULT = "SET_SEARCH_RESULT";

export const mutations = {
  // [SET_SPOTS](state, payload, test) {
  //   console.log("state : ", state, "payload :", payload.length);
  //   console.log("들어오는 변수", test);
  //   for (let i = 0; i < payload.length; i++) {
  //     state.spots.push(payload[i]);
  //   }
  // },
  [SET_SEARCH_RESULT](state, payload) {
    console.log("들어오는 변수2", payload);
    let data = payload.data.items;
    for (let i = 0; i < data.length; i++) {
      console.log("data_loop : ", data[i]);
      state.searchData.push(data[i]);
    }
  },
};

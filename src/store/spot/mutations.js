const SET_SPOTS = "SET_SPOTS";

export const mutations = {
  [SET_SPOTS](state, payload, test) {
    console.log("state : ", state, "payload :", payload.length);
    console.log("들어오는 변수", test);
    for (let i = 0; i < payload.length; i++) {
      state.spots.push(payload[i]);
    }
    //console.log("상태", state.spots);
  },
};

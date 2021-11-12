const SET_SPOTS = "SET_SPOTS";

export const mutations = {
  [SET_SPOTS](state, payload) {
    console.log("state : ", state, "payload :", payload.length);
    for (let i = 0; i < payload.length; i++) {
      state.spots.push(payload[i]);
    }
  },
};

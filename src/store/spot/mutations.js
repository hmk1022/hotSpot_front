const SET_SPOTS = "SET_SPOTS";

export const mutations = {
  [SET_SPOTS](state, payload) {
    console.log("state : ", state, "payload :", payload);
    state.spots.push(payload);
  },
};

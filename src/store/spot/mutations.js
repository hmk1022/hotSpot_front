const SET_SPOTS = "SET_SPOTS";

export const mutations = {
  [SET_SPOTS](state, payload) {
    state.spots = payload;
  },
};

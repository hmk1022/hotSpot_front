import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
/* eslint-disable no-alert, no-console */
const state = {
  spots: [],
};

export const spot = {
  state,
  getters,
  actions,
  mutations,
};
/* eslint-enable no-alert */

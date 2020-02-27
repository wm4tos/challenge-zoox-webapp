import Vue from 'vue';

export function SET_USER(state, val) {
  Vue.set(state, 'user', Object.freeze(val));
}

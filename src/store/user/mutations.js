import Vue from 'vue';

export function SAVE_USER(state, val) {
  Vue.set(state, 'user', Object.freeze(val));
}

export function SAVE_TOKEN(state, val) {
  Vue.set(state, 'token', val);
}

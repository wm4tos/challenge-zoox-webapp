export function SET_USER(ctx, val) {
  ctx.commit('SAVE_USER', val);
}

export function SET_TOKEN(ctx, val) {
  ctx.commit('SAVE_TOKEN', val);
}

export function LOGOUT(ctx) {
  ctx.commit('SAVE_USER', {});
  ctx.commit('SAVE_TOKEN', '');
}

export function SET_LOGIN_HOUR(ctx, val) {
  ctx.commit('SAVE_LOGIN_HOUR', val);
}

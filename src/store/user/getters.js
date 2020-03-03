import moment from 'moment';

export const getUser = ({ user }) => user;

export const isLogged = ({ user, token, loginHour }) => user._id
  && user.name
  && user.email
  && token
  && loginHour
  && moment(loginHour).isSameOrAfter(moment().subtract({ hour: 1 }));

export const getToken = ({ token }) => token;

export const getLoginHour = ({ loginHour }) => loginHour;

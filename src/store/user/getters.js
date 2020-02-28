export const getUser = ({ user }) => user;

export const isLogged = ({ user, token }) => user._id && user.name && user.email && token;

export const getToken = ({ token }) => token;

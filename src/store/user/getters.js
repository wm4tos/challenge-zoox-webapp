export const getUser = ({ user }) => user;

export const isLogged = ({ user }) => user._id && user.name && user.email;

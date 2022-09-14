export const userDataAdapter = (data) => {
  return { accessToken: data.token, ...data.user };
};

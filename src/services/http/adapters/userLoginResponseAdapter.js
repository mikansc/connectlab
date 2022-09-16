export const userLoginResponseAdapter = (data) => {
  return { accessToken: data.token, ...data.user, id: data.user._id };
};

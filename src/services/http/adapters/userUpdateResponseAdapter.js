export const userUpdateResponseAdapter = (user) => {
  return { ...user, userAddress: user.userAddress, id: user._id };
};

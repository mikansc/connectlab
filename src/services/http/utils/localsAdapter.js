export const localsAdapter = (data) => {
  return data.map((local) => ({
    title: local.description,
    id: local._id,
  }));
};

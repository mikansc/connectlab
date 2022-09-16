export const addressAdapter = (data) => {
  return {
    zipCode: data.cep,
    street: data.logradouro,
    city: data.localidade,
    state: data.uf,
    neighborhood: data.bairro,
  };
};

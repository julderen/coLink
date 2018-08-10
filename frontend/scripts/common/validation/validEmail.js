export default (value) => {
  const re = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
  return re.test(value) ? undefined : 'Неверный email';
};

export const formatCurrencyToRUB = (value) =>
  value.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB'
  });

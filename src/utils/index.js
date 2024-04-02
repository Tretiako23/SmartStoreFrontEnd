export const stringNormalize = str => str.replace(/\s/g, '').toLowerCase();

export const formatter = new Intl.NumberFormat('uk-UA', {
  style: 'currency',
  currency: 'UAH',
});

export const applyDiscount = (amount, discountPercent) => {
  if (parseInt(discountPercent) < 0 || parseInt(discountPercent) > 100) {
    return 'Некоректні дані';
  }

  // Обчислення суми знижки
  let discountAmount = parseInt(amount) * (parseInt(discountPercent) / 100);

  // Обчислення вартості зі знижкою
  let discountedPrice = parseInt(amount) - discountAmount;

  // Округлення до цілого числа
  discountedPrice = Math.round(discountedPrice);

  return discountedPrice;
};

export const calculateAverageRating = ratings => {
  if (!ratings || !Array.isArray(ratings) || ratings.length === 0) {
    return 0;
  }

  const total = ratings.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = total / ratings.length;
  const roundedAverage = Math.round(average);
  return roundedAverage;
};

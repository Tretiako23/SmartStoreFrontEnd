import * as yup from 'yup';

export const addGoodsSchema = yup
  .object({
    categories: yup.string().required(),
    type: yup.string().required(),
    brand: yup.string().required(),
    title: yup.string().required(),
    model: yup.string(),
    maker: yup.string(),
    description: yup.string(),
    amount: yup.number().positive().integer().required(),
    discount: yup
      .number()
      .transform(value => (isNaN(value) ? undefined : value))
      .nullable(),
    count: yup.number().integer().min(0).required(),
  })
  .required();

export const addReviewsSchema = yup
  .object({
    name: yup.string().required("Імя є обов'язковим полем"),
    text: yup.string().required("Текст відгуку є обов'язковим полем"),
  })
  .required();

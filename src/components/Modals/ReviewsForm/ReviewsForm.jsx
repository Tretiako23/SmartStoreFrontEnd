/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import CloseBtn from '../../Common/CloseBtn';
import {
  Form,
  Input,
  InputWrap,
  SubmitFormBtn,
  TextAreaInput,
} from '../AuthModal/AuthModalStyled';
import {
  RatingWrap,
  ReviewImgBox,
  ReviewsBoxes,
  ReviewsFormWrap,
  ReviewsHeader,
} from './ReviewsFormStyled';
import { yupResolver } from '@hookform/resolvers/yup';
import { addReviewsSchema } from '../../../schemas';
import { StarWrap } from '../../Goods/GoodsListByNestedId/GoodsCardStyled';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { notifyError, notifySucces } from '../../Toasters/Toasters';
import axios from 'axios';

const ReviewsForm = ({ toggleModal, data, updateData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addReviewsSchema),
  });

  const [rating, setRating] = useState(0);

  const onSubmit = async credentials => {
    if (rating === 0) {
      notifyError(
        'Будь-ласка поставте оцінку від 1 до 5 перед відправкою відгуку'
      );
      return;
    }
    try {
      await axios.put(`/goods/addReviews/${data._id}`, {
        reviews: { ...credentials, feedbackPoints: rating, date: new Date() },
      });
      toggleModal();
      updateData();
      notifySucces('Дякуємо за відгук!');
    } catch (error) {
      notifyError();
    }
  };

  const handleStarClick = index => {
    setRating(index + 1);
  };

  return (
    <ReviewsFormWrap>
      <ReviewsHeader>
        <h2>Написати Відгук</h2> <CloseBtn toggleModal={toggleModal} />
      </ReviewsHeader>

      <ReviewsBoxes>
        <ReviewImgBox>
          <img
            src={data.imgUrl}
            alt={data.title}
            width={'260px'}
            height={'100%'}
          />
          <h4>{data.title}</h4>
          <RatingWrap>
            <p>Оцінка</p>
            <StarWrap>
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  size={20}
                  color={index < rating ? 'rgb(201 183 77)' : 'gray'}
                  onClick={() => handleStarClick(index)}
                />
              ))}
            </StarWrap>
          </RatingWrap>
        </ReviewImgBox>
        <div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputWrap>
              <Input
                type="text"
                placeholder="Ім'я"
                {...register('name', { required: true })}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </InputWrap>
            <InputWrap>
              <TextAreaInput
                type="text"
                placeholder="Відгук"
                {...register('text')}
              />
              {errors.text && <span>{errors.text.message}</span>}
            </InputWrap>
            <SubmitFormBtn type="submit">Відправити відгук</SubmitFormBtn>
          </Form>
        </div>
      </ReviewsBoxes>
    </ReviewsFormWrap>
  );
};

export default ReviewsForm;

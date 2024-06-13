import { useEffect, useRef, useState } from 'react';
import { Container } from '../../components/Container';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { notifyError, notifySucces } from '../../components/Toasters/Toasters';
import {
  AddReviewsBtn,
  CrossSpan,
  DeliveryAndDiscountInfoBox,
  DescriptionInfoWrap,
  DetailPageTitle,
  GoodsInfoWrap,
  ReviewsActionWrap,
  ReviewsBox,
  ReviewsLink,
  ReviewsList,
  ReviewsWrap,
  TextDescription,
  Wrap,
} from './DetailsPageStyled';
import { FaStar } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import { BiSolidDiscount } from 'react-icons/bi';
import { StarWrap } from '../../components/Goods/GoodsListByNestedId/GoodsCardStyled';
import { FcDislike, FcLike } from 'react-icons/fc';
import { useStore } from '../../zustand/store';
import { applyDiscount, calculateAverageRating, formatter } from '../../utils';
import ModalPort from '../../components/ModalPort/ModalPort';
import ReviewsForm from '../../components/Modals/ReviewsForm/ReviewsForm';
import ReviewsCard from '../../components/DetailsComponent/ReviewsCard/ReviewsCard';
import ImageCarousel from '../../components/DetailsComponent/ImageCarousel/ImageCarousel';
import Buybtn from '../../components/Common/Buybtn';
import FiltersInfo from '../../components/DetailsComponent/FiltersInfo/FiltersInfo';
import IsDelivery from '../../components/DetailsComponent/IsDelivery/IsDelivery';
import { getData } from '../../services/getGoodsById';
import SubscribeModal from '../../components/Modals/SubscribeModal/SubscribeModal';

const DetailsPage = () => {
  const [data, setData] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowSubscribeModal, setIsShowSubscribeModal] = useState(false);

  const user = useStore(state => state.auth.user);
  const { getGoods } = useStore();

  const { goodsId } = useParams();

  const navigate = useNavigate();
  const reviewsRef = useRef(null);

  useEffect(() => {
    getData({ goodsId, setData, navigate });
  }, []);

  const toggleModal = () => setIsShowModal(prev => !prev);
  const toggleSubscribeModal = () => setIsShowSubscribeModal(prev => !prev);

  const handleFavorite = async id => {
    try {
      const result = await axios.patch(`goods/${id}/favorite`);

      if (result.status === 200) {
        setData(result.data);
        getGoods();
      }

      if (result.data.favorites.includes(user.id)) {
        notifySucces('Товар успішно додано до закладок!');
        return;
      }
      notifySucces('Товар успішно видалено з закладок закладок!');
    } catch (error) {
      if (error?.response?.status === 401) {
        notifyError(
          'Для додавання товару в закладки необхідно увійти в акаунт!'
        );
        return;
      }
      notifyError('Упс, щось пішло не так ...Спробуйте пізніше');
    }
  };

  const isFavorite = data && user ? data.favorites.includes(user?.id) : false;
  const discount = data && parseInt(data.discount);
  const ratingArr = data && data.reviews.map(item => item.feedbackPoints);

  return (
    data && (
      <>
        <Container>
          <DetailPageTitle>{data.title}</DetailPageTitle>

          <Wrap>
            <ImageCarousel data={data} />

            <GoodsInfoWrap>
              <ReviewsBox>
                <ReviewsWrap>
                  <StarWrap>
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        size={20}
                        color={
                          index < calculateAverageRating(ratingArr)
                            ? 'rgb(201 183 77)'
                            : 'gray'
                        }
                      />
                    ))}
                  </StarWrap>

                  <ReviewsLink
                    onClick={() =>
                      reviewsRef.current.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    Відгуки: <span>{ratingArr.length}</span>
                  </ReviewsLink>
                </ReviewsWrap>

                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleFavorite(data._id)}
                >
                  {isFavorite ? <FcLike size={30} /> : <FcDislike size={30} />}
                </div>
              </ReviewsBox>

              <ReviewsBox>
                <TextDescription>
                  Модель: <span>{`${data.model}`}</span>
                </TextDescription>
                {discount ? (
                  <div>
                    <TextDescription>
                      Вартість:
                      <CrossSpan>
                        {formatter.format(applyDiscount(data.amount, discount))}
                      </CrossSpan>{' '}
                      <span>{formatter.format(data.amount)}</span>
                    </TextDescription>
                  </div>
                ) : (
                  <div>
                    <TextDescription>
                      Вартість: <span>{formatter.format(data.amount)}</span>
                    </TextDescription>
                  </div>
                )}
              </ReviewsBox>

              <ReviewsBox>
                <IsDelivery count={data.count} />

                <Buybtn data={data} toggleModal={toggleSubscribeModal} />
              </ReviewsBox>

              <ReviewsBox
                style={{
                  height: 'fit-content',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <DeliveryAndDiscountInfoBox>
                  <TbTruckDelivery size={'30px'} />{' '}
                  <p>Безкоштовна доставка при замовленні від 2000 грн</p>
                </DeliveryAndDiscountInfoBox>
                <DeliveryAndDiscountInfoBox>
                  <BiSolidDiscount size={'30px'} />
                  <p>Отримайте картку знижок при замовленні від 300 грн</p>
                </DeliveryAndDiscountInfoBox>
              </ReviewsBox>

              <DescriptionInfoWrap>
                <h2>Опис Товару</h2>

                <p>{data.description}</p>
              </DescriptionInfoWrap>

              <DescriptionInfoWrap>
                <h2>Характеристики</h2>

                <FiltersInfo data={data.filters} />
              </DescriptionInfoWrap>
            </GoodsInfoWrap>
          </Wrap>

          <div>
            <div>
              <ReviewsActionWrap ref={reviewsRef}>
                <h2>
                  Відгуки:<span> {ratingArr.length}</span>
                </h2>

                <AddReviewsBtn type="button" onClick={toggleModal}>
                  Додати відгук
                </AddReviewsBtn>
              </ReviewsActionWrap>

              <ReviewsList>
                {data.reviews.map(item => (
                  <ReviewsCard key={item._id} item={item} />
                ))}
              </ReviewsList>
            </div>
          </div>
        </Container>
        {isShowModal && (
          <ModalPort toggleModal={toggleModal}>
            <ReviewsForm
              toggleModal={toggleModal}
              data={data}
              updateData={() => getData({ goodsId, setData, navigate })}
            />
          </ModalPort>
        )}

        {isShowSubscribeModal && (
          <ModalPort toggleModal={toggleSubscribeModal}>
            <SubscribeModal
              toggleModal={toggleSubscribeModal}
              id={goodsId}
            ></SubscribeModal>
          </ModalPort>
        )}
      </>
    )
  );
};

export default DetailsPage;

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import { checkIsNewGoods } from '../../utils';
import { useStore } from '../../zustand/store';
import NewAndHitGoodsCard from './NewAndHitGoodsCard';

const TrendsTitle = styled.h2`
  text-align: center;
  margin: 10px 0;
`;

const NewAndHitGoodsBox = () => {
  const goods = useStore(state => state.goods);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  const newGoods = goods.filter(item => checkIsNewGoods(item.createdAt));
  const hitGoods = goods.filter(item => item.isHit);

  return (
    <>
      {(newGoods?.length > 0 || hitGoods?.length > 0) && (
        <div>
          {newGoods?.length > 0 && (
            <>
              <TrendsTitle>Новинки</TrendsTitle>
              <Carousel
                className="carousel-container"
                containerClass="container-with-dots"
                draggable
                focusOnSelect={false}
                infinite
                itemClass="carousel-item"
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderButtonGroupOutside={false}
                responsive={responsive}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {newGoods?.length > 0 &&
                  newGoods.map(
                    item =>
                      item?._id && (
                        <NewAndHitGoodsCard key={item._id} data={item} />
                      )
                  )}
              </Carousel>
            </>
          )}

          {hitGoods?.length > 0 && (
            <>
              <TrendsTitle>Хіти продаж</TrendsTitle>
              <Carousel
                className="carousel-container"
                containerClass="container-with-dots"
                draggable
                focusOnSelect={false}
                infinite
                itemClass="carousel-item"
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderButtonGroupOutside={false}
                responsive={responsive}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {hitGoods.map(
                  item =>
                    item?._id && (
                      <NewAndHitGoodsCard key={item._id} data={item} />
                    )
                )}
              </Carousel>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default NewAndHitGoodsBox;

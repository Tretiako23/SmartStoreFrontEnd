import { useEffect } from 'react';
import { useState } from 'react';

import Slider from 'react-slick';
import styled from 'styled-components';
import axios from 'axios';

const IMG = styled.img`
  width: 100%;
  max-width: 1170px;
  height: auto;
  margin: 0 auto;
  border-radius: 20px;
`;

const SalePostImgWrap = styled.div`
  margin: 0 auto;
`;

const SliderWrap = styled.div`
  margin: 0 auto;
  margin-top: 10px;
`;

var settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  dotsClass: 'slick-dots slick-dotka',
  arrows: false,
  swipeToSlide: true,
  adaptiveHeight: true,
};

export const SalesPosts = () => {
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    const salesPosts = async () => {
      const result = await axios.get('/sales/get');
      result.status === 200 && setImgData(result.data?.img);
    };

    salesPosts();
  }, []);

  return (
    <SliderWrap>
      <Slider {...settings}>
        {imgData?.length > 0 &&
          imgData.map(item => {
            return (
              <SalePostImgWrap key={item.id}>
                {item.bannerUrl ? (
                  <a href={`${item.bannerUrl ? item.bannerUrl : '#'}`}>
                    <IMG src={`${item.url}`} />
                  </a>
                ) : (
                  <IMG src={`${item.url}`} />
                )}
              </SalePostImgWrap>
            );
          })}
      </Slider>
    </SliderWrap>
  );
};

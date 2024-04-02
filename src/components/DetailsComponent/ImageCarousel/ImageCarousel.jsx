/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import {
  ExtraPhotoItem,
  ExtraPhotosList,
  ImageCarouselWrap,
  MainImg,
} from './IMageCarouselStyled';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

const ImageCarousel = ({ data }) => {
  const [imgArray, setImgArray] = useState([]);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (data && data.extraPhotos && data.extraPhotos.length > 0) {
      const initialImgArray = [
        { url: data.imgUrl, id: data.imgId },
        ...data.extraPhotos,
      ];
      setImgArray(initialImgArray);
    } else {
      setImgArray([{ url: data.imgUrl, id: data.imgId }]);
    }
  }, [data]);

  const containerRef = useRef(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    if (containerRef.current !== null) {
      const containerWidth = containerRef.current.clientWidth;
      const photoWidth = 90;
      const gap = 20;
      const photosPerRow = Math.floor(containerWidth / (photoWidth + gap));

      // Індекс поточного зображення
      const currentIndex = imgArray.findIndex(
        item => item.id === imgArray[currentImg].id
      );

      // Визначення початкового і кінцевого індексу для відображення видимих фотографій
      let start, end;
      if (photosPerRow % 2 === 0) {
        // якщо кількість фото на рядку парна
        start = currentIndex - photosPerRow / 2 + 1;
        end = currentIndex + photosPerRow / 2;
      } else {
        // якщо кількість фото на рядку непарна
        start = currentIndex - Math.floor(photosPerRow / 2);
        end = currentIndex + Math.floor(photosPerRow / 2);
      }

      if (start < 0) {
        end += Math.abs(start);
        start = 0;
      }
      if (end > imgArray.length - 1) {
        start -= end - (imgArray.length - 1);
        end = imgArray.length - 1;
      }
      if (start < 0) start = 0;

      setStart(start);
      setEnd(end);
    }
  }, [data, imgArray, currentImg]);

  const handleCurrentImg = id => {
    const currentIndex = imgArray.findIndex(item => item.id === id);
    if (currentIndex !== -1) {
      setCurrentImg(currentIndex);
    }
  };

  const handleNext = () => {
    setCurrentImg(prevIndex => (prevIndex + 1) % imgArray.length);
  };

  const handlePrev = () => {
    setCurrentImg(
      prevIndex => (prevIndex - 1 + imgArray.length) % imgArray.length
    );
  };

  return (
    <>
      {imgArray.length > 0 && (
        <ImageCarouselWrap ref={containerRef}>
          <div>
            <MainImg $url={imgArray[currentImg].url} />

            <button
              type="button"
              onClick={handlePrev}
              disabled={currentImg === 0}
              style={{ left: '-5px' }}
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentImg === imgArray.length - 1}
              style={{ right: '-5px' }}
            >
              <FaArrowRight />
            </button>
          </div>

          <ExtraPhotosList>
            {imgArray.slice(start, end + 1).map((item, index) => {
              return (
                <ExtraPhotoItem
                  key={item.id}
                  $url={item.url}
                  $isActive={currentImg === index + start}
                  onClick={() => handleCurrentImg(item.id)}
                />
              );
            })}
          </ExtraPhotosList>
        </ImageCarouselWrap>
      )}
    </>
  );
};

export default ImageCarousel;

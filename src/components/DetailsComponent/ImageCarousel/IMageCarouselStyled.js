import styled from 'styled-components';

export const ImageCarouselWrap = styled.div`
  padding-top: 10px;

  & > div {
    position: relative;
    & > button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      display: grid;
      place-items: center;

      width: 32px;
      height: 32px;

      border-radius: 50%;
      border: 1px solid var(--colors-text);

      color: var(--colors-text);

      z-index: 1;

      background-color: inherit;

      cursor: pointer;

      &:hover {
        background-color: #ffffff52;
        scale: 1.1;
      }
    }
  }

  @media (min-width: 768px) {
    position: sticky;
    top: 0;

    width: 50%;
    height: fit-content;
    box-shadow: var(--shadow);
    border: var(--border-base);
    border-radius: 20px;
    padding: 10px;
  }
`;

export const MainImg = styled.div`
  width: 100%;
  height: 300px;

  background-image: url(${({ $url }) => $url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;

  @media (min-width: 768px) {
    height: 580px;
  }
`;

// export const ExtraPhotosList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   padding: 10px 20px;
// `;
export const ExtraPhotosList = styled.ul`
  display: flex;
  flex-wrap: nowrap; /* Змінив flex-wrap на nowrap, щоб фотографії відображалися в одному рядку */
  gap: 20px;
  padding: 10px 20px;
  overflow-x: auto; /* Додаю прокрутку по горизонталі */
  white-space: nowrap; /* Щоб рядок не переносився */
`;

export const ExtraPhotoItem = styled.li`
  width: 90px;
  height: 90px;

  border-radius: 20px;

  background-image: url(${({ $url }) => $url});
  background-size: cover;

  border: ${({ $isActive }) =>
    $isActive ? '3px solid var(--accent-color)' : 'none'};
  scale: ${({ $isActive }) => $isActive && '1.1'};

  cursor: pointer;
`;

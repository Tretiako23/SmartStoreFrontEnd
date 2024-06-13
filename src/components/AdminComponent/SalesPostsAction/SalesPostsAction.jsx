/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import AddExtraPhoto from '../addExtraPhoto/AddExtraPhoto';
import axios from 'axios';
import styled from 'styled-components';
import { notifyError, notifySucces } from '../../Toasters/Toasters';

const SalesPostsActionWrap = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  overflow: auto;

  & > div > div > div > div > img {
    border: var(--border-base);
  }
`;

const SalesPostsAction = () => {
  const [newPhotos, setNewPhotos] = useState([]);
  const [deletedPhotos, setDeletedPhotos] = useState([]);
  const [salesPostsData, setSalesPostsData] = useState([]);

  useEffect(() => {
    const salesPosts = async () => {
      const result = await axios.get('/sales/get');
      result.status === 200 && setSalesPostsData(result.data);
    };

    salesPosts();
  }, []);

  const handlePatch = async () => {
    const formData = new FormData();

    if (newPhotos.length > 0) {
      for (let photo of newPhotos) {
        photo.file && formData.append('newPhotos', photo.file);
      }
    }

    if (deletedPhotos.length > 0) {
      for (let photoId of deletedPhotos) {
        formData.append('deletedPhotos', photoId);
      }
    }

    const result = await axios.patch('/sales/add', formData);

    if (result.status === 200) {
      notifySucces('Операція пройшла успішно!');
    } else {
      notifyError();
    }
  };

  return (
    <SalesPostsActionWrap>
      <div>
        <div>
          <AddExtraPhoto
            setExtraPhotos={setNewPhotos}
            extraPhotosfromData={salesPostsData && salesPostsData?.img}
            setExtraPhotosForDelete={setDeletedPhotos}
            btnText={'Додати новий пост'}
          />
        </div>

        <button type="button" onClick={handlePatch}>
          Створити/Оновити
        </button>
      </div>
    </SalesPostsActionWrap>
  );
};

export default SalesPostsAction;

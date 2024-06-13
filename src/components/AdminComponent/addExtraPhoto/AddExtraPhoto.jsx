/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { PhotoContainer } from '../AddPhoto/AddPhotoStyled';

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { notifyError, notifySucces } from '../../Toasters/Toasters';

const photosListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  marginBottom: '10px',
};

const AddExtraPhoto = ({
  setExtraPhotos,
  extraPhotosfromData,
  setExtraPhotosForDelete,
  btnText = ' Фото для детального розгляду!',
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    const filesWithIds = acceptedFiles.map(file => ({
      id: uuidv4(),
      file: file,
    }));
    setSelectedFiles(prev => [...prev, ...filesWithIds]);
  }, []);

  const removePhoto = id => {
    setSelectedFiles(prev => prev.filter(photo => photo.id !== id));
    if (extraPhotosfromData.map(item => item.id).includes(id)) {
      setExtraPhotosForDelete(prev => [...prev, id]);
    }
  };

  useEffect(() => {
    setExtraPhotos(selectedFiles);
  }, [selectedFiles, setExtraPhotos]);

  useEffect(() => {
    if (extraPhotosfromData) {
      setSelectedFiles(prev => {
        const existingFileIds = new Set(prev.map(photo => photo.id));
        const newFiles = extraPhotosfromData.filter(
          photo => !existingFileIds.has(photo.id)
        );
        return [...prev, ...newFiles];
      });
    }
  }, [extraPhotosfromData]);

  const addBannerUrl = async (photoId, e) => {
    try {
      const result = await axios.patch('/sales/updateUrl', {
        daq: 'hello world',
        id: photoId,
        bannerUrl: e.target.value,
      });

      if (result.status === 200) {
        notifySucces('Операція пройшла успішно!');
      } else {
        notifyError();
      }
    } catch (error) {
      notifyError();
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div style={photosListStyle}>
        {selectedFiles.length > 0 &&
          selectedFiles.map(photo => (
            <div key={photo.id}>
              {photo?.url ? (
                <PhotoContainer src={photo.url} />
              ) : (
                <PhotoContainer src={URL.createObjectURL(photo.file)} />
              )}
              <button type="button" onClick={() => removePhoto(photo.id)}>
                Видалити
              </button>
              {btnText === 'Додати новий пост' && (
                <div>
                  <input
                    type="text"
                    placeholder="Посилання?"
                    // onChange={e => addBannerUrl(photo.id, e)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        addBannerUrl(photo.id, e);
                      }
                    }}
                  />
                </div>
              )}
            </div>
          ))}
      </div>
      <input {...getInputProps()} />
      <button type="button" {...getRootProps()}>
        {btnText}
      </button>
    </div>
  );
};

export default AddExtraPhoto;

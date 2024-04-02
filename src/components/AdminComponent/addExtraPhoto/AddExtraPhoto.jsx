/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { PhotoContainer } from '../AddPhoto/AddPhotoStyled';

import { v4 as uuidv4 } from 'uuid';

const photosListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
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

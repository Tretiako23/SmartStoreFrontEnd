/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useStore } from '../../../zustand/store';

const CheckBox = ({ id, initialStatus }) => {
  const [isChecked, setIsChecked] = useState(initialStatus);
  const { updateHitGoods } = useStore();

  const handleCheck = async () => {
    const newState = !isChecked;
    setIsChecked(newState);

    try {
      updateHitGoods(id, newState);
    } catch (error) {
      console.error('Error updating status:', error);
      setIsChecked(!newState);
    }
  };

  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
      }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheck}
        style={{ width: '15px', height: '15px' }}
      />
      Це хіт?
    </label>
  );
};

export default CheckBox;

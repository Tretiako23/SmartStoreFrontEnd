/* eslint-disable react/prop-types */

import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  border: var(--border-base);
  border-radius: 5px;

  width: 100%;
  overflow: hidden;
`;

const Td = styled.td`
  border: none;
  padding: 8px;
  font-size: var(--fs-md);

  &:first-child {
    @media (min-width: 767px) {
      text-align: start;
    }

    font-weight: var(--fw-bold);
  }

  &:last-child {
    @media (min-width: 767px) {
      text-align: end;
    }
    font-weight: var(--fw-normal);
  }
`;

const Tr = styled.tr`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  &:nth-child(odd) {
    background-color: rgba(211, 204, 204, 0.38);
  }
`;

const FiltersInfo = ({ data }) => {
  const uniqueValues = {};

  data.forEach(item => {
    if (!uniqueValues[item.name]) {
      uniqueValues[item.name] = [item.value];
    } else {
      uniqueValues[item.name].push(item.value);
    }
  });

  const result = Object.keys(uniqueValues).map(name => ({
    name,
    value: uniqueValues[name],
  }));

  return (
    <div>
      <Table>
        <tbody>
          {result.map(item => (
            <Tr key={item.name}>
              <Td>{item.name}</Td>
              <Td>{item.value.join(', ')}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FiltersInfo;

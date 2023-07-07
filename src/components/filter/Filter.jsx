import { TitleFindInput, InputFindField } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { change } from 'redux/filter/filterSlice';
import { selectFilterValue } from 'redux/selectors/selectors';

export const Filter = () => {
  const dispatch = useDispatch();

  // функція отримання даних з поля filter
  const changeFilter = event => {
    dispatch(change(event.currentTarget.value));
  };

  const value = useSelector(selectFilterValue); // отримання значення тексту із state

  return (
    <TitleFindInput>
      Find contacts by name
      <InputFindField type="text" value={value} onChange={changeFilter} />
    </TitleFindInput>
  );
};

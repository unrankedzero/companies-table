import { FC } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store/store';
import { addCompany, deleteSelectedCompanies } from '../../../store/slices/companiesSlice';

import styles from './TableActions.module.scss';

const TableActions: FC = () => {
  const dispatch = useDispatch();
  const { companies } = useSelector((state: RootState) => state.companies);

  const handleAddCompany = () => {
    const newCompany = {
      id: companies.length + 1,
      name: `Я новая компания ${companies.length + 1}!`,
      address: 'А я её адрес!',
    };

    dispatch(addCompany(newCompany));
  };

  const handleDelete = () => {
    dispatch(deleteSelectedCompanies());
  };

  return (
    <div className={styles.actions}>
      <button onClick={handleAddCompany}>Добавить компанию</button>
      <button onClick={handleDelete}>Удалить выбранные компании</button>
    </div>
  );
};

export { TableActions };
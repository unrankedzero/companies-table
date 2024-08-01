import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleSelectAll } from '../../../store/slices/companiesSlice';
import { RootState } from '../../../store/store';

import { TableActions } from '../TableActions/TableActions';
import { TableBody } from '../TableBody/TableBody';
import styles from './CompaniesTable.module.scss';

const CompaniesTable: FC = () => {
  const dispatch = useDispatch();
  const { companies, selectedIds } = useSelector((state: RootState) => state.companies);

  const handleSelectAll = () => {
    dispatch(toggleSelectAll());
  };

  return (
    <div className={styles.companies}>
      <TableActions />

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.checkbox}>
              <input type="checkbox" checked={selectedIds.length === companies.length} onChange={handleSelectAll} />
            </th>

            <th className={styles.title}>Название компании</th>

            <th className={styles.title}>Адрес</th>
          </tr>
        </thead>

        <tbody>
          <TableBody />
        </tbody>
      </table>
    </div>
  );
};

export { CompaniesTable };
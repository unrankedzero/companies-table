import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { toggleSelect, updateCompany } from '../../../store/slices/companiesSlice';
import { Company } from '../../../interfaces/companies.interface';
import { RootState } from '../../../store/store';

import styles from './TableBody.module.scss';

const TableBody: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1); 

  const dispatch = useDispatch();
  const { companies, selectedIds } = useSelector((state: RootState) => state.companies);

  const handleUpdate = (id: number, field: 'name' | 'address', value: string) => {
    const company = companies.find((company: Company) => company.id === id);

    if (company) {
      dispatch(updateCompany({ ...company, [field]: value }));
    }
  };

  const handleSelect = (id: number) => {
    dispatch(toggleSelect(id));
  };

  const scrollHandler = (e: any) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setCurrentPage((prev) => prev + 1);
    };
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, [])

  return companies.slice(0, currentPage * 20).map((company: Company) => (
    <tr key={company.id} className={styles.cell} style={{ backgroundColor: selectedIds.includes(company.id) ? 'lightblue' : 'transparent' }}>
      <td className={styles.checkbox}>
        <input type="checkbox" checked={selectedIds.includes(company.id)} onChange={() => handleSelect(company.id)} />
      </td>

      <td className={styles.info}>
        <input
          value={company.name}
          onChange={e => handleUpdate(company.id, 'name', e.target.value)}
        />
      </td>

      <td className={styles.info}>
        <input
          value={company.address}
          onChange={e => handleUpdate(company.id, 'address', e.target.value)}
        />
      </td>
    </tr>
  ));
};

export { TableBody };
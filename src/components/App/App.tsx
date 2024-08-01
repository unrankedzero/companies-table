import { FC } from 'react';
import { Provider } from 'react-redux';

import store from '../../store/store';

import { CompaniesTable } from '../CompaniesTable/Table/CompaniesTable';
import styles from './App.module.scss';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <CompaniesTable />
      </div>
    </Provider>
  );
};

export { App };
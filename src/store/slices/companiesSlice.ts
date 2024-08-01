import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company, CompaniesState } from '../../interfaces/companies.interface';
import { companies } from '../../data/companies';

const initialState: CompaniesState = {
  companies,
  selectedIds: [],
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    toggleSelect: (state, action: PayloadAction<number>) => {
      const selected = state.selectedIds;

      if (selected.includes(action.payload)) {
        const index = selected.indexOf(action.payload);
        selected.splice(index, 1);
      } else {
        selected.push(action.payload);
      }
    },

    toggleSelectAll: (state) => {
      const selected = state.selectedIds;
      const companies = state.companies;

      if (selected.length === companies.length) {
        selected.length = 0;
      } else {
        companies.forEach((company) => selected.includes(company.id) ? null : selected.push(company.id));
      }
    },

    addCompany: (state, action: PayloadAction<Company>) => {
      const companies = state.companies;

      companies.push(action.payload);
    },

    deleteSelectedCompanies: (state) => {
      const selected = state.selectedIds;
      const companies = state.companies;

      state.companies = companies.filter(company => !selected.includes(company.id));
      selected.length = 0;
    },

    updateCompany: (state, action: PayloadAction<Company>) => {
      const companies = state.companies;

      const index = companies.findIndex(company => company.id === action.payload.id);
      if (index !== -1) {
        state.companies[index] = action.payload;
      }
    },
  },
});

export const {
  toggleSelect,
  toggleSelectAll,
  addCompany,
  deleteSelectedCompanies,
  updateCompany,
} = companiesSlice.actions;

export default companiesSlice.reducer;
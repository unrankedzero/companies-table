interface Company {
  id: number;
  name: string;
  address: string;
};

interface CompaniesState {
  companies: Company[];
  selectedIds: number[];
};

export type { Company, CompaniesState };
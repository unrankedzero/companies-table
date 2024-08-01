import { Company } from "../interfaces/companies.interface";

const MAX: number = 150; // Количество компаний в таблице
let count = 1;

const companies: Company[] = [];

while(count <= MAX) {
  companies.push({ id: count, name: `Я компания ${count}!`, address: 'Я адрес!' });
  count++;
};

export { companies };
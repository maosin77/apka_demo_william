export enum Field {
  name = 'name',
  location = 'location',
  description = 'description',
}

export const inputs = [
  { key: 1, placeholder: 'Nazwa kancelarii', name: Field.name },
  { key: 2, placeholder: 'Adres', name: Field.location },
  { key: 3, placeholder: 'Opis', name: Field.description },
];

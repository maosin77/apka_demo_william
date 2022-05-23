import Dexie, { Table } from 'dexie';

export interface LawFirm {
  name: string;
  location: string;
  description: string;
}

export class DexieClass extends Dexie {
  lawFirms!: Table<LawFirm>;

  constructor() {
    super('db');
    this.version(1).stores({
      lawFirms: '++id,type ',
    });
  }

  public async addLawFirm(lawFirmDetails: LawFirm) {
    await this.lawFirms.add({
      name: lawFirmDetails.name,
      location: lawFirmDetails.location,
      description: lawFirmDetails.description,
    });
  }
}

export const db = new DexieClass();

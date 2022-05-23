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
      lawFirms: '++id,type ', // Primary key and indexed props
    });
  }

  public async addLawFirm(lawFirmDetails: any) {
    await this.lawFirms.add({
      name: lawFirmDetails.name,
      location: lawFirmDetails.location,
      description: lawFirmDetails.description,
    });
  }
}

export const db = new DexieClass();

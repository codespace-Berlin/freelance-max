import * as migration_20251107_183848_initial from './20251107_183848_initial';
import * as migration_20251201_173827 from './20251201_173827';

export const migrations = [
  {
    up: migration_20251107_183848_initial.up,
    down: migration_20251107_183848_initial.down,
    name: '20251107_183848_initial',
  },
  {
    up: migration_20251201_173827.up,
    down: migration_20251201_173827.down,
    name: '20251201_173827'
  },
];

import { appSchema, tableSchema } from '@nozbe/watermelondb'
import { COLUMNS as PhotoColumns } from './photo'
import { COLLECTIONS } from '../constants'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: COLLECTIONS.PHOTOS,
      columns: PhotoColumns,
    }),
  ],
})

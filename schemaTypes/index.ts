import * as docs from './documents'
import * as schemaFields from './fields'

const fields = Object.values(schemaFields)

const documents = Object.values(docs)

export const schemaTypes = [...documents, ...fields]

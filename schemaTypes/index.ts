import {saveDate} from './documents'
import {stringObjectField} from './fields'

const fields = [stringObjectField]

const documents = [saveDate]

export const schemaTypes = [...documents, ...fields]

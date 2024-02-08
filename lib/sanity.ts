import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'zqs5ysjy',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-05-03', 
})
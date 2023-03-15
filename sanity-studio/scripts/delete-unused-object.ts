import {createClient} from '@sanity/client'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET
const readToken = process.env.SANITY_API_READ_TOKEN

// console.log('projectId', projectId)

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2021-03-25',
  token: readToken,
  useCdn: true, // `false` if you want to ensure fresh data
})

const query = `
  *[ _type in ["home"] ]
  {_id, "refs": count(*[ references(^._id) ])}
  [ refs == 0 ]
  ._id
`

// To unset fields, use the following query:
// Replace the params in patch with the id of the document you want to update
// Add the fields you want to remove/unset to the unset array
// For example:
// The following patch will remove the fields logoDesktop and logoDark from the document with the id c24a6c1f-e299-4da7-8c5a-a0d063a4ade5
// client
//   .patch('c24a6c1f-e299-4da7-8c5a-a0d063a4ade5')
//   .unset(['logoLight', 'logoDark'])
//   .commit()
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

// The following delete will remove the doc with the id image-e04b1ae64eb1b5b841c7acdf2f16b438c53cc93c-228x80-svg

// client
//   .delete('image-e04b1ae64eb1b5b841c7acdf2f16b438c53cc93c-228x80-svg')
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

// The following query will return all the documents that are not referenced by any other document
// and remove them
// client
//   .fetch(query)
//   .then((ids) => {
//     if (!ids.length) {
//       console.log('No assets to delete')
//       return true
//     }
//     console.log(ids)
//     console.log(`Deleting ${ids.length} assets`)
//     // return ids
//     //   .reduce((trx, id) => trx.delete(id), client.transaction())
//     //   .commit()
//     //   .then(() => console.log('Done!'))
//   })
//   .catch((err) => {
//     if (err.message.includes('Insufficient permissions')) {
//       console.error(err.message)
//       console.error('Did you forget to pass `--with-user-token`?')
//     } else {
//       console.error(err.stack)
//     }
//   })

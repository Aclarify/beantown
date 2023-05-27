import {createClient} from '@sanity/client'
import algoliasearch from 'algoliasearch'
import * as dotenv from 'dotenv'
dotenv.config()

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET
const readToken = process.env.SANITY_API_READ_TOKEN

const appId = process.env.ALGOLIA_APP_ID || ''
const apiKey = process.env.ALGOLIA_WRITE_API_KEY || ''
const blogIndexName = process.env.ALGOLIA_BLOG_SEARCH_INDEX_NAME || ''

const sanityClient = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2021-03-25',
  token: readToken,
  useCdn: true, // `false` if you want to ensure fresh data
})

const algoliaClient = algoliasearch(appId, apiKey)

// Fetch the _id of all the documents we want to index
const type = 'blogPosts'
const query = `* [_type == $type && !(_id in path("drafts.**"))][]{
    _type,
    _rev,
    _id,
    "objectID": _id,
    blogTitle,
    blogImage {
      asset->{_id, _key, url, altText},
    },
    blogSlug {
      current
    },
    blogContent[@._type != 'image'] {
      "children": children [] {
        text
      }[0..3]
    }[0..3],
    blogTags [] -> {
      _id, name, category
    },
    publishedAt,
}`

// Sync existing post on algolia
const saveExistingBlogPosts = async () => {
  const documents = await sanityClient.fetch(query, {type})

  // Add publishedAtTimestamp field to each document
  const updatedDocuments = documents.map((document: any) => {
    const publishedAt = document.publishedAt ?? new Date().toISOString()
    const publishedAtTimestamp = new Date(document.publishedAt).getTime() / 1000
    return {...document, publishedAt, publishedAtTimestamp}
  })

  const index = algoliaClient.initIndex(blogIndexName)

  try {
    console.time(`Saving ${updatedDocuments.length} documents to index:`)
    await index.saveObjects(updatedDocuments)
    console.timeEnd(`Saved ${updatedDocuments.length} documents to index:`)
  } catch (error) {
    console.error(error)
  }
}

saveExistingBlogPosts()

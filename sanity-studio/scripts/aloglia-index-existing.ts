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
    "blogContentRaw": blogContent,
    blogTags [] -> {
      _id, name, category
    },
    publishedAt,
}`

// Sync existing post on algolia
const saveExistingBlogPosts = async () => {
  const documents = await sanityClient.fetch(query, {type})

  const index = algoliaClient.initIndex(blogIndexName)

  try {
    console.time(`Saving ${documents.length} documents to index:`)
    await index.saveObjects(documents)
    console.timeEnd(`Saved ${documents.length} documents to index:`)
  } catch (error) {
    console.error(error)
  }
}

saveExistingBlogPosts()

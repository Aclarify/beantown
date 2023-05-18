import {defineCliConfig} from 'sanity/cli'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const projectId = process.env.SANITY_STUDIO_PROJECT_ID

export default defineCliConfig({api: {projectId}})

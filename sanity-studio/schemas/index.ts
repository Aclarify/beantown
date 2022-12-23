import aboutUs from './pages/aboutUs'
import header from './layouts/header'
import imageIconGroup from './organism/imageIconGroup'
import linkGroup from './organism/linkGroup'
import cta from './molecules/cta'
import imageText from './organism/imageText'
import imageIcon from './molecules/imageIcon'
import link from './molecules/link'
import textImageContent from './molecules/textImageContent'
import textTitle from './molecules/textTitle'
import titleDescription from './molecules/titleDescription'
import imageTextGroup from './organism/imageTextGroup'
import textImageContentGroup from './organism/textImageContentGroup'
import list from './organism/list'
import titleDescriptionGroup from './organism/titleDescriptionGroup'
import contentCoordinator from './molecules/contentCoordinator'
import {breakType} from './molecules/breakType'
import footer from './layouts/footer'

export const schemaTypes = [
  //Document Types
  aboutUs,
  header,
  footer,
  //Other Types
  breakType,
  cta,
  imageIcon,
  link,
  textTitle,
  titleDescription,
  textImageContent,
  contentCoordinator,
  imageIconGroup,
  imageText,
  imageTextGroup,
  linkGroup,
  list,
  textImageContentGroup,
  titleDescriptionGroup,
]

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
import portableText from './molecules/portableText'
import {breakType} from './molecules/breakType'
import footer from './layouts/footer'
import home from './pages/home'
import titleDescriptionImageGroup from './organism/titleDescriptionImageGroup'
import textButtonGroup from './organism/textButtonGroup'
import textList from './molecules/textList'
import imageDescriptionButtonGroup from './organism/imageDescriptionButtonGroup'

export const schemaTypes = [
  //Document Types
  aboutUs,
  home,
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
  portableText,
  imageIconGroup,
  imageText,
  imageTextGroup,
  textButtonGroup,
  imageDescriptionButtonGroup,
  linkGroup,
  textList,
  list,
  textImageContentGroup,
  titleDescriptionGroup,
  titleDescriptionImageGroup,
]

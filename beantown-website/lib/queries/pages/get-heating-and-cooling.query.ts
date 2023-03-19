import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const heatingCoolingQuery = ` allHeatingAndCooling {
  pageTitle
	metaDescription  		
  logoLight{
				image{
					asset
						{
							url
              _id
              _key
						}
					}
					href
				}
	  		logoDark{
				image{
					asset
						{
							url
              _id
              _key
						}
        			}
					href
				}
    heroTitle
    heroDescription{
      contentRaw
    }
    heroButton{
      text
    	href
    }
    heroImage{
      asset{
        url
      	altText
        _id
        _key
      }
    }
    servicesTitle
    servicesDescription{
      contentRaw
    }
    servicesGroup{
      titleText
      description
      image{
        asset{
          url
          _id
          _key
          altText
        }
      }
    }
    productsTitle
    productsDescription{
      contentRaw
    }
    productsGroup{
      image{
        asset{
          url
          altText
            _id
            _key
        }
      }
      titleText
      description
    }
    massSaveTitle
    massSaveDescription{
      contentRaw
    }
    massSaveButton{
      text
      href
    }
    massSaveImage{
      asset{
        url
        altText
        _id
        _key
      }
    }
    ctaTitle
		ctaDescription {
				contentRaw
			}
		finalCtaButton {
				text
				href
			}
    ctaImage{
      	asset{
        	url
          _id
          _key
      	}
    	}
    brandsTitle
			clientsLogo {
				image {
					asset {
						url
            _id
            _key
					}
				}
			}
    blogsTitle
		blogsDescription
			blogCards {
        blogTitle
        description
        blogImage{
          image{
            asset{
              url
              _id
              _key
            }
          }
        	href
        }
        button{
          href
        	text
        }
      }
			blogButton {
				text
				href
			}
			faqTitle
			faqDescription
			faqButton {
				text
				href
			}
			faqList {
				question
        answer
			}
}`;

export default gql`
	query {
		page: ${heatingCoolingQuery}
		header: ${navQuery}
		footer: ${footerQuery}
	}
`;

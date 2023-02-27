import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const heatingCoolingQuery = ` allHeatingAndCooling {
    			logoDesktop{
				image{
					asset
						{
							url
						}
					}
					href
				}
	  		logoMobile{
				image{
					asset
						{
							url
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
      	}
    	}
    brandsTitle
			clientsLogo {
				image {
					asset {
						url
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

import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const electricalQuery = ` allHeatingAndCooling {
    		logoDesktop{
				asset{
					url
				}
			}
	  logoMobile{
				asset{
					url
				}
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
    blogTitle
			blogDescription
			blogCards {
				name
				button {
					text
					href
				}
				description 
				image {
					image {
						asset {
							url
						}
					}
					text
					altText
					href
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
				titleText
				subText
				description
			}
}`;

export default gql`
	query {
		page: ${electricalQuery}
		header: ${navQuery}
		footer: ${footerQuery}
	}
`;

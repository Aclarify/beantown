import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const electricalQuery = ` allOtherServices(where: {name: {eq: "Electrical"}}) {
	pageTitle
	metaDescription	
  logoLight{
      image{
				asset{
					url
          _id
          _key
						}
     		 }
      href
			}
	  logoDark{
      image{
				asset{
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
    aboutTheServiceTitle
    aboutTheServiceDescription{
      contentRaw
    }
    aboutTheServiceImage{
      asset{
        url
        _id
        _key
      }
    }
    contactUsButton{
      href
      text
    }
    servicesListTitle
    servicesList
    ctaTitle
    ctaButton{
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
}
  `;

export default gql`
	query {
		page: ${electricalQuery}
		header: ${navQuery}
		footer: ${footerQuery}
	}
`;

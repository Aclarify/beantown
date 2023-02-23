import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const plumbingQuery = ` allOtherServices(where: {name: {eq: "Plumbing"}}) {
		logoDesktop{
      image{
				asset{
					url
						}
     		 }
      href
			}
	  logoMobile{
      image{
				asset{
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
    aboutTheServiceTitle
    aboutTheServiceDescription{
      contentRaw
    }
    aboutTheServiceImage{
      asset{url}
    }
    contactUsButton{
      href
      text
    }
    servicesListTitle
    servicesList
    ctaTitle
    ctaButton{
      href
    }
    ctaImage{
      	asset{
        	url
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
}
  `;

export default gql`
	query {
		page: ${plumbingQuery}
		header: ${navQuery}
		footer: ${footerQuery}
	}
`;

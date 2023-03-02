import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const homeQuery = ` allHome {
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
			heroDescription {
				contentRaw
			}
			heroButton {
				text
				href
			}
			heroImage{
			asset{
				url
			}
			}
			heroImageMobile{
			asset{
				url
			}
			}
			servicesTitle
			servicesDescription {
				contentRaw
			}
			servicesGroup {
				name
				text
				thumbnailImage{
					asset{
						url
					}
				}
				button {
					text
					href
				}
			}
			whyUsTitle
			whyUsDescription {
				contentRaw
			}
			whyUsButton{
					text
					href
			}
			whyUsImage{
				asset{
					url
				}
			}
			whyUsCards {
				titleText
				subText
				image{
				asset{
					url
				}
				}
				description 
			}
			testimonialTitle
			testimonialDescription
			testimonialCardIcon{
			asset{
				url
			}
			}
			testimonialCards {
				titleText
				subText
				description 
			}
			serviceAreaTitle
			serviceAreaDescription
			serviceAreaImage{
			asset{
				url
			}
			}
			serviceAreas {
				title
				listItem
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
			ctaTitle
			ctaDescription {
				contentRaw
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
			finalCtaButton {
				text
				href
			}
    		ctaImage{
      			asset{
        			url
      			}
    		}
}`;

export default gql`
	query {
		page: ${homeQuery}
		header: ${navQuery}
		footer: ${footerQuery}
	}
`;

import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const homeQuery = ` allHome {
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
				_id
				_key
			}
			}
			servicesTitle
			servicesDescription {
				contentRaw
			}
			servicesGroup {
				name
				isMainService
				thumbnailImage{
					asset{
						url
						_id
        				_key
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
					_id
        			_key
				}
			}
			whyUsCards {
				titleText
				subText
				image{
				asset{
					url
					_id
        			_key
				}
				}
				description 
			}
			serviceAreaSection {
				serviceAreaTitle
				serviceAreaDescription
				serviceAreaImage {
					asset {
						url
						_id
        				_key
					}
				}
				serviceAreas {
					title
					listItem
				}
			}
			testimonialSection {
				testimonialTitle
				testimonialDescription
				testimonialCards {
					titleText
					subText
					description
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
			mitsubishiDiamondTitle
			mitsubishiDiamondDescription {
				contentRaw
			}
			mitsubishiDiamondLogo{
				asset{
					url
					_id
        			_key
				}
			}
			mitsubishiDiamondImage{
				asset{
					url
					_id
        			_key
				}
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
					_id
					_key
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

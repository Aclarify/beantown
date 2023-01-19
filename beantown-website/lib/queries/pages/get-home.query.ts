import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const homeQuery = ` allHome {
    		logo{
				asset{
					url
				}
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
				description {
					contentRaw
				}
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
				description {
					contentRaw
				}
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
			blogTitle
			blogDescription
			blogCards {
				name
				button {
					text
					href
				}
				description {
					contentRaw
				}
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
				description {
					contentRaw
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
		home: ${homeQuery}
		header: ${navQuery}
		footer: ${footerQuery}
	}
`;

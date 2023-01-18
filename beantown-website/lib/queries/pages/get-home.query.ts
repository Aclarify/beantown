import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const homeQuery = `allHome {
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
			servicesTitle
			servicesDescription {
				contentRaw
			}
			servicesGroup {
				name
				text
				button {
					text
					href
				}
			}
			whyUsTitle
			whyUsDescription {
				contentRaw
			}
			whyUsCards {
				titleText
				subText
				description {
					contentRaw
				}
			}
			testimonialTitle
			testimonialDescription
			testimonialCards {
				titleText
				subText
				description {
					contentRaw
				}
			}
			serviceAreaTitle
			serviceAreaDescription
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
		}`;

export default gql`
	query {
		home: ${homeQuery}
		header: ${navQuery}
		footer: ${footerQuery}
	}
`;

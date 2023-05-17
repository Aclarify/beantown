import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const financingQuery = `allFinancing {
			pageTitle
			metaDescription
			logoLight {
				image {
					asset {
						url
						_id
						_key
					}
				}
			}
			logoDark {
				image {
					asset {
						url
						_id
						_key
					}
				}
			}
			heroTitle
			heroImage {
				asset {
					url
					_id
					_key
				}
			}
			heroDescription
			aboutSectionTitle
			aboutSectionDescription {
				contentRaw
			}
			aboutSectionImage {
				asset {
					url
					_id
					_key
				}
			}
			benefitsTitle
			benefitsDescription {
				contentRaw
			}
			benefitsImage {
				asset {
					url
					_id
					_key
				}
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
			ctaTitle
			ctaDescription {
				contentRaw
			}
			ctaImage {
				asset {
					url
					_id
					_key
				}
			}
			ctaButton {
				text
				href
			}
		
		}`;
export default gql`
	query {
		page: ${financingQuery}
		header: ${navQuery}
		footer: ${footerQuery}
	}
`;

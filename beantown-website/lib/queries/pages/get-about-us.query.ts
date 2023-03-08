import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const aboutUsQuery = `allAboutUs {
			logoDesktop {
				image {
					asset {
						url
						_id
						_key
					}
				}
			}
			logoMobile {
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
			heroImageMobile {
				asset {
					url
					_id
					_key
				}
			}
			missionTitle
			missionDescription {
				contentRaw
			}
			missionImage {
				asset {
					url
					_id
					_key
				}
			}
			valuesTitle
			valuesDescription {
				contentRaw
			}
			valuesImage {
				asset {
					url
					_id
					_key
				}
			}
			valuesCards {
				text
				iconImage {
					asset {
						url
						_id
						_key
					}
				}
			}
			communityCtaTitle
			communityctaImage {
				asset {
					url
					_id
					_key
				}
			}
			communityCtaButton {
				text
				href
			}
			teamTitle
			teamDescription
			memberCards {
				memberName
				memberDesignation
				profilePicture {
					asset {
						url
						_id
						_key
					}
				}
				socialMediaDetails {
					image {
						image {
							asset {
								url
								_id
								_key
							}
						}
					}
					href
					altText
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
		page: ${aboutUsQuery}
		header: ${navQuery}
		footer: ${footerQuery}
	}
`;

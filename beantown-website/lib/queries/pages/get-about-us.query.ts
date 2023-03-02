import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const aboutUsQuery = `allAboutUs {
			logoDesktop {
				image {
					asset {
						url
					}
				}
			}
			logoMobile {
				image {
					asset {
						url
					}
				}
			}
			heroTitle
			heroImage {
				asset {
					url
				}
			}
			heroDescription
			heroImageMobile {
				asset {
					url
				}
			}
			missionTitle
			missionDescription {
				contentRaw
			}
			missionImage {
				asset {
					url
				}
			}
			valuesTitle
			valuesDescription {
				contentRaw
			}
			valuesImage {
				asset {
					url
				}
			}
			valuesCards {
				text
				iconImage {
					asset {
						url
					}
				}
			}
			communityCtaTitle
			communityctaImage {
				asset {
					url
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
					}
				}
				socialMediaDetails {
					image {
						image {
							asset {
								url
							}
						}
					}
					href
					altText
				}
			}
			serviceAreas {
				serviceAreaTitle
				serviceAreaDescription
				serviceAreaImage {
					asset {
						url
					}
				}
				serviceAreas {
					title
					listItem
				}
			}
			testimonials {
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

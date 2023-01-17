import { gql } from '@apollo/client';

export default gql`
	query {
		allHome {
			headerTitle
			headerDescription {
				contentRaw
			}
			headerButton {
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
		}
	}
`;

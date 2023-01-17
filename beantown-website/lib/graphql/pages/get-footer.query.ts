import { gql } from '@apollo/client';

export default gql`
	# Write your query or mutation here
	query {
		allFooter(where: { name: { eq: "Footer" } }) {
			logo {
				image {
					asset {
						url
					}
				}
			}
			description
			socialMediaIcons {
				image {
					asset {
						url
					}
				}
				href
				altText
			}
			navLinks {
				linkText
				href
				newWindow
			}
			navGroup {
				groupTitle
				links {
					linkText
					href
					newWindow
				}
			}
			contactUs {
				Name
				iconImage {
					image {
						asset {
							url
						}
					}
					text
				}
			}
			copyright
		}
	}
`;

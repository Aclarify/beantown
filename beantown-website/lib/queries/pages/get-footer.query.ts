const footerQuery = `
		allFooter(where: { name: { eq: "Footer" } }) {
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
			contactUsTitle
			contactUs {
				text
				iconImage {
					image {
						asset {
							url
						}
					}
				}
			}
			copyright
		}
`;

export default footerQuery;

const footerQuery = `
		allFooter(where: { name: { eq: "Footer" } }) {
			description
			socialMediaIcons {
				image {
					asset {
						url
						_id
          				_key
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
				iconImage{
        		 asset
          			{
            		url
					_id
					_key
          			}
        		}
			}
			copyright
		}
`;

export default footerQuery;

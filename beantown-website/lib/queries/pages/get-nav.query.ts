const navQuery = `allNav(where: { name: { eq: "Header" } }) {
			logo {
				image {
					asset {
						url
					}
				}
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
			headerButton {
				text
				href
			}
		}`;

export default navQuery;

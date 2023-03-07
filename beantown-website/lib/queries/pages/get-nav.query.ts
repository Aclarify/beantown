const navQuery = `allNav(where: { name: { eq: "Header" } }) {
			navLinks {
				linkText
				heroIconName
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

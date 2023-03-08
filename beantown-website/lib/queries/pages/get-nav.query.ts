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
          heroIconName
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

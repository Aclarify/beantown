import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const massSaveQuery = `allMassSave {
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
			aboutMassSaveTitle
			aboutMassSaveDescription {
				contentRaw
			}
			aboutMassSaveImage {
				asset {
					url
					_id
					_key
				}
			}
			featuresTitle
			featuresDescription {
				contentRaw
			}
			featuresImage {
				asset {
					url
					_id
					_key
				}
			}

			 massSaveSection3Title
 			 massSaveSection3Image{
				asset{
				url
				_id
				_key
				}
			}
			massSaveSection3Description{
				contentRaw
			}
			howItWorksTitle
            howItWorksDescription {
				contentRaw
			}
			contactButton {
				text
				href
				dialogTitle
				dialogDesc
				dialogButtonHref
				dialogButtonText
			}
			faqTitle
			faqDescription
			faqButton {
				text
				href
			}
			faqList {
				question
                answer
			}
            stagesCards{
                titleText
                image {
                    asset {
                        url
                        _id
                        _key
                        }
                    }
                description
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
		page: ${massSaveQuery}
		header: ${navQuery}
		footer: ${footerQuery}
	}
`;

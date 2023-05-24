import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';
const careersQuery = `
  allCareers {
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
        heroDescription
    		careerHeroImage{
          asset{
            url
            _id
            _key
          }
        }
          heroButton{
            text
            href
      	}
        jobListTitle
    		jobList{
          _key
          positionName
           jobImage{
            asset{
              url
              _key
              _id
              metadata {
                dimensions {
                  width
                  height
                }
              }
            }
          }
          learnMoreButton{
            text
            href
          }
          jobBenefitCards{
            titleText
            image{
              asset{
                url
                 _id
                 _key
              }
            }
            description

          }
           jobDescription{
            contentRaw
          }
          jobResponsibilityMainTitle
          jobResponsibilities{
            titleText
            description
          }
        }
        globaljobBenefitSectionTitle
    		careerBenefits{
          titleText
          description
           image{
              asset{
                url
                 _id
                 _key
              }
            }
        }
         applyButton{
          text
          href
        }
        applicationTitle
        applicationDescription
        applicationImage{
        asset{
          url
          _id
          _key
        }
        }
        employmentTypeOptions{
          value
          label
        }
  		}
         `;
export default gql`
	query {
		page: ${careersQuery}
		header: ${navQuery}
 		footer: ${footerQuery}
	}
`;

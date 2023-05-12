import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

export const upcomingEventsQuery = gql`
	query ($currentDate: DateTime) {
		events: allEventsList(
			where: { eventDate: { gte: $currentDate } }
			sort: { eventDate: ASC }
		) {
			eventTitle
			eventUrl
			eventDate
			eventImage {
				asset {
					url
					_id
					_key
				}
			}
		}
	}
`;

const communityQuery = `
  allCommunity {
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
       heroImage{
         asset{
           url
           _id
           _key
         }
       }
       viewEventButtonText
       loadMoreButtonText
       eventSectionTitle
       upcomingEvents{
         eventTitle
         eventUrl
         eventDate
         eventImage{
           asset{
               url
               _id
               _key
             }
           }
       }
       mediaFeedTitle
       socialMediaFeed{
         name
         fbURL
         instaURL
         twitterURL
         feedImage{
           asset{
             url
             _key
             _id
           }
         }
       }
      
   ctaTitle
   ctaDescription{
     contentRaw
   }
   ctaButton{
     text
     href
   }
   ctaImage{
     asset{
       url
       _id
       _key
     }
   }
 }`;
export default gql`
 query {
   page: ${communityQuery}
   header: ${navQuery}
   footer: ${footerQuery}
 }
`;

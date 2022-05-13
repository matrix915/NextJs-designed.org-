import { gql } from "@apollo/client";

// Current user Topics for mentor filter
export const USER_TOPICS = gql`
	query getUserTopics {
		user_topics(distinct_on: topic_name) {
		topic_name
		}
	}
`;
import { gql } from "@apollo/client";

export const ALL_JOBS = gql`
	query allJobs(
		$to: Int!
		$from: Int
		$experience: String
		$type: String
		$location: String
	) {
		jobs_listings(
			order_by: { created_at: desc }
			where: {
				is_available: { _eq: true }
				type: { _regex: $type }
				experience: { _regex: $experience }
				location: { _regex: $location }
			}
			limit: $to
			offset: $from
		) {
			id
			created_at
			updated_at
			title
			company
			location
			experience
			type
			job_url
			source
			remote_friendly
			logo_url
			specialty
		}
		jobs_listings_aggregate(order_by: { created_at: desc }) {
			aggregate {
				count
			}
		}
	}
`;

// Current jobs type for jobs filter
export const JOBS_TYPES = gql`
	query getUserTypes {
		jobs_listings_aggregate(distinct_on: type) {
			aggregate {
				count
			}
			nodes {
				type
			}
		}
	}
`;

// Current user Experience for mentor filter
export const JOBS_EXPERIENCE = gql`
	query getUserExperience {
		jobs_listings_aggregate(distinct_on: experience) {
			aggregate {
				count
			}
			nodes {
				experience
			}
		}
	}
`;

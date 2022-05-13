import { gql } from "@apollo/client";
import createApolloClient from "../apolloClient";

// Used to build the /our-mentors page with filters
export const ALL_MENTORS = gql`
	query Mentors(
		$country: String
		$topics: jsonb
		$languages: jsonb
		$timezone: String
		$years_of_experience: String
		$gender: String
		$from: Int
		$to: Int
	) {
		user_profiles(
			order_by: { updated_at: desc }
			where: {
				is_mentor: { _eq: true }
				is_approved: { _eq: true }
				is_available: { _eq: true }
				is_enabled: { _eq: true }
				country: { _regex: $country }
				gender: { _regex: $gender }
				timezone: { _regex: $timezone }
				years_of_experience: { _regex: $years_of_experience }
				languages: { _contains: $languages }
				topics: { _contains: $topics }
			}
			limit: $to
			offset: $from
		) {
			first_name
			username
			job_employer
			job_title
			last_name
			online_booking
			about
			topics
			avatar_url
			country
			languages
			timezone
			years_of_experience
			gender
		}
		user_profiles_aggregate(
			order_by: { created_at: desc }
			where: {
				is_mentor: { _eq: true }
				is_approved: { _eq: true }
				is_available: { _eq: true }
				is_enabled: { _eq: true }
				country: { _regex: $country }
				gender: { _regex: $gender }
				timezone: { _regex: $timezone }
				years_of_experience: { _regex: $years_of_experience }
				languages: { _contains: $languages }
				topics: { _contains: $topics }
			}
		) {
			aggregate {
				count
			}
		}
	}
`;

// Used to build the /our-mentors page with filters
export const ALL_MENTORS_PAGES = gql`
	query Mentors {
		users(
			where: {
				user_profile: {
					is_approved: { _eq: true }
					is_available: { _eq: true }
					is_enabled: { _eq: true }
					is_mentor: { _eq: true }
				}
			}
		) {
			user_profile {
				username
			}
		}
	}
`;

// This retrieves the mentee information for send an email to mentor
export const MENTEE_EMAIL_DATA = gql`
	query emailMentor($id: uuid) {
		users(where: { id: { _eq: $id } }) {
			email
			user_profile {
				first_name
				last_name
				country
			}
		}
	}
`;

// Used to build the mentor profile pages
export const GET_MENTOR = async (username, Domain) => {
	const query = gql`
		query getMentor($username: String) {
			users(
				where: {
					user_profile: {
						is_approved: { _eq: true }
						is_available: { _eq: true }
						is_enabled: { _eq: true }
						is_mentor: { _eq: true }
						username: { _eq: "${username}" }
					}
				}
			) {
				email
				id
				user_profile {
					first_name
					last_name
					avatar_url
					username
					about
					city
					gender
					id
					job_title
					job_employer
					website
					country
					timezone
					languages
					topics
					years_of_experience
					created_at
					online_booking
					social_facebook
					social_instagram
					social_medium
					social_twitter
					social_linkedin
					social_codepen
					social_github
					social_behance
					social_youtube
					social_pinterest
					social_slideshare
					social_dribbble
					social_producthunt
				}
			}
		}
	`;
	const response = await createApolloClient()
		.query({ query })
		.catch((err) => {
			throw new Error(err);
		});
	return response.data;
};

// This is duplicate and needs to be removed
export const ALL_MENTORS_COUNT = gql`
	query Mentors {
		user_profiles_aggregate(
			where: {
				is_mentor: { _eq: true }
				is_approved: { _eq: true }
				is_available: { _eq: true }
				is_enabled: { _eq: true }
			}
		) {
			aggregate {
				count
			}
		}
	}
`;

// Used to get counts
export const GET_COUNTS = async (query, Domain) => {
	const response = await createApolloClient()
		.query({ query })
		.catch((err) => {
			throw new Error(err);
		});
	console.log("response: ", response);
	return response.data;
};

// Current total count
export const GET_COUNTS_QUERY = gql`
	query getCounts {
		user_profiles(limit: 1) {
			total_countries
			total_timezones
			total_mentors
			total_users
		}
	}
`;

// Used to get new mentors
export const NEW_MENTORS = async (Domain) => {
	const query = gql`
		query newMentors {
			user_profiles(
				limit: 12
				order_by: { updated_at: desc }
				where: {
					is_mentor: { _eq: true }
					is_enabled: {}
					is_available: { _eq: true }
					is_approved: { _eq: true }
				}
			) {
				avatar_url
				first_name
				last_name
				job_title
				country
			}
		}
	`;
	const response = await createApolloClient()
		.query({ query })
		.catch((err) => {
			throw new Error(err);
		});
	return response.data;
};

// Used to get new mentors for profile page

export const ALL_MENTORS_PROFILE = async () => {
	const query = gql`
		query user_profiles {
			user_profiles(
				where: { is_approved: { _eq: true }, is_mentor: { _eq: true } }
			) {
				username
			}
		}
	`;
	const response = await createApolloClient()
		.query({ query })
		.catch((err) => {
			throw new Error(err);
		});
	return response.data;
};
// Used to build the mentor profile pages

export const GET_MENTOR_PROFILE = async (username, Domain) => {
	const query = gql`
	query allMentorPages {
		user_profiles(where: { is_approved: {_eq: true}, is_mentor: {_eq: true}, username: {_eq: "${username}"}}) {
			first_name
			last_name
			avatar_url
			username
			about
			city
			gender
			id
			job_title
			job_employer
			website
			country
			timezone
			languages
			topics
			years_of_experience
			created_at
			online_booking
			social_facebook
			social_instagram
			social_medium
			social_twitter
			social_linkedin
			social_codepen
			social_github
			social_behance
			social_youtube
			social_pinterest
			social_slideshare
			social_dribbble
			social_producthunt
		}
	  }
	`;
	const response = await createApolloClient()
		.query({ query })
		.catch((err) => {
			throw new Error(err);
		});
	return response.data;
};
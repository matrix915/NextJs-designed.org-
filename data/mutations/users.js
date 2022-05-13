import { gql } from "@apollo/client";

export const UPDATE_USER_PROFILE = gql`
mutation updateUser(
	$id: uuid!
	  $first_name: String
	  $last_name: String
	  $username: String
	  $city: String
	  $country_state: String
	  $country: String
	  $timezone: String
	  $languages: jsonb
	  $gender: String
	  $website: String
	  $about: String
		$avatar_url: String
	  $social_twitter: String
	  $social_facebook: String
	  $social_linkedin: String
	  $social_dribbble: String
	  $social_behance: String
	  $social_github: String
	  $social_pinterest: String
	  $social_instagram: String
	  $social_medium: String
	  $social_slideshare: String
	  $social_youtube: String
	  $social_codepen: String
	  $topics: jsonb
	  $years_of_experience: String
	  $job_title: String
	  $job_employer: String
	  $is_registration_complete: Boolean
	  $is_mentor: Boolean
	  $is_available: Boolean
	  $online_booking: String
	  $mentoring_experience: String
	  $mentoring_why: String
	  $hear_about_us: json
  ) {
	  update_user_profiles_by_pk(
		  pk_columns: { id: $id }
		  _set: {
			  first_name: $first_name
			  last_name: $last_name
			  username: $username
			  city: $city
			  country_state: $country_state
			  country: $country
			  timezone: $timezone
			  languages: $languages
			  gender: $gender
			  website: $website
			  about: $about
				avatar_url: $avatar_url
			  social_twitter: $social_twitter
			  social_facebook: $social_facebook
			  social_linkedin: $social_linkedin
			  social_dribbble: $social_dribbble
			  social_behance: $social_behance
			  social_github: $social_github
			  social_pinterest: $social_pinterest
			  social_instagram: $social_instagram
			  social_medium: $social_medium
			  social_slideshare: $social_slideshare
			  social_youtube: $social_youtube
			  social_codepen: $social_codepen
			  is_registration_complete : $is_registration_complete
			  topics: $topics
			  years_of_experience: $years_of_experience
			  job_title: $job_title
			  job_employer: $job_employer
			  is_mentor: $is_mentor
			  is_available: $is_available
			  online_booking: $online_booking
			  mentoring_experience: $mentoring_experience
			  mentoring_why: $mentoring_why
			  hear_about_us: $hear_about_us
		  }
	  ) {
			  created_at
			  updated_at
			  is_approved
			  avatar_url
			  social_behance
			  city
			  country
			  country_state
			  social_dribbble
			  username
			  job_employer
			  social_facebook
			  first_name
			  gender
			  social_instagram
			  is_available
			  is_enabled
			  is_mentor
			  job_title
			  languages
			  last_name
			  social_linkedin
			  social_medium
			  is_registration_complete
			  timezone
			  social_twitter
			  username
			  website
			  years_of_experience
			  social_youtube
			  online_booking
			  about
			  topics
			  social_github
			  social_pinterest
			  social_slideshare
			  social_codepen
			  mentoring_experience
			  mentoring_why
			  hear_about_us
	  }
  }
`;

export const UPDATE_USER_PROFILE_IMAGE = gql`
mutation updateUserImage($id: uuid!, $avatar_url: String) {
  update_user_profiles_by_pk(pk_columns: {id: $id}, _set: {avatar_url: $avatar_url}) {
    avatar_url
  }
}
`;
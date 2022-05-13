import { gql } from "@apollo/client";
import createApolloClient from "../apolloClient";

export const GET_USER_PROFILE = gql`
  query getUser($id: uuid) {
    users(where: { id: { _eq: $id } }) {
      id
      email
      user_profile {
        created_at
        updated_at
        is_approved
        avatar_url
        social_behance
        city
        country
        country_state
        social_dribbble
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
        timezone
        social_twitter
        username
        website
        years_of_experience
        social_youtube
        online_booking
        is_registration_complete
        about
        topics
        social_github
        social_pinterest
        social_slideshare
        social_codepen
        country_state
        mentoring_experience
        mentoring_why
        hear_about_us
      }
    }
  }
`;

// This should the logged in users data that is contacting a mentor
// When an email is sent this is the mentees data in the body
export const MENTOR_EMAIL_DATA = gql`
  query menteeEmail($id: String) {
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

export const CHECK_USERNAME = gql`
  query checkUsername($username: String){
    user_profiles(
      where:{ username:{ _eq:$username }}
    ){
      username
    }
  }
`;

// Current user Topics for mentor filter
export const USER_TOPICS = gql`
  query getUserTimezones {
    user_profiles_aggregate(
      distinct_on: topics
      where: { is_mentor: { _eq: true }, is_approved: { _eq: true } }
    ) {
      aggregate {
        count
      }
      nodes {
        topics
      }
    }
  }
`;

// Current user countries for mentor filter
export const USER_COUNTRIES = gql`
  query getUserCountries {
    user_profiles_aggregate(
      distinct_on: country
      where: { is_mentor: { _eq: true }, is_approved: { _eq: true } }
    ) {
      aggregate {
        count
      }
      nodes {
        country
      }
    }
  }
`;

// Current user timezones for mentor filter
export const USER_TIMEZONES = gql`
  query getUserTimezones {
    user_profiles_aggregate(
      distinct_on: timezone
      where: { is_mentor: { _eq: true }, is_approved: { _eq: true } }
    ) {
      aggregate {
        count
      }
      nodes {
        timezone
      }
    }
  }
`;

// Current user languages for mentor filter
export const USER_LANGUAGES = gql`
  query getUserLanguages {
    user_profiles_aggregate(
      distinct_on: languages
      where: { is_mentor: { _eq: true }, is_approved: { _eq: true } }
    ) {
      aggregate {
        count
      }
      nodes {
        languages
      }
    }
  }
`;

// Current user languages for mentor filter
export const USER_EXPERIENCE = gql`
  query getUserExperience {
    user_experience(distinct_on: user_experience) {
      user_experience
    }
  }
`;



import { gql } from "@apollo/client";

export const INSERT_MENTOR_EMAIL = gql`
  mutation ($mentorEmail: mentor_emails_insert_input!) {
    insert_mentor_emails(objects: [$mentorEmail]) {
      returning {
        id
        created_at
      }
    }
  }
`;


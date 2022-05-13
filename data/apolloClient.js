import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		cache: new InMemoryCache({
			user_profiles: {
				keyFields: ["first_name"]
			}
		}),
		link: new HttpLink({
			uri: process.env.NEXT_PUBLIC_NHOST_GRAPHQL,
			headers: {
				"X-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
				lang: "en",
			},
		}),
	});
}

export default createApolloClient;
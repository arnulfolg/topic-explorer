import { gql, useQuery } from '@apollo/client';

export const GQL_QUERY = gql`
    query GetRelatedTopics($topic: String!) {
        topic(name: $topic) {
			stargazerCount
            relatedTopics(first: 9) {
                id
                name
                stargazerCount
            }
        }
    }
`;

export const useTopic = topic => {
    const { loading, error, data } = useQuery(GQL_QUERY, {variables: { topic }});

	const topics  = data ? data.topic.relatedTopics : []
	const topicStars = data ? data.topic.stargazerCount : 0

    return [
        loading,
        error,
        topics,
		topicStars
	];
}
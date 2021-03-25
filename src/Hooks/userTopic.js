import { gql, useQuery } from '@apollo/client';

export const GET_RELATED_TOPICS = gql`
    query GetRelatedTopics($topic: String!) {
        topic(name: $topic) {
			stargazerCount
            relatedTopics(first: 10) {
                id
                name
                stargazerCount
            }
        }
    }
`;

export const useTopic = topic => {
    const { loading, error, data } = useQuery(GET_RELATED_TOPICS, {
        variables: { topic }
    });

	const topics  = data ? data.topic.relatedTopics : []
	const topicStars = data ? data.topic.stargazerCount : 0

    return [
        loading,
        error,
        topics,
		topicStars
	];
}
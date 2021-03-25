
function TopicTitle({topicTitle, topicStars}) {
  return (
	<section className="grid grid-cols-2 bg-green-800 rounded-md  p-8 shadow-lg transition-colors  text-white">
		<section>
			<p className="text-4xl text-center">{topicTitle}</p>
			<p className="text-normal text-center">topic</p>
		</section>
		<section>
			<p className="text-3xl text-center">{topicStars}</p>
			<p className="text-normal text-center">stars</p>
		</section>
	</section>
  );
}

export default TopicTitle;

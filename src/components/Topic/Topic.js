import Stargazer from './../Stargazer/Stargazer'
function Topic({topic, stars, clickAction}) {
  return (
    <section 
      tabIndex="1"
      className="Topic bg-green-100 rounded-md hover:bg-green-500 p-8 shadow-lg transition-colors cursor-pointer focus:outline-none focus:ring focus:border-blue-300"
      onClick={() => clickAction(topic)}>
		<Stargazer stars={stars}></Stargazer>
		<p className="text-center text-xl">{topic}</p>
    </section>
  );
}

export default Topic;

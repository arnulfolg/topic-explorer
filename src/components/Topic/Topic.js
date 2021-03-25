import Stargazer from './../Stargazer/Stargazer'
function Topic({topic}) {
  return (
    <section className="Topic bg-green-100 rounded-md hover:bg-green-500 p-8 shadow-lg transition-colors cursor-pointer focus:outline-none focus:ring focus:border-blue-300">
		<Stargazer stars={topic}></Stargazer>
		<p className="font-normal text-center text-xl">Topic {topic}</p>
    </section>
  );
}

export default Topic;

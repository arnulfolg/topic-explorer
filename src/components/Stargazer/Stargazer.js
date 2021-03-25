
function Stargazer({stars}) {
  return (
    <section className="Stargazer mb-2">
		<p className="text-center text-5xl font-bold">{stars}</p>
		<span className="sr-only">Number of Stars</span>
    </section>
  );
}

export default Stargazer;

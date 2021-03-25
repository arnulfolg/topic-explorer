import Stargazer from './../Stargazer/Stargazer'
function Topic({topic, stars, clickAction}) {

let cardColor = ""

if(stars < 100 ) {
    cardColor = "red"
} else if(stars<10000){
  cardColor = "yellow"
} else {
  cardColor = "green"
}

  return (
    <a 
      href={`#` + topic}
      className={`Topic rounded-md p-8 shadow-lg transition-colors cursor-pointer focus:outline-none focus:ring focus:border-${cardColor}-300 bg-${cardColor}-100  hover:bg-${cardColor}-500` 
        }
      onClick={() => clickAction(topic)}>
		<Stargazer stars={stars}></Stargazer>
		<p className="text-center text-xl">{topic}</p>
    </a>
  );
}

export default Topic;

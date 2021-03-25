// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

import Topic from './components/Topic/Topic'
import Header from './components/Header/Header'

function App() {
  const [topics, ] = useState([1,2,3,4,5,6,7,8,9,0])

  function clickHandler() {
    console.log("click")
  }

  return (
    <section>
        <Header></Header>
        <main className="container mx-auto px-8 grid sm:grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto mt-8">
          <p className="col-span-full self-end font-bold text-center text-2x1 h-12">Topic: React</p>
          {topics.map((topic, index) => {
            return <Topic topic={index} key={index} onClick={clickHandler}></Topic>
          })

          }
          
        </main>
    </section>
  );
}

export default App;

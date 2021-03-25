import {useState} from 'react'
import './App.css';

import Topic from './components/Topic/Topic'
import Header from './components/Header/Header'
import TopicTitle from './components/TopicTitle/TopicTitle'
import FormTopic from './components/Form/Form'
import  { useTopic }  from './Hooks/useTopic'

function App() {
  const [search, setSearch] = useState("react")
  const [topic, setTopic] = useState("react")
    const [ ,, topics, topicStars ] = useTopic(topic);

  function clickHandler(topicName, e) {
    e?.preventDefault()
    if (topicName) {
      setTopic(topicName)
      setSearch(topicName)
    }
  }

  function handleChange(e) {
     e.preventDefault();
    setSearch(e.target.value)
  }

  return (
    <section>
        <Header></Header>
        <main className="container mx-auto px-8 ">
          <section 
            className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 auto-rows-auto mt-8">
            <TopicTitle 
              topicTitle={topic} 
              topicStars={topicStars}
            />

            <FormTopic
              topicValue={search}
              topicHandle={handleChange}
              subtmitForm={clickHandler}
            />
          </section>
          
          <section className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto mt-8">
            {topics.map(topic => {
                return (
                  <Topic 
                    topic={topic.name} 
                    key={topic.id} 
                    stars={topic.stargazerCount} 
                    clickAction={clickHandler}
                    />
                  )
              })
              }
          </section>
         
          
        </main>
    </section>
  );
}

export default App;

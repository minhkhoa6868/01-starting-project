import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js'

function MainGoal() {
    return (
      <footer>
        <p>
          My main goal: I will learn React in-depth 
          and become a profesional web developer
        </p>
      </footer>
    );
}


function App() {
    const [selectedTopic, setselectedTopic] = useState()

    function handleSelect(selectedButton) {
      // selectedButton => 'components', 'JSX', 'Props', 'State'
      setselectedTopic(selectedButton);
      //console.log(selectedTopic);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
      tabContent = 
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
    }

    return (
      <div>
        <Header />
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              <CoreConcept {...CORE_CONCEPTS[0]} />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
              <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            {tabContent}
          </section>
          <h2>Time to get started!</h2>
        </main>
        <MainGoal />
      </div>
    );
}

export default App;

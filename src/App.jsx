import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

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
    const [selectedTopic, setselectedTopic] = useState('Please click a button')

    function handleSelect(selectedButton) {
      // selectedButton => 'components', 'JSX', 'Props', 'State'
      setselectedTopic(selectedButton);
      console.log(selectedTopic);
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
            {selectedTopic}
          </section>
          <h2>Time to get started!</h2>
        </main>
        <MainGoal />
      </div>
    );
}

export default App;

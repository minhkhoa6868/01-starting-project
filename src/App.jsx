import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

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
    return (
      <Fragment>
        <Header />
        <main>
          <CoreConcepts />
          <Examples />
          <h2>Time to get started!</h2>
        </main>
        <MainGoal />
      </Fragment>
    );
}

export default App;

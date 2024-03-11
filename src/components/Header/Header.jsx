import reactImg from '../../assets/react-core-concepts.png';
import './Header.css'
// ../ for go out of the nets
const reactDescriptions = ['Funndamental', 'Crucial', 'Core'];

function genRadomInt(max){
    return Math.floor(Math.random() * (max + 1));
}

// dynamical output
export default function Header(){
    const description = reactDescriptions[genRadomInt(2)];

    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build now!
        </p>
      </header>
    );
}
import './Home.scss';
import Greeting from './Greeting/Greeting';
import Parent from './Parent/Parent';
import Location from './Location/Location';
import View from './View/View';
import IntecoDiv from './Inteco/Inteco';
import Bank from './Bank/Bank';

function Home() {
  return (
    <div className="home">
      <Greeting />
      <Parent />
      <Location />
      <View /> 
      <IntecoDiv />
      <Bank />
    </div>
  );
}

export default Home;
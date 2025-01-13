import {useLocation} from 'react-router-dom';

import CardContainer from '../CardContainer';
import Header from '../Header';
import TodoConatiner from '../TodoContainer';

const Landing = () => {
  const data = useLocation ();
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header user={data.state.user} />
        <CardContainer />
        <TodoConatiner />
      </div>
    </div>
  );
};

export default Landing;

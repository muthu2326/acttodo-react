import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';


const Signup = (props) => {
    const [username, setusername] = useState ('');
    const [password, setpassword] = useState ('');
    const navigate = useNavigate();

    const handleUserNameChange = event => {
        setusername (event.target.value);
      };
    
      const handlePasswordChange = event => {
        setpassword (event.target.value);
      };

      const adduser = () => {
        props.setusers([...props.users, {username, password}])
        alert('Successly registered')
        navigate('/landing', {state: {user: username}})
      }
      
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi!</h1>
        <div className='flex flex-col gap-2 my-2 flex-wrap'>
          <p>Sign up to manage your activities :)</p>
          <input
            type="text"
            className="w-52 border border-black p-1 bg-transparent rounded-md"
            placeholder="username"
            onChange={handleUserNameChange}
          />
          <input
            type="text"
            className="w-52 border border-black p-1 bg-transparent rounded-md"
            placeholder="password"
            onChange={handlePasswordChange}
          />
          <input
            type="text"
            className="w-52 border border-black p-1 bg-transparent rounded-md"
            placeholder="confirm password"
          />
          <button className="w-24 bg-[#FCA201] p-1 rounded-md" onClick={adduser}>Signup</button>
          <p>
            Already have an account ?
            {' '}
            <Link to={'/'} className="underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signup;

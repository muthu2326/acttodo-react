import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Login = props => {
  const [username, setusername] = useState ('');
  const [password, setpassword] = useState ('');
  const [flag, setFlag] = useState (true);
  const navigate = useNavigate();

  const handleUserNameChange = event => {
    setusername (event.target.value);
  };

  const handlePasswordChange = event => {
    setpassword (event.target.value);
  };

  const validateCredentials = () => {
    let userFound = false;
    props.users.forEach (user => {
      if (user.username === username && user.password === password) {
        userFound = true;
        console.log ('Success');
        navigate('/landing', {state: {user: username}})
      }
    });

    if (!userFound) {
      setFlag (false);
      console.log ('Invalid Credentials');
    }
  };

  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi!</h1>
        <div className="flex flex-col gap-2 my-2">
          {flag
            ? <p>I help you to manage your activities after you login :)</p>
            : <p className="text-red-600">
                Please sign up first to manage your activities :)
              </p>}
          <input
            type="text"
            className="w-52 border border-black p-1 bg-transparent rounded-md"
            placeholder="username"
            value={username}
            onChange={handleUserNameChange}
          />
          <input
            type="password"
            className="w-52 border border-black p-1 bg-transparent rounded-md"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            className="w-24 bg-[#83e8b4] p-1 rounded-md"
            onClick={validateCredentials}
          >
            Login
          </button>
          <p>
            Don't have an account ?
            {' '}
            <Link to={'/signup'} className="underline">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;

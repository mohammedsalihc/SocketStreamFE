import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // 👁️ Eye icons
import { Login as LoginService,SetToken,GOOGLE_SIGN,PROFILE } from '../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/AuthActions';
function Login() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await LoginService({email,password})
      let token = res?.data?.token
      const profile =  await PROFILE(token)
      dispatch(setUser(profile?.data,token))
      SetToken(token)
      setTimeout(() => {
        toast.success("Welcome to SocketStream");
        navigate('/home');
      },0);
    } catch (err) {
      console.log(err)
      toast.error(err?.response?.data?.message || "Login failed");
    }
  };

  const handleGoogleResponse=async(response)=>{
    try{
        const token = response?.credential;
        const res = await GOOGLE_SIGN({token})
        SetToken(res?.data?.token)
        toast.success("Welcome back");
        navigate('/home');
    }catch(err){
        toast.error(err?.response?.data?.message || "google login failed");
    }
  }

  useEffect(() => {
    if (window.google && window.google.accounts?.id) {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("googleLoginDiv"),
        {
          theme: "outline",
          size: "large",
          type: "standard",
          width: "100%",
        }
      );
      window.google.accounts.id.disableAutoSelect();
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">SocketStream Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Sign In
        </button>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Create one
          </a>
        </p>
        <div className="my-4 text-center text-gray-500">OR</div>
        <div id="googleLoginDiv" className="w-full flex items-center justify-center " />
      </form>
    </div>
  );
}

export default Login;

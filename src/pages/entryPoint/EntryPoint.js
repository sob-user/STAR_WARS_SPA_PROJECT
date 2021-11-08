import {useState} from 'react';
import './EntryPoint.css'
import Loader from '../../components/loader/Loader';
import AppIndex from '../private/app/appIndex';
import Login from '../public/login/Login';

function EntryPoint() {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  const authStatus = auth ? <AppIndex /> : <Login />;

  return (
    <div className="EntryPoint">
      {loading ? <Loader setLoading={setLoading} setAuth={setAuth}/> : authStatus}
    </div>
  );
}

export default EntryPoint;

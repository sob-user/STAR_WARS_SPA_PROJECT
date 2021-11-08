import {useState} from 'react';


function EntryPoint() {
  const [logged, setLogged] = useState(false);

  const authenticated = "authenticated";
  const not_authenticated = "not_authenticated";

  return (
    <div className="EntryPoint">
      {logged ? authenticated : not_authenticated}
    </div>
  );
}

export default EntryPoint;

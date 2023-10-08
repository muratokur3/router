import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const {state}=useLocation();
  const [user, setUser] = useState(state);

  useEffect(() => {
    if(!user?.id)
    {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
    }
    
  }, [id,user]);
  return (
    <div>
      <h2>UserDetail</h2>
      
        {
            state && <pre>{JSON.stringify(state, null, 2)}</pre>
        }
      <Link to={`/users/${Number(id) <= 9 ? Number(id)+1 : 1}`}>sonraki Kullanıcı</Link>
    </div>
  );
}

export default UserDetail;

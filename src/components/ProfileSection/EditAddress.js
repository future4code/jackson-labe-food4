import React, {useEffect} from "react";
import { useHistory } from 'react-router-dom'

function EditAddress() {
  const history = useHistory()
  useEffect(() => {
    if(localStorage.getItem("token") === null) {
      history.push("/")
    }
  }, [])

  return <div>oi</div>;
}

export default EditAddress;

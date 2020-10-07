import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const useRequestData = (initialData, endpoint) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${endpoint}`, {
        headers: {
          auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im9hNnlRTm56RXN6YUlYbndMSEhOIiwibmFtZSI6IkRhbmllbCIsImVtYWlsIjoiZGFuQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTMxLjMxMS4xMTEtMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4geHh4eCBCcmF6LCAxNzM3IC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYwMTkyNTk5NX0.WSyb9hsFmfaTSu_icgzWzeUudwsSmbM0Bol9Ll7keUs',
        },
      })
      .then((response) => {
      
        setData(response.data.restaurants);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocorreu um erro na feed, tente novamente");
      });
  }, [endpoint]);

  return data;
};

export default useRequestData;

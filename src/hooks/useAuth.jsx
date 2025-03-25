import { useState } from "react";
import axios from "axios";
import qs from "qs"; 

export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("spotify_token") || null);

    const fetchToken = async () =>{ 
      if (token) {
        return token;
      }

          try {
            const data = qs.stringify({
              grant_type: "client_credentials",
              client_id: process.env.REACT_APP_CLIENT_ID,
              client_secret: process.env.REACT_APP_CLIENT_SECRET,
              scope: "user-library-read",
            });
      
            const response = await axios.post(
              process.env.REACT_APP_SPOTIFY_API_URL_TOKEN,
              data, 
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }
            );
      
            const newToken = response.data.access_token;
            setToken(newToken);
            localStorage.setItem("spotify_token", newToken);
            return newToken;
          } catch (err) {
            console.log("Error obtneniendo el token", err?.response ? err?.response?.data : err);
          } 
    };

  return  {token, fetchToken};
};
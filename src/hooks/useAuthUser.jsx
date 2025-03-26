import { useState } from "react";
import axios from "axios";
import qs from "qs"; 

export const useAuthUser = () => {
  const [token, setToken] = useState(localStorage.getItem("spotify_token_user") || null);


    const fetchTokenUser = async() =>{
      if (token) {
        return token;
      }

      try {
        const data = qs.stringify({
          grant_type: "authorization_code",
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          scope: "user-library-read",
          redirect_uri: 'https://example.com/callback',
          code: 'AQAp1UuVKIvUP-JSN5ttZD2CYpmPueMA2666nPRqNq29alJYx77lgv2h-gL6du9B5J0xGEK6j1wepa6kTyR7KdTa4CwyZQolSyklwVKKTq92uA-aoErrE2tgSQv94NG5O8DjRRR2aJn7wGzjMTVhc79UGaiD4uLYoBZ0fwDRWc_GZ4uTuVGAs8Xtb4zqcrIud3jZ'
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
        localStorage.setItem("spotify_token_user", newToken);
        return newToken
      } catch (err) {
        console.log("Error al obtener el token: " + err.message);
      } 
    }

  return {token, fetchTokenUser};
};
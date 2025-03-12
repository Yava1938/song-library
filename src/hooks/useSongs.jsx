import { useEffect, useState } from "react";
import { useSearch } from "./useSearch";

export const useSongs = () => {
  const [songs, setSongs] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const songList = [
        { title: 'Mi version de ti', artist: 'DAAZ', duration: "3:59" },
        { title: 'Orion', artist: 'Boza, Elena Rose', duration: "4:02" },
        { title: 'Motel California', artist: 'Sabino', duration:  "3:35"},
        { title: 'Nubia', artist: 'Esperón', duration:  "3:42"},
        { title: 'Me Rehúso', artist: 'Danny Ocean', duration: '3:25' },
        { title: 'Tiroteo', artist: 'Marc Seguí, Rauw Alejandro, Pol Granch', duration: '3:30' },
        { title: 'Desesperados', artist: 'Rauw Alejandro, Chencho Corleone', duration: '3:45' },
        { title: 'Luna', artist: 'Zoé', duration: '4:10' },
        { title: 'La Bachata', artist: 'Manuel Turizo', duration: '3:42' },
        { title: 'Amorfoda', artist: 'Bad Bunny', duration: '3:33' },
        { title: 'Te Vi', artist: 'Piso 21, Micro TDH', duration: '3:55' },
        { title: 'Adiós', artist: 'Sebastián Yatra', duration: '3:12' },
        { title: 'Tacones Rojos', artist: 'Sebastián Yatra', duration: '2:59' },
        { title: 'Pareja del Año', artist: 'Sebastián Yatra, Myke Towers', duration: '3:33' },
        { title: 'Diles', artist: 'Bad Bunny, Ozuna, Farruko, Arcangel, Ñengo Flow', duration: '3:53' },
        { title: 'Fantasías', artist: 'Rauw Alejandro, Farruko', duration: '3:30' },
        { title: 'Otro Trago', artist: 'Sech, Darell', duration: '3:45' },
        { title: 'Aullando', artist: 'Wisin & Yandel, Romeo Santos', duration: '3:30' },
        { title: 'Tutu', artist: 'Camilo, Pedro Capó', duration: '3:26' },
        { title: '11 PM', artist: 'Maluma', duration: '2:57' },
        { title: 'Pa\' Olvidarme de Ella', artist: 'Christian Nodal, Piso 21', duration: '3:22' },
        { title: 'Soltera (Remix)', artist: 'Lunay, Daddy Yankee, Bad Bunny', duration: '4:25' },
        { title: 'Baila Baila Baila', artist: 'Ozuna', duration: '3:38' },
        { title: 'La Canción', artist: 'J Balvin, Bad Bunny', duration: '4:02' },
        { title: 'Si Estuviésemos Juntos', artist: 'Bad Bunny', duration: '2:48' },
        { title: 'Nada', artist: 'Tainy, Lauren Jauregui, C. Tangana', duration: '3:30' },
        { title: 'Calma (Remix)', artist: 'Pedro Capó, Farruko', duration: '3:59' },
        { title: 'Indeciso', artist: 'Reik, J Balvin, Lalo Ebratt', duration: '3:36' },
        { title: 'Con Calma', artist: 'Daddy Yankee, Snow', duration: '3:13' },
        { title: 'China', artist: 'Anuel AA, Daddy Yankee, Karol G, Ozuna, J Balvin', duration: '5:01' },
        { title: 'Bonita', artist: 'Jowell & Randy, J Balvin', duration: '3:17' },
        { title: 'Porfa', artist: 'Feid, Justin Quiles', duration: '3:51' },
        { title: 'No Me Conoce (Remix)', artist: 'Jhay Cortez, J Balvin, Bad Bunny', duration: '5:02' },
        { title: 'Mia', artist: 'Bad Bunny, Drake', duration: '3:30' },
        { title: 'Dákiti', artist: 'Bad Bunny, Jhay Cortez', duration: '3:25' },
        { title: 'TKN', artist: 'Rosalía, Travis Scott', duration: '2:09' },
        { title: 'Relación (Remix)', artist: 'Sech, Daddy Yankee, J Balvin, Rosalía, Farruko', duration: '4:21' },
        { title: 'Caramelo', artist: 'Ozuna', duration: '3:29' },
        { title: 'Favorito', artist: 'Camilo', duration: '3:15' },
        { title: 'Tattoo (Remix)', artist: 'Rauw Alejandro, Camilo', duration: '3:39' },
        { title: 'Hawái', artist: 'Maluma', duration: '3:19' },
        { title: 'ADMV', artist: 'Maluma', duration: '3:07' },
        { title: 'La Jeepeta (Remix)', artist: 'Nio García, Anuel AA, Myke Towers, Brray, Juanka', duration: '5:04' },
        { title: 'Aloha', artist: 'Maluma, Rauw Alejandro, Beéle', duration: '3:55' },
        { title: 'Colocao', artist: 'Nicki Nicole', duration: '2:58' },
        { title: 'Mamichula', artist: 'Trueno, Nicki Nicole, Bizarrap', duration: '3:18' },
        { title: 'Ella No Es Tuya (Remix)', artist: 'Rochy RD, Myke Towers, Nicki Nicole', duration: '3:55' },
        { title: 'Fiel', artist: 'Los Legendarios, Wisin, Jhay Cortez', duration: '3:48' },
        { title: 'Perrito', artist: 'Maluma', duration: '2:50' },
        { title: 'Perfecta', artist: 'Reik, Maluma', duration: '3:58' },
        { title: 'Sobrio', artist: 'Maluma', duration: '3:49' },
        { title: 'Telepatía', artist: 'Kali Uchis', duration: '2:42' },
        { title: 'Pareja Del Año', artist: 'Sebastián Yatra, Myke Towers', duration: '3:33' },
        { title: 'Pareja Que No Fue', artist: 'Danny Ocean', duration: '3:12' },
        { title: 'Bajo La Mesa', artist: 'Morat, Sebastián Yatra', duration: '3:42' },
        { title: 'La Noche De Anoche', artist: 'Bad Bunny, Rosalía', duration: '3:23' },
        { title: 'Yonaguni', artist: 'Bad Bunny', duration: '3:27' },
        { title: 'Botella Tras Botella', artist: 'Gera MX, Christian Nodal', duration: '3:18' },
        { title: 'Vacaciones', artist: 'Luis Fonsi, Manuel Turizo', duration: '3:33' },
        { title: 'Millonario', artist: 'Blessd, Maluma, Kapla y Miky', duration: '3:42' },
        { title: 'Ojitos Lindos', artist: 'Bad Bunny, Bomba Estéreo', duration: '4:19' },
        { title: 'Enséñame a Bailar', artist: 'Bad Bunny', duration: '2:51' },
        { title: 'Efecto', artist: 'Bad Bunny', duration: '3:34' },
        { title: 'Ojos Marrones', artist: 'Lasso', duration: '3:29' },
        { title: 'Dame Un Break', artist: 'Rauw Alejandro', duration: '2:53' },
        { title: 'Wanda', artist: 'Rels B', duration: '3:12' },
        { title: 'Como Dormiste?', artist: 'Rels B', duration: '2:39' },
        { title: 'Pa’ Que Retozen', artist: 'Tego Calderón', duration: '3:46' },
        { title: 'Poblado (Remix)', artist: 'Crissin, Totoy El Frio, Natan & Shander, Karol G, J Balvin, Nicky Jam', duration: '4:23' },
        { title: 'En La Intimidad', artist: 'Jay Wheeler, Lenny Tavárez, Brytiago', duration: '3:21' },
        { title: 'Te Felicito', artist: 'Shakira, Rauw Alejandro', duration: '2:52' },
        { title: 'Provenza', artist: 'Karol G', duration: '3:28' }
    ];

    setSongs(songList);
    console.log("La app se ha cargado correctamente");
  }, []);

  const toggleFavorite = (song) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.title === song.title)
        ? prevFavorites.filter((fav) => fav.title !== song.title)
        : [...prevFavorites, song]
    );
  };

  const { query, filteredData, handleChange } = useSearch(songs);

  return { songs, favorites, toggleFavorite, setFavorites, query, filteredData, handleChange };
  //return { songs, favorites, toggleFavorite, query, filteredData, handleChange };
};
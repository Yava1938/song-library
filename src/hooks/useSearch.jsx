import { useState, useEffect } from 'react';

export const useSearch = (data) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (query.trim() === '') {
      setFilteredData([]);
      return;
    }

    const filtered = data.filter(song =>
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered);
  }, [query, data]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return {
    query,
    filteredData,
    handleChange
  };
};
import {useState, useEffect} from 'react';

export const useFetchPeople = (url) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
      // fetch data from api on boot
      // "https://randomuser.me/api/?results=100&inc=name"
      fetch(url)
        .then(res => res.json())
        .then(res => {
          setPeople(res.results);
        })
        .catch(err => console.log(err))
  
    }, []);

    return [people];
}
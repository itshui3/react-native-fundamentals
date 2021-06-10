import {useState, useEffect} from 'react';
import _ from 'lodash';

export const useFetchPeople = (url) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
      // fetch data from api on boot
      // "https://randomuser.me/api/?results=100&inc=name"
      const timeout = setTimeout(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => {
          setPeople(res.results.map((person) => {

            const newPerson = {
                ...person,
                key: _.uniqueId()
            }

            return newPerson;
          }));
        })
        .catch(err => console.log(err))
      }, 2000)

      return () => clearTimeout(timeout);
  
    }, []);

    return [people];
}
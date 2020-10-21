export const getCharacters = () => {
  return fetch('https://breakingbadapi.com/api/characters')
    .then(res => res.json());
};

export const getCharacter = id => {
  return fetch(`https://breakingbadapi.com/api/characters/${id}`)
    .then(res => res.json());
};

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

//   // Fetch with .then
// const generateJoke = () => {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       console.log(data.joke);
//       jokeEl.innerHTML = data.joke;
//     });
// };

const generateJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
};

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

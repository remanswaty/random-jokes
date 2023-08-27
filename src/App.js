import jokeImg from './joke.png';
import { useEffect, useState, useRef } from 'react';

function App() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [randomJoke, setRandomJoke] = useState('');
  const categoryRef = useRef(null);
  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setCategoriesList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    async function getRandomJoke(){
      await fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => setRandomJoke(data.value))
      .catch(error => console.error('Error fetching data:', error));
    }

      getCategories();
      getRandomJoke();
  }, [])

  const handleCategoryChange = () => {
    // if(categoryRef.current){
      setCurrentCategory(categoryRef.current.value);
      console.log(`current: ${categoryRef.current.value}`)
      console.log(`current state: ${currentCategory}`)
    // } https://api.chucknorris.io/jokes/random?category=food
  }

  const  getHandle = async () => {
    await fetch(`https://api.chucknorris.io/jokes/random?category=${categoryRef.current.value}`)
      .then(response => response.json())
      .then(data => setRandomJoke(data.value))
      .catch(error => console.error('Error fetching data:', error));
  }

  return (

    <div className="">
      {/* Header */}
      <div className="bg-black text-white h-20 py-4 pl-5">
        <h1 className="text-2xl md:text-4xl font-kurale">Chuck Norris Jokes</h1>
      </div>

      {/* <button onClick={console.log(`current cat: ${currentCategory}`)}>get current cat</button> */}

      {/* Search Section */}
      <div className='md:flex'>
        <div className="bg-orange-600 flex justify-center flex flex-col items-center h-full md:h-[100vh] space-y-4 md:p-20 p-5 md:flex-2">

          <select className="w-60 h-11 rounded-lg font-mono px-4" type="list" ref={categoryRef} onChange={handleCategoryChange}>
              {categoriesList.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
              
          </select>

        
          <button className="w-40 h-11 rounded-lg bg-black text-white font-mono" onClick={getHandle}>Search</button>
          <p className="px-10 font-league text-5xl md:hidden pt-16">{randomJoke}</p>
          <img src={jokeImg} alt="Joke Image" className="max-w-full max-h-full h-96 pt-16"></img>
        </div>

        <div className="hidden md:block md:flex-1 bg-[#EEE] md:flex md:justify-center md:items-center h-[100vh]">
          <p className="px-10 font-league text-5xl">{randomJoke}</p>
        </div>

      </div>

    </div>
  );
}

export default App;

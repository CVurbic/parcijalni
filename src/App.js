
import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import Results from './components/Results';
import axios from 'axios';
import { useEffect } from 'react';


function App() {
  const [userData, setData] = useState();
  const [catFacts, setCatFacts] = useState();
  const [userRepos, setUserRepos] = useState();
  const userUrl = "https://api.github.com/users/"

  useEffect(() => {
    console.log(userData)
    if (userData) fetchUserRepos()
    // eslint-disable-next-line
  }, [userData])
  useEffect(() => {
    fetchCatFacts()
    // eslint-disable-next-line
  }, [])
  async function fetchUserData(user) {
    try {
      const response = await axios.get(userUrl + user);
      console.log(response);
      const data = response.data;
      console.log(data)
      setData({
        name: data.name,
        location: data.location,
        bio: data.bio,
        avatar_url: data.avatar_url,
        reposUrl: data.repos_url
      })
    } catch (error) {
      console.error('There was a problem fetching the user data:', error);
    }
  }

  async function fetchUserRepos() {
    const response = await axios.get(userData.reposUrl)
    try{
      const data = response.data;
      const repos = data.map(repo => ({
        id: repo.id,
        name: repo.name
    }));
    setUserRepos(repos)
      console.log(repos)

    }catch (error){
      console.error('There was a problem fetching the user repos:', error);

    }
  }

  async function fetchCatFacts(){
    try {
      const response = await axios.get("https://catfact.ninja/facts");
      console.log(response);
      const data = response.data;
      console.log(data.data)
      setCatFacts(data.data)
    } catch (error) {
      console.error('There was a problem fetching the user data:', error);
    }
  }


  const handleUser = (user) => {
    fetchUserData(user)
  }

  function handleResetState(){
    setData(undefined)
    setUserRepos(undefined)
  }
  return (
    <div className="App">
    {!userData &&
      <InputForm
        handleUser={handleUser}
      />}
      {/* userData && userRepos && */catFacts &&
        <Results
          /* userData={userData}
          userRepos={userRepos} */
          catFacts={catFacts}
          handleResetState={handleResetState}
        />
      }
    </div>
  );
}

export default App;


import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import Results from './components/Results';
import axios from 'axios';
import { useEffect } from 'react';


function App() {
  const [userData, setData] = useState();
  const [userRepos, setUserRepos] = useState();
  const userUrl = "https://api.github.com/users/"

  useEffect(() => {
    if (userData) fetchUserRepos()
    // eslint-disable-next-line
  }, [userData])


  async function fetchUserData(user) {
    try {
      const response = await axios.get(userUrl + user);
      const data = response.data;
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
    try {
      const data = response.data;
      const repos = data.map(repo => ({
        id: repo.id,
        name: repo.name
      }));
      setUserRepos(repos)

    } catch (error) {
      console.error('There was a problem fetching the user repos:', error);

    }
  }





  function handleResetState() {
    setData(undefined)
    setUserRepos(undefined)
  }
  return (
    <div className="App">
      {!userData &&
        <InputForm
          fetchUserData={fetchUserData}
        />}
      {userData && userRepos &&
        <Results
          userData={userData}
          userRepos={userRepos}
          handleResetState={handleResetState}
        />
      }
    </div>
  );
}

export default App;

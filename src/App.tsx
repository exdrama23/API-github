import axios from "axios"
import {useState} from 'react'
import './App.css'

type GithubData = {
  name:string;
  bio:string;
  avatar_url:string
}

function App() {
  const [username,setUsername] = useState("")
  const [name, setName] = useState("loading...")
  const [bio, setBio] = useState("loading...")
  const [avatar_url, setAvatarURL] = useState("loading...")



    const handlePesquisa = () => {
      axios.get<GithubData>(`https://api.github.com/users/${username}`).then((response) => {
      setName(response.data.name)
      setBio(response.data.bio)
      setAvatarURL(response.data.avatar_url)
    })
  }

  return (
   <div className="container-geral">
   
    <div className="container">
   
      <header>
      </header>
        <main>
          <div className="form">
            <h1>𝙲𝚘𝚗𝚜𝚞𝚖𝚒𝚗𝚍𝚘 𝙰𝙿𝙸 𝚍𝚘 𝙶𝚒𝚝𝚑𝚞𝚋</h1>
            <input type="text" placeholder="Digite o usuario" onChange={(e) =>setUsername(e.target.value)}/>
            <button onClick={handlePesquisa}>𝓒𝓸𝓷𝓼𝓾𝓵𝓽𝓪𝓻</button>
          </div>
          <div className="conteudo">
            <div>
              <img src={avatar_url} alt="" />
              <h1>{name}</h1>
              <p>{bio}</p>
            </div>
          </div>
        </main>
      </div> 
   </div>
   
  )
}

export default App

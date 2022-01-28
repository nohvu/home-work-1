import React from "react";
import axios from "axios";
import { IUser } from "./interfaces/IUser";

function App() {
  const [user, setUser] = React.useState<IUser>({} as IUser);
  const [userName, setUserName] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [status, setStatus] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`https://api.github.com/users/${window.location.search.split("=")[1]}`)
      .then((res) => {
        setUser(res.data);
        setStatus(true);
      })
      .catch((e) => console.log(e.response));
  }, []);

  const getUser = async (name: string) => {
    window.history.pushState(null, document.title, `${window.location.pathname}?login=${userName}`);
    try {
      setIsLoading(true);
      const { data } = await axios.get(`https://api.github.com/users/${name}`);
      if (data.message) {
        throw new Error(data.message);
      }
      setUser(data);
      setStatus(true);
    } catch (err) {
      setStatus(false);
      alert("Ошибка получения данных. Пользователь недоступен. Попробуйте еще раз!");
    } finally {
      setIsLoading(false);
    }
  };

  const addUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUser = event.target.value;
    setUserName(newUser);
  };

  return (
    <div id="app">
      <div className="app-container">
        <form className="app-form">
          <input
            onChange={addUserName}
            value={userName}
            type="text"
            className="app-input"
            placeholder="Укажите GitHub-аккаунт"
          />
          <button disabled={isLoading} onClick={() => getUser(userName)} className="app-form_btn">
            Найти
          </button>
          {isLoading && <p>Загрузка...</p>}
        </form>
        {status && (
          <div className="app-user">
            <div className="app-user_info">
              <div className="app-user_image">
                <img width={100} height={100} src={user.avatar_url} alt="" />
              </div>
              <div className="app-user_data">
                <h1 className="app-user_name">
                  {user.name}
                  <span>@{user.login.toLowerCase()}</span>
                </h1>
                <p className="app-user_about">{user.bio}</p>
              </div>
            </div>
            <ul className="app-user_stats">
              <li className="app-user_stats-item">
                <p>Репозитории:</p>
                <span>{user.public_repos}</span>
              </li>
              <li className="app-user_stats-item">
                <p>Подписчиков:</p>
                <span>{user.followers}</span>
              </li>
              <li className="app-user_stats-item">
                <p>Подписки:</p>
                <span>{user.following}</span>
              </li>
            </ul>
            <ul className="app-user_location">
              <li className="app-user_location-item">{user.location}</li>
              <li className="app-user_location-item">
                <a href={user.blog}>{user.blog}</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;

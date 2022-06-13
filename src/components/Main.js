import { useEffect, useState } from "react";
import "../index.css";
import api from "../utils/Api";
import Card from './Card';

const Main = (props) => {
  /*
  function handleCardClick(card) {
    setBigPic(card);
  }
  */
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescribtion] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  const [id, setID] = useState('');


  useEffect(() => {
    Promise.all([
      //в Promise.all передаем массив промисов которые нужно выполнить
      api.getDataUser(),
      api.getDataInitialCards(),
    ])
      .then(([profile, cards]) => {
        setUserName(profile.name);
        setUserDescribtion(profile.about);
        setUserAvatar(profile.avatar);
        setCards(cards);
        setID(profile._id);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__box">
          <div className="profile__photo-overlay js-new-avatar-form">
            <img
              className="profile__photo"
              style={{ backgroundImage: `url(${userAvatar})` }}
              src={userAvatar}
              alt="Жак-Ив Кусто"
              onClick={props.onEditAvatar}
            />
            <button className="profile__avatar"></button>
          </div>

          <div className="profile__text">
            <div className="profile__info">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__edit-button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section
        className="elements"
        aria-label="Коллекция фото с подписями и кнопкой Лайк"
      >
        <ul className="elements__box">
          {cards.map((card, _id) => <Card card={card} onCardClick={props.onCardClick} key={card._id}/>
          )}
        </ul>
      </section>
    </main>
  );
};
export default Main;

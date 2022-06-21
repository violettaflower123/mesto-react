import { useState, useEffect, useContext } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { UserContext } from "../context/UserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";


function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getDataInitialCards()
      .then((cards) => {
        setCards(cards);
        //setID(profile._id);
      })
      .catch((err) => alert(err));
  }, []);

  const [currentUser, setCurrentUser] = useState({ name: "", about: "" });

  //получить данные о пользователе с сервера
  useEffect(() => {
    api
      .getDataUser()

      .then((profile) => {
        setCurrentUser(profile);
      })
      .catch((err) => alert(err));
  }, []);

  const [isEditAvatarPopupOpen, setOpenAvatar] = useState(false);
  const [isEditProfilePoupOpen, setOpenProfile] = useState(false);
  const [isAddPlacePopupOpen, setOpenPlace] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  //открытие попапов
  function handleEditAvatarClick() {
    setOpenAvatar(true);
  }

  function handleEditProfileClick() {
    setOpenProfile(true);
  }

  function handleAddPlaceClick() {
    setOpenPlace(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  //закрытие попапов
  function closeAllPopups() {
    setOpenAvatar(false);
    setOpenPlace(false);
    setOpenProfile(false);
    setSelectedCard(null);
  }

  //обновление данных о пользователе
  function handleUpdateUser(data) {
    api
      .changeUser(data)
      .then((profile) => {
        setCurrentUser(profile);
      })
      .catch((err) => alert(err))
      .finally(() => closeAllPopups());
  }

  //обновление аватарки
  function handleUpdateAvatar(data) {
    api
      .changeAvatar(data)
      .then((profile) => {
        setCurrentUser(profile);
      })
      .catch((err) => alert(err))
      .finally(() => closeAllPopups());
  }

  //добавление новой карточки
  function handleAddNewCard(data) {
    api
      .addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => alert(err))
      .finally(() => {
        closeAllPopups()
  });
  }

  //ставим лайки
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.toggleLike(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      
    })
    .catch((err) => alert(err))
  } 
  
    //удаление карточки
    function handleCardDelete(card) {
      // Снова проверяем, есть ли уже лайк на этой карточке
      const isOwn = card.owner._id === currentUser._id;
      
      // Отправляем запрос в API и получаем обновлённые данные карточки
      api.deleteCard(card._id).then(() => {
        setCards((state) => state.filter((c) => c._id === card._id ? '' : c));
      })
      .catch((err) => alert(err))
    } 

  return (
    <UserContext.Provider value={currentUser}>
      <div className="app">
        <div className="page__content">
          <>
            <Header />

            <Main
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />

            <Footer />
          </>

          <EditProfilePopup
            isOpen={isEditProfilePoupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddNewPlace={handleAddNewCard}
          />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          <PopupWithForm
            name="delete"
            title="Вы уверены?"
            buttonText="Да"
            extraClass="popup__form_type_delete"
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;

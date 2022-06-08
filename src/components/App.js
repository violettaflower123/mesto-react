//import logo from "../images/logo.png";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  
  return (
    <div className="app">
      <div className="page__content">
        <>
          <Header />

          <Main />

          <Footer />
        </>

        <PopupWithForm
          name="name"
          title="Редактировать профиль"
          buttonText="Сохранить"
        >
          <fieldset className="popup__input-container">
            <input
              required
              id="name"
              type="text"
              placeholder="Введите имя"
              name="name"
              className="popup__input popup__input_el_heading"
              minLength="2"
              maxLength="40"
            />
            <span
              className="popup__error popup__error_visible"
              id="name-error"
            ></span>

            <input
              required
              id="job"
              type="text"
              placeholder="Введите профессию"
              name="about"
              className="popup__input popup__input_el_subheading"
              minLength="2"
              maxLength="200"
            />
            <span
              className="popup__error popup__error_visible"
              id="job-error"
            ></span>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm name="place" title="Новое место" buttonText="Сохранить">
          <fieldset className="popup__input-container">
            <input
              required
              id="place"
              type="text"
              placeholder="Название"
              name="name"
              className="popup__input popup__item-place"
              minLength="2"
            />
            <span
              className="popup__error popup__error_visible"
              id="place-error"
            ></span>

            <input
              id="link"
              type="url"
              required
              placeholder="Ссылка на картинку"
              name="link"
              className="popup__input popup__item-link"
            />
            <span
              className="popup__error popup__error_visible"
              id="link-error"
            ></span>
          </fieldset>
        </PopupWithForm>

        <ImagePopup />

        <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" extraClass="popup__form_type_delete"/>

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          extraClass="popup__form_type_avatar"
        >
          <fieldset class="popup__input-container">
            <input
              required
              id="avatar"
              type="url"
              placeholder="Ссылка на аватар"
              name="avatar"
              className="popup__input popup__item-avatar"
              minLength="2"
            />
            <span
              className="popup__error popup__error_visible"
              id="avatar-error"
            ></span>
          </fieldset>
        </PopupWithForm>
      </div>
    </div>
  );
}

export default App;

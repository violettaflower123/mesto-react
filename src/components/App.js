import logo from "../images/logo.png";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <div className="app">
      <div className="page__content">
        <Header />

        <Main />

        <Footer />

        <section className="popup popup_type_name">
          <form className="popup__form" name="form-name" noValidate>
            <button
              className="popup__close popup__close_name"
              type="button"
            ></button>
            <div className="popup__main-container">
              <h2 className="popup__heading">Редактировать профиль</h2>
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

              <button
                type="submit"
                className="popup__button popup__button_disabled"
              >
                Сохранить
              </button>
            </div>
          </form>
        </section>

        <section className="popup popup_type_place">
          <form
            className="popup__form popup__form_place"
            name="form-place"
            noValidate
          >
            <button
              className="popup__close popup__close_place"
              type="button"
            ></button>
            <div className="popup__main-container">
              <h2 className="popup__heading">Новое место</h2>
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

              <button
                type="submit"
                className="popup__button popup__button_place-add popup__button_disabled"
              >
                Сохранить
              </button>
            </div>
          </form>
        </section>

        <section
          className="popup popup_type_image"
          aria-label="Модальное окно с увеличенным изображением"
        >
          <div className="popup__container-image">
            <button
              className="popup__close popup__close_image"
              type="button"
            ></button>
            <img className="popup__big-image" src="#" alt="Изображение" />
            <p className="popup__text-fullscreen"></p>
          </div>
        </section>

        <section
          className="popup popup_type_delete"
          aria-label="Подтверждение удаления карточки"
        >
          <form
            className="popup__form popup__form_type_delete"
            name="form-delete"
            noValidate
          >
            <button className="popup__close" type="button"></button>
            <div className="popup__main-container">
              <h2 className="popup__heading popup__heading_type_delete-form">
                Вы уверены?
              </h2>

              <button
                type="submit"
                className="popup__button popup__button_type_delete-form"
              >
                Да
              </button>
            </div>
          </form>
        </section>

        <section
          className="popup popup_type_new-avatar"
          aria-label="Добавление нового аватара пользователя"
        >
          <form
            className="popup__form popup__form_type_new-avatar"
            name="form-new-avatar"
            noValidate
          >
            <button className="popup__close" type="button"></button>
            <div className="popup__main-container">
              <h2 className="popup__heading popup__heading_type_new-avatar">
                Обновить аватар
              </h2>

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

              <button
                type="submit"
                className="popup__button popup__button_type_new-avatar"
              >
                Сохранить
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default App;

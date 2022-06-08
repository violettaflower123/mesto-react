import '../index.css';

const Main = () => {
  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_name').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_place').classList.add('popup_opened');
  }

    return (
        <main className="content">
          <section className="profile">
            <div className="profile__box">
              <div className="profile__photo-overlay js-new-avatar-form">
                <img
                  className="profile__photo"
                  src="<%=require('./images/image.jpg')%>"
                  alt="Жак-Ив Кусто"
                  onClick = {handleEditAvatarClick}
                />
                <button className="profile__avatar"
                >
                </button>
              </div>

              <div className="profile__text">
                <div className="profile__info">
                  <h1 className="profile__title">Жак-Ив Кусто</h1>
                  <button className="profile__edit-button"
                  onClick = {handleEditProfileClick}
                  ></button>
                </div>
                <p className="profile__subtitle">Исследователь океана</p>
              </div>
            </div>
            <button className="profile__add-button"
            onClick = {handleAddPlaceClick}
            ></button>
          </section>

          <section
            className="elements"
            aria-label="Коллекция фото с подписями и кнопкой Лайк"
          >
            <ul className="elements__box"></ul>
          </section>
        </main>
    )
}
export default Main;
function Main() {
    return (
        <main className="content">
          <section className="profile">
            <div className="profile__box">
              <div className="profile__photo-overlay js-new-avatar-form">
                <img
                  className="profile__photo"
                  src="<%=require('./images/image.jpg')%>"
                  alt="Жак-Ив Кусто"
                />
                <button className="profile__avatar"></button>
              </div>

              <div className="profile__text">
                <div className="profile__info">
                  <h1 className="profile__title">Жак-Ив Кусто</h1>
                  <button className="profile__edit-button"></button>
                </div>
                <p className="profile__subtitle">Исследователь океана</p>
              </div>
            </div>
            <button className="profile__add-button"></button>
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
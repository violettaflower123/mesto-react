const ImagePopup = () => {
    return (
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
    )
}

export default ImagePopup;
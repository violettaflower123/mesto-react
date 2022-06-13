const ImagePopup = ({ card, onClose }) => {
    return (
        <section
          className={`popup popup_type_image ${card && 'popup_opened'}`}
          aria-label="Модальное окно с увеличенным изображением"
        >
          <div className="popup__container-image">
            <button
              className="popup__close popup__close_image"
              type="button"
              onClick={onClose}
            ></button>
            <img className="popup__big-image" src={card ? card.link : ''} alt={card ? card.name : ''} />
            <p className="popup__text-fullscreen">{card ? card.name : ''}</p>
          </div>
        </section>
    )
}

export default ImagePopup;
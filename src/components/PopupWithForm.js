const PopupWithForm = (props) => {
  return <section className={`popup popup_type_${props.name}`}>
      <form className={`popup__form ${props.extraClass}`} name={`form-${props.name}`} noValidate>
        <button
          className="popup__close popup__close_name"
          type="button"
        ></button>
        <div className="popup__main-container">
          <h2 className="popup__heading">{props.title}</h2>

          {props.children}
          <button
            type="submit"
            className="popup__button popup__button_disabled"
          >
            {props.buttonText}
          </button>
        </div>
      </form>
    </section>

}

export default PopupWithForm;

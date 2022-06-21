import PopupWithForm from "./PopupWithForm";
import { useRef, useState } from "react";
import React from "react";

const EditAvatarPopup = (props) => {

  const [avatar, setAvatar] = useState('');
  const textInput = useRef();

  function handleChangeAvatar () {
    setAvatar(textInput.current.value);
  }

//что происходит при сабмите
  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: textInput.current.value,
    })
  } 

return (
    <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          extraClass="popup__form_type_avatar"
          isOpen={props.isOpen}
          onClose={props.onClose}
          onSubmit={handleSubmit}
        >
          <fieldset class="popup__input-container">
            <input
              ref={textInput}
              required
              id="avatar"
              type="url"
              placeholder="Ссылка на аватар"
              name="avatar"
              className="popup__input popup__item-avatar"
              minLength="2"
              onChange={handleChangeAvatar}
  
            />
            <span
              className="popup__error popup__error_visible"
              id="avatar-error"
            ></span>
          </fieldset>
        </PopupWithForm>
)
}

export default EditAvatarPopup;
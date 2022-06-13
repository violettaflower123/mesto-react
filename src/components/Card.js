const Card = ({card, onCardClick}) => {
    return (
            <li className="element">
    <button className="element__trash"></button>
    <img className="element__image" alt="Изображение" src={card.link} onClick={_ => onCardClick(card)}/>

    <div className="element__info">
      <h2 className="element__text">{card.name}</h2>
      <button className="element__like"></button>
    </div>
  </li>
    )
}

export default Card;
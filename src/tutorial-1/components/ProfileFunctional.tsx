import React from 'react';
import {IProfile, IDateOptions} from '../interfaces/Profile';


export const ProfileFunc: React.FC<IProfile> = (props) => {
  const options: IDateOptions = {day: 'numeric', month: 'long', year: 'numeric'};
  return (
    <div className="profile-container">
      <h1>Привет, <b>{props.name.split(" ")[0]}!</b></h1>
      <p>Дата регистрации: {props.registredAt.toLocaleDateString('ru-RU', options)}</p>
    </div>
  )
}
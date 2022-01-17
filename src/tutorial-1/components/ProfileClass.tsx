import React from 'react';
import {IProfile, IDateOptions} from '../interfaces/Profile';

export class ProfileClass extends React.Component<IProfile, IDateOptions> {
  render() {
    const options: IDateOptions = {day: 'numeric', month: 'long', year: 'numeric'};
    return (
      <div className="profile-container">
      <h1>Привет, <b>{this.props.name}!</b></h1>
      <p>Дата регистрации: {this.props.registredAt.toLocaleDateString('ru-RU', options)}</p>
    </div>
    )
}
}
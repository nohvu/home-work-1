import React from 'react';

export const Form: React.FC = () => {

  let email: string = "";
  let password: string = "";

  function formChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.name === "email") {
      email = event.target.value
    } else if (event.target.name === "password") {
      password = event.target.value;
    }
  }
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if ( !email.trim() || !password.trim()) {
      alert('Enter your auth data!')
    } else {
      console.log( {email, password} );
      email = '';
      password = '';
      event.target.reset();
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input onChange={formChange} className="form_email" type="text" name="email" placeholder="E-mail"/>
        <input onChange={formChange} className="form_password" type="password" name="password" placeholder="Пароль"/>
        <button className="form_btn" type="submit"><b>Войти</b></button>
      </form>
    </div>
  )
}
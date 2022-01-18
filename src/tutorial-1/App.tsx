import React from 'react';
import {ProfileFunc} from './components/ProfileFunctional';
import { ProfileClass } from './components/ProfileClass';

function App() {
  return (
    <>
    <ProfileFunc name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} /> 
    <ProfileClass name="Пупа Васькин" registredAt={new Date(2021, 5, 30)} />
    </>
  )
  }
  export default App
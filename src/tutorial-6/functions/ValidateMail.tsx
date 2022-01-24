import React from "react";

export function ValidateEmails(email: string) {
  const emailList = email.split(",");
  for (let i = 0; i < emailList.length; i++) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(emailList[i]);
  }
}

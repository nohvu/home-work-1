import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Messages } from "./Messages";
import { IComm } from "../interfaces/IComm";
import { ValidateEmails } from "../functions/ValidateMail";

export const Form = () => {
  const [comments, setComments] = React.useState<Array<IComm>>([]);
  const [name, setName] = React.useState<string>("");
  const [mail, setMail] = React.useState<string>("");
  const [comm, setComm] = React.useState<string>("");
  const arr: Array<IComm> = [...JSON.parse(localStorage.getItem("comments") || "{}")];

  const addName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const addMail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };
  const addComm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComm(event.target.value);
  };
  const addUser = () => {
    const sendDate: string = new Date().toLocaleDateString("ru-Ru", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    const obj: IComm = {
      fullName: name,
      email: mail,
      createdAt: sendDate,
      text: comm,
    };
    name.trim() ? name.trim() : alert("Введите имя");
    ValidateEmails(mail) ? mail.trim() : alert("Введите корректный email");
    comm.trim() ? comm.trim() : alert("Оставьте комментарий");

    name.trim() && ValidateEmails(mail) && comm.trim() && setComments((prev) => [...prev, obj]);
    setName("");
    setMail("");
    setComm("");
  };
  const deleteComment = (index: number) => {
    setComments((prev) => prev.filter((_, i) => i !== index));
  };

  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  React.useEffect(() => {
    setComments(arr);
  }, []);

  return (
    <div className="call-form">
      <div className="output-form">
        <h2>Отзывы:</h2>
        <div className="mess">
          {comments.map((item, i) => (
            <Messages key={i} index={i} user={item} removeComm={deleteComment} />
          ))}
        </div>
      </div>
      <div className="input-form">
        <h2>Обратная связь:</h2>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "45ch" },
          }}
          noValidate
          autoComplete="off">
          <TextField
            onChange={addName}
            value={name}
            type="text"
            id="outlined-basic"
            label="Имя"
            variant="outlined"
          />
          <TextField
            onChange={addMail}
            value={mail}
            type="email"
            id="outlined-basic email"
            label="Почта"
            variant="outlined"
          />
          <TextField
            onChange={addComm}
            value={comm}
            type="text"
            id="outlined-basic"
            label="Текст..."
            variant="outlined"
          />
          <Button onClick={addUser} variant="contained">
            Отправить
          </Button>
        </Box>
      </div>
    </div>
  );
};

import React from "react";
import { Nav, Navbar, Row, Col, Card } from "react-bootstrap";

function App() {
  const { pathname } = window.location;
  const pathArr: Array<string> = pathname.split("/");
  const id: string = pathArr[pathArr.length - 1];
  return (
    <div className="App">
      <header>
        <h2>
          <a href="/">React Blog</a>
        </h2>
        <Nav variant="pills" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link eventKey="/home" href="/">
              Главная
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/home" href="/about">
              Обо мне
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/home" href="/profile">
              Профиль
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      {pathname === "/" && (
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150x150" />
              <Card.Body>
                <Card.Title>
                  <a href="/post/1">Card title</a>
                </Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      {
        /* ТУТ ДОПИСАТЬ РОУТ НА ПОЛНУЮ ЗАПИСЬ */
        pathname.includes("/post/") && (
          <div>
            <h1>Статья №{id}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio fuga
              animi aliquam sit id veritatis, doloribus ducimus quas, dignissimos non minima quia
              amet possimus? Impedit nemo ducimus fuga rem!
            </p>
            <a href="/">
              <button>Назад</button>
            </a>
          </div>
        )
      }
      {pathname === "/about" && (
        <Card>
          <Card.Body>Это мой личный сайт!</Card.Body>
        </Card>
      )}
      <br />
      <Navbar bg="light" style={{ paddingLeft: 20 }}>
        <Navbar.Brand href="#home">My site (c) 2021</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;

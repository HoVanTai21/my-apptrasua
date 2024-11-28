import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Views/logotrasua.png'
import '../Views/App.scss'
import React from 'react';
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid >
        {/* <Navbar.Brand href="#">Navbar scrollooo</Navbar.Brand> */}
        <div className="Logo "></div>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="thanhtruoc me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Trang Chủ</Nav.Link>
            <Nav.Link href="#action2">Trà Sữa</Nav.Link>
            <NavDropdown title="Trà Tươi" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Trà Tươi</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Trà Đen
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Hồng Trà
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="action6">
              Latte & Kem Sữa
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Tiềm kiếm hương vị ngọt ngào"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success " className="ms-2 px-4 ">Đăng Ký</Button>
            <Button variant="outline-success"className="ms-2 px-4 ">Đăng Nhập</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
class ThuNghiem extends React.Component{
  render(){
    return(
      <div>
        
      </div>
    );
  }
}

export default Header;
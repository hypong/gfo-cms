import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/footer'
import { Table, Button, Modal, Form } from 'react-bootstrap'

const mockDataHeader = [
  'uid',
  'username',
  'password',
  'name',
  'role',
  'status',
  'update',
  'delete',
]

const mockDataList = [
  {
    uid: '1',
    username: 'leonpong',
    password: '123456',
    name: 'Leon pong',
    role: 'admin',
    status: 'activated',
  },
  {
    uid: '2',
    username: 'smith',
    password: '123456',
    name: 'adam smith',
    role: 'admin',
    status: 'activated',
  },
  {
    uid: '3',
    username: 'edison',
    password: '123456',
    name: 'Thomas Edison',
    role: 'admin',
    status: 'activated',
  },
]

export default function UserList() {
  const [data, setData] = useState(mockDataList)
  const [show, setShow] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')

  const deleteRow = (index) => {
    setData((c) => c.filter((item, i) => i !== index))
  }

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
    setUserName('')
    setPassword('')
    setName('')
    setRole('')
  }

  const handleSave = () => {
    const newData = {
      uid: data.length,
      username: userName,
      password: password,
      name: name,
      role: role,
      status: 'activated',
    }
    setData((c) => [...c, newData])
    handleClose()
  }

  return (
    <div className={styles.container}>
      <Button onClick={() => handleShow()}>add new user</Button>
      <section>
        <Table striped bordered hover>
          <thead>
            <tr>
              {mockDataHeader.map((item, key) => {
                return <th key={`header${key}`}>{item}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => {
              return (
                <tr key={`datalist${key}`}>
                  <td>{item.uid}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{item.status}</td>
                  <td>
                    <Button>update</Button>
                  </td>
                  <td>
                    <Button onClick={() => deleteRow(key)}>delete</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value)
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="role"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value)
                }}
              />
            </Form.Group>
          </Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  )
}

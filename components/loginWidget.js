import React, { useState } from 'react'
import { Form, Button, ButtonToolbar } from 'react-bootstrap'
import style from './loginWidget.module.css'
import { useRouter } from 'next/router'

export const LoginWidget = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const autoInputPassword = () => {
    setName('admin')
    setPassword('admin')
  }

  const validateCredential = () => {
    return name === 'admin' && password === 'admin'
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    if (validateCredential()) {
      // redirect
      router.push('/userlist')
    } else {
      setError(true)
      setName('')
      setPassword('')
    }
  }

  return (
    <div className={style.wrapper}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="User name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              setError(false)
            }}
          />
          <Form.Text className="text-muted">
            Please use admin:admin to login
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(false)
            }}
          />
        </Form.Group>
        {error && (
          <Form.Text className={style.textError}>
            Wrong user name or password
          </Form.Text>
        )}
        <ButtonToolbar className="justify-content-between">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="link" onClick={() => autoInputPassword()}>
            Forget password
          </Button>
        </ButtonToolbar>
      </Form>
    </div>
  )
}

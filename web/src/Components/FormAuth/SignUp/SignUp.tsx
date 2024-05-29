import './SignUp.modules.css';

import { Divider } from '../..//Divider';

// bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function SignUp() {

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center __container">
      <div className='container__content'>
        <Form className='content__form border'>
          <h1 className='h3 text-center'>Cadastrar</h1>
          <p className='text-center'>Preencha os dados abaixo para concluir o cadastro.</p>

          <Divider />

          <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite o email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite a senha" />
          </Form.Group>

          <Button variant="success" className='w-100' type="submit">
            Cadastrar
          </Button>
        </Form>

        <Divider><h5>Já tem conta?</h5></Divider>

        <Button href='/login' variant='success' className='w-100'>Acessar</Button>
      </div>
    </div>
  )
}
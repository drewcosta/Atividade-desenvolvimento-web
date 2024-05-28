import './SignIn.css';

import { Divider } from '../../Components/Divider';

// bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function SignIn() {

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center __container">
      <div className='container__content'>
        <Form className='content__form border'>
          <h1 className='h3 text-center'>Acesso à Lista Telefônica</h1>
          <p className='text-center'>Preencha os dados abaixo para o acesso.</p>

          <Divider />

          <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite o email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite a senha" />
          </Form.Group>

          <Button variant="primary" className='w-100' type="submit">
            Acessar
          </Button>
        </Form>

        <Divider><h5>Novo usuário?</h5></Divider>

        <Button href='/register' className='w-100'>Cadastrar</Button>
      </div>
    </div>
  )
}
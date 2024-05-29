import './Landing.modules.css';

// bootstrap components
import { Container } from 'react-bootstrap';
import Stack from "react-bootstrap/esm/Stack";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';

import imagem from '../../Assets/icon-list.png';
import iconAdd from '../../Assets/icon-add-list.svg';
import iconProfile from '../../Assets/icon-profile.svg';
import iconList from '../../Assets/icon-list.svg';

export function Landing() {
  return (
    <Container fluid className="landing__container">
      <Stack direction='vertical' className='mx-4 pb-5 gap-5'>
        <Stack direction="vertical" className="flex-sm-column justify-content-sm-center align-items-center text-center gap-5 mx-4 text-light">
          <div className='stack__nameApp'>
            <h2>App List</h2>
          </div>
          <div className='stack__titleBox'>
            <h1>Planeje as suas compras em apenas 3 passos</h1>
            <p>Aqui você pode criar uma lista para as suas compras de maneira rápida e fácil</p>
          </div>
          <div className='stack__btnbox'>
            <Button href='/login' variant='dark' className='fw-bold w-100'>Comece agora</Button>
          </div>
          <div className="stack__imagem--resize">
            <Image src={imagem} alt="" />
          </div>
        </Stack>

        <Stack direction='horizontal' className='m-auto flex-wrap mt-lg-5 gap-2'>
          <Card>
            <Card.Img variant="top" src={iconProfile} />
            <Card.Body>
              <Card.Title>① Cadastre-se</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={iconAdd} />
            <Card.Body>
              <Card.Title>② Adicione os seus produtos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={iconList} />
            <Card.Body>
              <Card.Title as="h2">③ Gerencie a sua lista</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Stack>
      </Stack>

    </Container>
  )
}
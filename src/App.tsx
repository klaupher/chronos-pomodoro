import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Container>
        <Heading>Teste do meu componente Heading</Heading>
      </Container>
      <Container>Menu</Container>
      <Container>Form</Container>
      <Container>Footer</Container>
    </>
  );
}

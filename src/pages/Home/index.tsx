import { MainTemplate } from '../../templates/MainTemplate';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { Container } from '../../components/Container';

export function HomePage() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}

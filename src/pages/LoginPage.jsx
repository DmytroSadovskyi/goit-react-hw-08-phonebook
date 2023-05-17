import Container from 'components/Container/Container';
import { MainTitle } from 'components/Container/Container.styled';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <main>
      <section>
        <Container>
          <MainTitle>Login</MainTitle>
          <LoginForm />
        </Container>
      </section>
    </main>
  );
};

export default LoginPage;

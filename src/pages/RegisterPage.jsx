import Container from 'components/Container/Container';
import { MainTitle } from 'components/Container/Container.styled';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <main>
      <section>
        <Container>
          <MainTitle>Register</MainTitle>
          <RegisterForm />
        </Container>
      </section>
    </main>
  );
};

export default RegisterPage;

import styled from "styled-components";
import { ProfileIntroductionProps } from "../../Type/Type";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Greeting = styled.h1`
  font-size: 2em;
  color: #333;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 3em;
  color: #1a1a1a;
  margin-bottom: 20px;
`;

const Introduction = styled.p`
  font-size: 1.2em;
  color: #666;
  line-height: 1.6;
`;

const ProfileIntroduction = ({
  greeting,
  title,
  introduction,
}: ProfileIntroductionProps) => (
  <Container>
    <Greeting>{greeting}</Greeting>
    <Title>{title}</Title>
    <Introduction>{introduction}</Introduction>
  </Container>
);

export default ProfileIntroduction;

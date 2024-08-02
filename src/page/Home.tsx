import React from "react";
import styled from "styled-components";
import { Profile } from "../Type/Type";

export type HomeProps = {
  profile?: Profile;
};

const profileData: Profile = {
  name: "Your Name",
  age: 25, // 예시 나이
  email: "your.email@example.com",
  phone: "123-456-7890",
  address: "123 Main St, City, Country",
};

// 스타일드 컴포넌트 정의
const HomeContainer = styled.div`
  width: 100vw;
  max-width: 1500px;
  height: 100vh;
  max-height: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px;
  border: 1px solid black;
  font-family: Arial, sans-serif;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Section = styled.section`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: #444;
  margin-bottom: 15px;
`;

const ProfileInfo = styled.p`
  margin: 10px 0;
  color: #666;
`;
const Home = ({ profile = profileData }: HomeProps) => {
  return (
    <HomeContainer>
      <Main>
        <Section>
          <SectionTitle>About Me</SectionTitle>
          <ProfileInfo>Name: {profile.name}</ProfileInfo>
          <ProfileInfo>Age: {profile.age}</ProfileInfo>
          <ProfileInfo>Email: {profile.email}</ProfileInfo>
          <ProfileInfo>Phone: {profile.phone}</ProfileInfo>
          <ProfileInfo>Address: {profile.address}</ProfileInfo>
        </Section>
      </Main>
    </HomeContainer>
  );
};

export default Home;

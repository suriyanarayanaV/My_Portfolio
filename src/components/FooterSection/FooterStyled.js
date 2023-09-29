import styled from "styled-components";

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 85px 30px;
  margin-top: -55px;
  @media (max-width: 960px) {
    padding: 86px 16px;
  }
  @media (max-width: 640px) {
    padding: 55px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 16%, 100% 0, 100% 100%, 100% 100%, 0 100%);
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1700px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card_light};
`;

export const Logo = styled.h1`
  font-weight: 600;
  margin-top: 40px;
  font-size: 30px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 640px) {
    font-size: 24px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 1500px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 0.1rem;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Copyright = styled.p`
  margin-top: 0.4rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

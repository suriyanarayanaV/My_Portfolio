import styled from "styled-components";
export const EducationContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  margin-top: -60px;
  margin-bottom: 15px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 6%, 100% 0, 100% 100%, 100% 100%, 0 100%);
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  margin-top: 80px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
export const Subtitle = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary + 90};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const Window = styled.div`
  width: 680px;
  height: 380px;
  border-radius: 30px;
  background: ${({ theme }) => theme.card_light};
  overflow: hidden;
  box-shadow: 2px 2px 2px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    max-width: 350px;
    height: auto;
  }
`;
export const WindowNav = styled.nav`
  display: flex;
  justify-content: space-around;
  height: 44px;
`;
export const WindowNavLi = styled.li`
  list-style: none;
`;

export const WindowTabs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const WindowMain = styled.main`
  display: flex;
  font-size: 128px;
  flex-grow: 1;
  user-select: none;
`;
export const WindowUl = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
`;
export const WindowLi = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  padding: 10px 15px;
  position: relative;
  cursor: pointer;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-width: 0;
  position: relative;
  user-select: none;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    margin-bottom: 10px;
  }
`;

export const WindowNavTitle = styled.div`
  color: ${(props) =>
    props.selected
      ? ({ theme }) => theme.primary
      : ({ theme }) => theme.text_primary};
  margin-top: 10px;
  margin-left: 20px;
  font-weight: 500;
  font-size: 18px;
  &:hover {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
  @media (max-width: 640px) {
    margin-top: 10px;
    margin-left: 0;
    font-weight: 500;
    font-size: 16px;
  }
`;
export const WindowLogo = styled.span`
  color: ${({ theme }) => theme.primary};
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
`;

export const AcademicDetails = styled.div`
  margin-top: 30px;
`;
export const AcademicDescriptionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AcademicDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary + 95};
  text-align: justify;
  margin: 20px;
`;

import styled from "styled-components";

export const EducationContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const EducationWrapper = styled.div`
    max-width:1000px;
    margin:0 auto;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    align-items:center;
    grid-gap:16px;
    padding 0 50px;

    @media screen and (max-width:1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width:768px){
        grid-template-columns:1fr;
        padding:0 20px;
    }
`;

export const EducationCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    tranition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const EducationIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  margin-left: 24px;
  margin-top: 10px;
`;

export const EducationH1 = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #01bf71;
  margin-bottom: 104px;
  margin-top: 0;
  margin-right: 64px;
  margin-left: 16px;
  padding-top: 10px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const EducationH2 = styled.h2`
  font-size: 2.5rem;
  display: flex;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const EducationH2Desc = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 64px;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const EducationP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #000;
`;

import styled from 'styled-components';

export const Header = () => {
  return (
    <StyledDiv>
      <h2> Salary Calculator </h2>
      <SubHeading />
    </StyledDiv>
  )
}


const SubHeading = () => {
  return (
    <div>
      <h5>Calculates Your Annual, Quaterly and Monthly in hand salary and tax</h5>
    </div>
  );
}

const StyledDiv = styled.div`
   padding : 25px;
   >h2 {
     margin : 0px
   }
   h5 {
     margin : 0px;
   }
`;
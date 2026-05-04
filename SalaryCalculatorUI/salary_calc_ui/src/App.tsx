import styled from 'styled-components';
import { SalaryCalculator } from './components/SalaryCalculator'

function App() {
  

  return (
    <StyledBox>
    <SalaryCalculator/>
    </StyledBox>
  )
}

const StyledBox = styled.div`
  background: linear-gradient(132deg, rgb(113, 143, 175) 0.00%, rgb(69, 92, 114) 100.00%);
  color : white;
  text-align: center;
  max-width : 80%;
  max-height : 100%;
  margin-left : auto;
  margin-right : auto;
  border-radius : 8px;
  font-family: Arial;
  padding-bottom : 20px;
  input {
   color : white;
   font-family : Arial;
   font-size : 14px;
   font-weight : 500;
  }
`;

export default App

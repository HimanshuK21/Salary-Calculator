import React, { useEffect, useState } from 'react'
import { getSalaryBreakUp } from './api/getSalaryBreakUp';
import { IncomeTax, InHandSalary, PeriodicDropdown, PFContribution, SalaryBreakUp, TypePeriodicDropdown } from './types/SalaryBreakUp';
import styled from 'styled-components';

const SalaryCalcFields = () => {
    return (
        <div>
            <FieldDisclaimer />
            <FieldDetails />
        </div>
    )
}

const FieldDisclaimer = () => {
    return (
        <FieldDislcalimerStyle>
            <h5>Provide Annual CTC (i.e 30 Lakhs Rs. per Annum) and TaxSlab for the calculations</h5>
        </FieldDislcalimerStyle>
    );
}

const FieldDislcalimerStyle = styled.div`
    >h5 {
        margin : 0px;
    }
`;

const FieldDetails = () => {
    const [CTC, setCTC] = useState<string>('');
    const [basicSalary, setBasicSalary] = useState<string>('');
    const [isGratuity, setGratuity] = useState<boolean>(false);
    const [isNewTaxSlab, setNewTaxSlab] = useState<boolean>(true);
    const [isEmployerPF, setEmployerPF] = useState<boolean>(false);
    const [salaryBreakUp, setsalaryBreakUp] = useState<SalaryBreakUp>();
    const [inHandPeriod, setInHandPeriod] = useState<TypePeriodicDropdown>('monthly');
    const [taxPeriod, setTaxPeriod] = useState<TypePeriodicDropdown>('monthly');
    const [pfPeriod, setPFPeriod] = useState<TypePeriodicDropdown>('monthly');
    const [inHand, setInHand] = useState<InHandSalary>();
    const [tax, setTax] = useState<IncomeTax>();
    const [pf, setPF] = useState<PFContribution>();
    const [selectedInHand, setSelectedInHand] = useState<number>();
    const [selectedTax, setSelectedTax] = useState<number>();
    const [selectedPF, setSelectedPF] = useState<number>();


    useEffect(() => {
        setInHandSelection(inHandPeriod);
        setTaxSelection(taxPeriod);
        setPFSelection(pfPeriod);
    }, [inHand, tax, pf]);

    const onAnnualCTCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        var salary = e.target.value;
        if (!salary || salary.match(/^\d{1,}(\.\d{0,4})?$/)) {
            if (parseFloat(salary) > 150) {
                alert("Please provide the annual CTC like 30 Lakhs Rs. per Annum. Our system range is from 1 to 150");
            }
            else {
                setCTC(salary);
            }
        }
    }

    const onBasicSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        var salary = e.target.value;
        if (CTC && (!salary || salary.match(/^\d{1,}(\.\d{0,4})?$/))) {
            if (parseFloat(salary) > parseFloat(CTC) * 100000) {
                alert("Basic Pay cannot be grater than CTC");
            }
            else {
                setBasicSalary(salary);
            }
        } else {
            alert("Please provide the annual CTC first");
        }
    }

    const toggleTaxSlab = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target instanceof HTMLInputElement) {
            setNewTaxSlab(e.target.checked);
        }

    }

    const toggleEmployerPF = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target instanceof HTMLInputElement) {
            setEmployerPF(e.target.checked);
        }

    }

    const toggleGratuity = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target instanceof HTMLInputElement) {
            setGratuity(e.target.checked);
        }

    }
    const onInHandPeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const dropdownValue = e.target.value as TypePeriodicDropdown;
        setInHandPeriod(dropdownValue);
        setInHandSelection(dropdownValue);

    }

    const setInHandSelection = (dropdownValue: TypePeriodicDropdown) => {
        if (dropdownValue == PeriodicDropdown.monthly) {
            setSelectedInHand(inHand?.monthlyInHand);
        }
        else if (dropdownValue == PeriodicDropdown.quaterly) {
            setSelectedInHand(inHand?.quaterlyInHand);
        }
        else if (dropdownValue == PeriodicDropdown.yearly) {
            setSelectedInHand(inHand?.yearlyInHand);
        }
    }

    const onTaxPeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const dropdownValue = e.target.value as TypePeriodicDropdown;
        setTaxPeriod(e.target.value as TypePeriodicDropdown);
        setTaxSelection(dropdownValue);

    }

    const setTaxSelection = (dropdownValue: TypePeriodicDropdown) => {
        if (dropdownValue == PeriodicDropdown.monthly) {
            setSelectedTax(tax?.monthlyIncomeTax);
        }
        else if (dropdownValue == PeriodicDropdown.quaterly) {
            setSelectedTax(tax?.quaterlyIncomeTax);
        }
        else if (dropdownValue == PeriodicDropdown.yearly) {
            setSelectedTax(tax?.yearlyIncomeTax);
        }
    }

    const onPFChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const dropdownValue = e.target.value as TypePeriodicDropdown;
        setPFPeriod(dropdownValue);
        setPFSelection(dropdownValue);

    }

    const setPFSelection = (dropdownValue: TypePeriodicDropdown) => {
        if (dropdownValue == PeriodicDropdown.monthly) {
            setSelectedPF(pf?.monthlyPF);
        }
        else if (dropdownValue == PeriodicDropdown.quaterly) {
            setSelectedPF(pf?.quaterlyPF);
        }
        else if (dropdownValue == PeriodicDropdown.yearly) {
            setSelectedPF(pf?.yearlyPF);
        }
    }

    const onButtonClick = async () => {
        if (CTC && parseFloat(CTC) > 0) {
            const data = await getSalaryBreakUp(parseFloat(CTC) * 100000, isNewTaxSlab, basicSalary && parseFloat(basicSalary) ? parseFloat(basicSalary) : 0, isGratuity, isEmployerPF);
            setsalaryBreakUp(data);
            setInHand(data.inHandSalary);
            setTax(data.incomeTax);
            setPF(data.pfContribution)
        }
    }

    const PeriodicDropdowns: TypePeriodicDropdown[] = Object.keys(PeriodicDropdown) as TypePeriodicDropdown[];


    return (
        <div>
            <FlexBox>
                <CTCBox>
                    <span>
                        CTC :
                        <input type='text' placeholder='Annual CTC' value={CTC} onChange={onAnnualCTCChange} />

                        Lakhs Rs. / Annum
                    </span>
                </CTCBox>
                <CTCBox>
                    <span>
                        Basic Salary(Optional) :
                        <input type='text' placeholder='Basic Salary' value={basicSalary} onChange={onBasicSalaryChange} /> / Annum
                    </span>
                </CTCBox>
                <TaxSlabBox>
                    <TaxSlabText>  Tax Slab  </TaxSlabText>
                    <TaxSlabLevel>
                        <input type='checkbox' onChange={toggleTaxSlab} checked={isNewTaxSlab} />
                        <span className='slider'></span>
                    </TaxSlabLevel>
                </TaxSlabBox>
            </FlexBox>
            <FlexBox>
            <TaxSlabBox>
                    <TaxSlabText>  Is Gratuity in CTC  </TaxSlabText>
                    <EmployerPFLevel>
                        <input type='checkbox' onChange={toggleGratuity} checked={isGratuity} />
                        <span className='slider'></span>
                    </EmployerPFLevel>
                </TaxSlabBox>
                <TaxSlabBox>
                    <TaxSlabText>  Is Employer PF Contribution in CTC  </TaxSlabText>
                    <EmployerPFLevel>
                        <input type='checkbox' onChange={toggleEmployerPF} checked={isEmployerPF} />
                        <span className='slider'></span>
                    </EmployerPFLevel>
                </TaxSlabBox>
            </FlexBox>
            <FlexBox>
                <ButtonStyled onClick={onButtonClick}>
                    Calculate Total Salary
                </ButtonStyled>
            </FlexBox>
            {salaryBreakUp && (<><hr /> <FlexBox>

                <SalaryBreakUpStyle>
                    <StyledSpan>InHand Salary :</StyledSpan>
                    <StyledInput>
                        <input type='number' value={selectedInHand} disabled={true} />
                        <select value={inHandPeriod} onChange={onInHandPeriodChange}>
                            {PeriodicDropdowns.map(key => (
                                <option key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </select>
                    </StyledInput>
                </SalaryBreakUpStyle>
                <SalaryBreakUpStyle>
                    <StyledSpan>Income Tax Applicable :</StyledSpan>
                    <StyledInput>
                        <input type='number' value={selectedTax} disabled={true} />
                        <select value={taxPeriod} onChange={onTaxPeriodChange}>
                            {PeriodicDropdowns.map(key => (
                                <option key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </select>
                    </StyledInput>
                </SalaryBreakUpStyle>
                <SalaryBreakUpStyle>
                    <StyledSpan>PF Contribution from CTC :</StyledSpan>
                    <StyledInput>
                        <input type='number' value={selectedPF} disabled={true} />
                        <select value={pfPeriod} onChange={onPFChange}>
                            {PeriodicDropdowns.map(key => (
                                <option key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </select>
                    </StyledInput>
                </SalaryBreakUpStyle>
            </FlexBox>
            </>
            )}

        </div>
    );
}


const ButtonStyled = styled.button`
   
    padding : 10px;
    border-radius : 10px;
    border : 2px solid white;
    color : white;
    background-color : #ffffff00;
    font-weight : 500;
    cursor : pointer;
    margin-bottom : 20px;
  
`;

const CTCBox = styled.div`
    display : flex;
    input {
       margin-right : 10px !important;
    }
    input::placeholder {
      color: #ccd7e3;
    } 
`;

const FlexBox = styled.div`
  display : flex;
  gap : 55px;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  margin-top : 25px;
  input , select {
     background-color : #ffffff00;
     padding: 12px 20px;
     margin: 8px 0;
     display: inline-block;
     border: 1px solid #ccc;
     border-radius: 4px;
     box-sizing: border-box;
   }

   select {
     width : 120px;
     max-width : 250px;
     border: none;
     color: white;
   }

   select option {
     width : 250px;
     background-color : rgb(113, 143, 175);
   }
   select:focus-visible {
    outline: none;
}

`;

const StyledInput = styled.div`
  border: 1px solid #ccc;
  margin-top : 5px;
    border-radius: 4px;
    height : 40px;
    input , select {
     border-radius: 0px;
     border: none;
     margin : 0;
   }

`

const StyledSpan = styled.span`
   margin: 19px 10px 0 0;
`;

const SalaryBreakUpStyle = styled.div`
   display : flex;
`;

const TaxSlabBox = styled.div`
   display: flex;
`

const TaxSlabText = styled.span`
   margin: 19px 12px 0 0;
`;

const TaxSlabLevel = styled.label`
   position: relative;
   display: inline-block;
   width: 60px;
   height: 34px;
   margin : 10px 0;


  input {
   opacity: 0;
   width: 0;
   height: 0;
  }

  .slider {
   position: absolute;
   cursor: pointer;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: #ccc;
   -webkit-transition: .4s;
   transition: .4s;
   border-radius: 20px;
  }

  .slider:before {
   position: absolute;
   content: "Old";
   font-size : 10px;
   text-align : center;
   font-weight: bold;
   line-height: 1;
   padding: 9px 4px;
   background-color: #2196F3;
   height: 10px;
   width: 20px;
   left: 4px;
   bottom: 4px;
   -webkit-transition: .4s;
   transition: .4s;
   border-radius: 50%;
}

  input:checked + .slider {
   background-color: #ebf7fc;
}

  input:focus + .slider {
   box-shadow: 0 0 1px #2196F3;
}

  input:checked + .slider:before {
   -webkit-transform: translateX(26px);
   -ms-transform: translateX(26px);
   transform: translateX(26px);
   content: "New";
}

`;

const EmployerPFLevel = styled(TaxSlabLevel)`
   input:checked + .slider:before {
   content : 'Yes';
}
   .slider:before {
    content : 'No';
}

`;
export default SalaryCalcFields

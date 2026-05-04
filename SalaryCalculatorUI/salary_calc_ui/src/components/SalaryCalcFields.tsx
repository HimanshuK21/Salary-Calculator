import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import { getSalaryBreakUp } from './api/getSalaryBreakUp'
import { IncomeTax, InHandSalary, PeriodicDropdown, PFContribution, SalaryBreakUp, TypePeriodicDropdown } from './types/SalaryBreakUp'

const SalaryCalcFields = () => {
  return (
    <div className="app-content-section">
      <FieldDisclaimer />
      <FieldDetails />
    </div>
  )
}

const FieldDisclaimer = () => (
  <div className="form-disclaimer">
    <p>Provide Annual CTC (i.e 30 Lakhs Rs. per Annum) and Tax Slab for the calculations</p>
  </div>
)

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
        const salary = e.target.value;
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
        const salary = e.target.value;
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
        <div className='form-section'>
            <div className='form-field-row'>
                <div className='form-field'>
                    <span>
                        CTC :
                        <input type='text' className='input-field' placeholder='Annual CTC' value={CTC} onChange={onAnnualCTCChange} />

                        Lakhs Rs. / Annum
                    </span>
                </div>
                <div className='form-field'>
                    <span>
                        Basic Salary(Optional) :
                        <input type='text' className='input-field' placeholder='Basic Salary' value={basicSalary} onChange={onBasicSalaryChange} /> / Annum
                    </span>
                </div>
            </div>
            <div className='form-field-row' >
            
                <div className="form-field">
  <span className="input-label">Tax Slab</span>
  <label className="toggle-switch">
    <input
      type="checkbox"
      checked={isNewTaxSlab}
      onChange={toggleTaxSlab}
    />
    <span className="slider tax-label" />
  </label>
</div>
<div className='form-field'>
                    <span className='input-label'>  Is Gratuity in CTC  </span>
                    <label className='toggle-switch'>
                        <input type='checkbox' onChange={toggleGratuity} checked={isGratuity} />
                        <span className='slider nonTax-label'></span>
                    </label>
                    </div>
                    <div className='form-field'>
                    <span className='input-label'>  Is Employer PF Contribution in CTC  </span>
                    <label className='toggle-switch'>
                        <input type='checkbox' onChange={toggleEmployerPF} checked={isEmployerPF} />
                        <span className='slider nonTax-label'></span>
                    </label>
                </div>
            </div>
            <div className='form-field-row'>
                <button type="button" className="btn btn-success btn-block" onClick={onButtonClick}>
                     Calculate Total Salary
                </button>
            </div>
            {salaryBreakUp && (<><hr /> <div className='form-field-row'>

                <div className="result-card">
  <p className="result-label">InHand Salary</p>

  <div className="input-group">
    <input
      type="number"
      className="input-field"
      value={selectedInHand}
      disabled
    />

    <select
      className="select-field"
      value={inHandPeriod}
      onChange={onInHandPeriodChange}
    >
      {PeriodicDropdowns.map(key => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </select>
  </div>
</div>
                <div className="result-card">
                    <p className='result-label'>Income Tax Applicable :</p>
                    <div className='input-group'>
                        <input  className="input-field" type='number' value={selectedTax} disabled={true} />
                        <select className="select-field" value={taxPeriod} onChange={onTaxPeriodChange}>
                            {PeriodicDropdowns.map(key => (
                                <option key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="result-card">
                    <p className='result-label'>PF Contribution from CTC :</p>
                    <div className='input-group'>
                        <input  className="input-field" type='number' value={selectedPF} disabled={true} />
                        <select className="select-field" value={pfPeriod} onChange={onPFChange}>
                            {PeriodicDropdowns.map(key => (
                                <option key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            </>
            )}

        </div>
    );
}

export default SalaryCalcFields

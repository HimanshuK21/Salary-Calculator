package com.salary.calc.salary_calc_api.service;

import org.springframework.stereotype.Service;

import com.salary.calc.salary_calc_api.model.InHandSalary;
import com.salary.calc.salary_calc_api.model.IncomeTax;
import com.salary.calc.salary_calc_api.model.PFContribution;
import com.salary.calc.salary_calc_api.model.SalaryResponseModel;

@Service
public class SalaryCalcService {
    
    private boolean isNewTaxSlab;

    public SalaryResponseModel getSalary(long anaulSalary , long basicSalary, boolean isGratuity , boolean isEmployerPF){
        long tax = getIncometax(anaulSalary);
		long pfContribution = getPFContribution(anaulSalary, basicSalary);
        long salary = anaulSalary-tax-TaxSlab.professionalTax-pfContribution;
		if(isGratuity){
		  double gratuity = getGratuity(anaulSalary, basicSalary);	
		  salary -= gratuity;
		}
		if(isEmployerPF){
			salary -= pfContribution;
		}
        IncomeTax incomeTax = new IncomeTax(tax/12, tax/4, tax);
        InHandSalary inHandSalary = new InHandSalary(salary/12, salary/4, salary);
		PFContribution pf = new PFContribution(pfContribution/12, pfContribution/4, pfContribution);
        return new SalaryResponseModel(inHandSalary, incomeTax, pf);
    }
	

	private double getGratuity (long anaulSalary, long basicSalary){
		if(basicSalary>0){
			return (basicSalary*4.81)/100;
		}
		return (anaulSalary/2) * 4.81 /100;
	}
	private long getPFContribution (long anaulSalary, long basicSalary){
		if(basicSalary>0){
			return (basicSalary*12)/100;
		}
		return (anaulSalary/2) * 12 /100;
	}

	private long getIncometax(long anaulSalary) {
		TaxSlab taxSlabBreakUp = new TaxSlab(isNewTaxSlab);
		long incomeTaxOnSalary = 0;
		
		for(int i = 1 ; i<=taxSlabBreakUp.taxSlab.size() ;i++) {
			if(anaulSalary > (taxSlabBreakUp.taxSlab.get(i).start()*100000)) {
				if(anaulSalary <(taxSlabBreakUp.taxSlab.get(i).end()*100000)) {
					incomeTaxOnSalary += ((anaulSalary - (taxSlabBreakUp.taxSlab.get(i).start()*100000)) * taxSlabBreakUp.taxSlab.get(i).percentage()/100);
				}
				else {
					incomeTaxOnSalary += ((taxSlabBreakUp.taxSlab.get(i).end() - taxSlabBreakUp.taxSlab.get(i).start())*100000 * taxSlabBreakUp.taxSlab.get(i).percentage()/100);
				}
			}
		}
		
		return incomeTaxOnSalary;
	}

    public void setNewTaxSlab(boolean isNewTaxSlab){
        this.isNewTaxSlab = isNewTaxSlab;
    }
}

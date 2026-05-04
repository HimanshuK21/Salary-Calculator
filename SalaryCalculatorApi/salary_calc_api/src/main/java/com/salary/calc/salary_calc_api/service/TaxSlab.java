package com.salary.calc.salary_calc_api.service;

import java.util.HashMap;
import java.util.Map;

import com.salary.calc.salary_calc_api.model.TaxSlabBreakUp;

public class TaxSlab {
	
	public Map<Integer,TaxSlabBreakUp>  taxSlab;
	public static Integer professionalTax = 2500;
	
	
	TaxSlab(boolean isNewTaxSlab){
		taxSlab = new HashMap<>();
		if(isNewTaxSlab) {
			setNewTaxSlab();
		}
		else {
		setOldTaxSlab();
		}
		
	}
	
	private void setOldTaxSlab() {
		taxSlab.put(1,new TaxSlabBreakUp(0, 2.5 , 0));
		taxSlab.put(2,new TaxSlabBreakUp(2.5, 5 , 5));
		taxSlab.put(3,new TaxSlabBreakUp(5, 10 , 20));
		taxSlab.put(4,new TaxSlabBreakUp(10, 1000 , 30));
	}
	
	private void setNewTaxSlab() {
		
		taxSlab.put(1,new TaxSlabBreakUp(0, 3 , 0));
		taxSlab.put(2,new TaxSlabBreakUp(3, 7 , 5));
		taxSlab.put(3,new TaxSlabBreakUp(7, 10 , 10));
		taxSlab.put(4,new TaxSlabBreakUp(10, 12 , 15));
		taxSlab.put(5,new TaxSlabBreakUp(12, 15 , 20));
		taxSlab.put(6,new TaxSlabBreakUp(15, 1000 , 30));
	}
	
}

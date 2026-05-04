package com.salary.calc.salary_calc_api.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.salary.calc.salary_calc_api.model.SalaryResponseModel;
import com.salary.calc.salary_calc_api.service.SalaryCalcService;

//TODO - Himanshu : Salary does not deduct State tax and PF calculation. So Approximate 20K deduction from monthly salary - ui
//TODO - Monthly Expense Tracker - backend and ui
//TODO - EMI Calculator - backend and ui
@RestController("/")
public class SalaryCalcController {

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("getSalaryBreakUp")
    public SalaryResponseModel getSalaryBreakUp(@RequestParam long anualSalary, @RequestParam boolean isNewTaxSlab , @RequestParam long basicSalary, @RequestParam boolean isGratuity, @RequestParam boolean isEmployerPF) {
        SalaryCalcService service = new SalaryCalcService();
        service.setNewTaxSlab(isNewTaxSlab);
        return service.getSalary(anualSalary, basicSalary, isGratuity, isEmployerPF);
    }

}

export type SalaryBreakUp = {
    inHandSalary : InHandSalary;
    incomeTax : IncomeTax;
    pfContribution : PFContribution;
};

export type InHandSalary = {
    monthlyInHand : number;
    quaterlyInHand : number;
    yearlyInHand : number;
};

export type IncomeTax = {
    monthlyIncomeTax : number;
    quaterlyIncomeTax: number;
    yearlyIncomeTax: number;
};

export type PFContribution = {
    monthlyPF : number;
    quaterlyPF : number;
    yearlyPF : number;
}

export enum PeriodicDropdown {
    monthly = 'monthly',
    quaterly = 'quaterly', 
    yearly = 'yearly'
}

export type TypePeriodicDropdown = keyof typeof PeriodicDropdown;

import axios from "axios";

export const getSalaryBreakUp = async (CTC:number , isNewTaxSlab: boolean, basicSalary?:number, isGratuity?: boolean, isEmployerPF?:boolean) => {
    try {
    const response = await axios
        .get(`http://localhost:8081/getSalaryBreakUp?anualSalary=${CTC}&isNewTaxSlab=${isNewTaxSlab}&basicSalary=${basicSalary}&isGratuity=${isGratuity}&isEmployerPF=${isEmployerPF}`);
        return response.data;
    }catch(err){
       console.log(err);
    }
};

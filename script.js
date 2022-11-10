let button = document.getElementById('btn-calc');

button.addEventListener('click', () =>
{
    const monthly_salary = parseFloat(document.getElementById('monthly_salary').value);
    const interest_rate = parseFloat(document.getElementById('interest_rate').value);
    const loan_term = parseInt(document.getElementById('loan_term').value);

    const road_tax = parseFloat(document.getElementById('road_tax').value);
    const car_insurance = parseFloat(document.getElementById('car_insurance').value);
    const car_maintenance = parseFloat(document.getElementById('car_maintenance').value);
    const fuel_petrol = parseFloat(document.getElementById('fuel_petrol').value);
    
    const result1 = document.getElementById('output1');
    const result2 = document.getElementById('output2');
    const result3 = document.getElementById('output3');
    const result4 = document.getElementById('output4');
    const result5 = document.getElementById('output5');
    const result6 = document.getElementById('output6');
    const result7 = document.getElementById('output7');
    const result8 = document.getElementById('output8');



    let ms_status=false, ir_status=false; lt_status=false; rt_status=false; ci_status=false; cm_status=false; fp_status=false;


    if(monthly_salary === '' || isNaN(monthly_salary) || (monthly_salary <= 0))
    {
        document.getElementById('monthly_salary_error').innerHTML = 'Please provide a valid MONTHLY SALARY money amount.';
    }
    else
    {
        document.getElementById('monthly_salary_error').innerHTML = '';
        ms_status=true;
    }


    if(road_tax === '' || isNaN(road_tax) || (road_tax <= 0))
    {
        document.getElementById('road_tax_error').innerHTML = 'Please provide a valid ROAD TAX money amount.';
    }
    else
    {
        document.getElementById('road_tax_error').innerHTML = '';
        rt_status=true;
    }


    if(car_insurance === '' || isNaN(car_insurance) || (car_insurance <= 0))
    {
        document.getElementById('car_insurance_error').innerHTML = 'Please provide a valid CAR INSURANCE money amount.';
    }
    else
    {
        document.getElementById('car_insurance_error').innerHTML = '';
        ci_status=true;
    }


    if(car_maintenance === '' || isNaN(car_maintenance) || (car_maintenance <= 0))
    {
        document.getElementById('car_maintenance_error').innerHTML = 'Please provide a valid CAR MAINTENANCE money amount.';
    }
    else
    {
        document.getElementById('car_maintenance_error').innerHTML = '';
        cm_status=true;
    }


    if(fuel_petrol === '' || isNaN(fuel_petrol) || (fuel_petrol <= 0))
    {
        document.getElementById('fuel_petrol_error').innerHTML = 'Please provide a valid FUEL PETROL money amount.';
    }
    else
    {
        document.getElementById('fuel_petrol_error').innerHTML = '';
        fp_status=true;
    }


    if(interest_rate === '' || isNaN(interest_rate) || (interest_rate <= 0))
    {
        document.getElementById('interest_rate_error').innerHTML = 'Please provide a valid INTEREST RATE amount.';
    }
    else
    {
        document.getElementById('interest_rate_error').innerHTML = '';
        ir_status=true;
    }


    if(loan_term === '' || isNaN(loan_term) || (loan_term <= 0))
    {
        document.getElementById('loan_term_error').innerHTML = 'Please provide a valid LOAN TERM amount.';
    }
    else
    {
        document.getElementById('loan_term_error').innerHTML = '';
        lt_status=true;
    }



    if(ms_status && ir_status && lt_status && rt_status && ci_status && cm_status && fp_status)
    {        
        const incometax_epf_socso = (monthly_salary * 0.12).toFixed(2);

        const net_income = (monthly_salary - incometax_epf_socso).toFixed(2);

        const max_monthly_car_commitment = (net_income * 0.30).toFixed(2);
        const estimated_monthly_car_expenses = (road_tax/12 + car_insurance/12 + car_maintenance/12 + fuel_petrol).toFixed(2);
        
        const max_monthly_car_installment = (max_monthly_car_commitment - estimated_monthly_car_expenses).toFixed(2);


        const max_affordable_car_loan = (max_monthly_car_installment * loan_term * 12).toFixed(2);
        const total_car_loan_interest = (max_affordable_car_loan * interest_rate / 100 * loan_term).toFixed(2);

        const highest_net_car_budget_price = (max_affordable_car_loan - total_car_loan_interest).toFixed(2);



        result1.innerHTML = incometax_epf_socso;
        result2.innerHTML = 'MYR ' + net_income;
        result3.innerHTML = max_monthly_car_commitment;
        result4.innerHTML = estimated_monthly_car_expenses;
        result5.innerHTML = 'MYR ' + max_monthly_car_installment;
        result6.innerHTML = max_affordable_car_loan;
        result7.innerHTML = total_car_loan_interest;
        result8.innerHTML = 'MYR ' + highest_net_car_budget_price;
    }
    else
    {
        alert('The form has errors');
        result.innerHTML = '';
    }
});
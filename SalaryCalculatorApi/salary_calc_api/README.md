# 💰 Salary Calculator API

A RESTful API to calculate **in-hand salary**, **income tax**, and **salary breakup** based on a given CTC (Cost to Company). The API supports both **old and new tax regimes** and provides detailed monthly, quarterly, and yearly salary insights.

---

## 🚀 Features

* 📊 Calculate **monthly, quarterly, and yearly in-hand salary**
* 🧾 Compute **income tax** based on:

  * Old tax regime
  * New tax regime
* 🧮 Detailed **salary breakup**:

  * Basic salary
  * HRA
  * Allowances
  * PF contributions
  * Gratuity (optional)
* 🏦 Handles **Employer PF contribution inclusion/exclusion**
* ⚙️ Flexible inputs (optional basic salary)

---

## 🛠️ Tech Stack

* Java (Spring Boot recommended)
* REST APIs
* JSON-based request/response
* Maven / Gradle

---

## 📥 API Input Parameters

| Parameter                   | Type    | Required | Description                                     |
| --------------------------- | ------- | -------- | ----------------------------------------------- |
| `ctc`                       | number  | ✅ Yes    | Annual CTC in lakhs                             |
| `basicSalary`               | number  | ❌ No     | Basic salary (if not provided, auto-calculated) |
| `taxSlab`                   | string  | ✅ Yes    | `OLD` or `NEW`                                  |
| `isGratuityIncludedInCtc`   | boolean | ✅ Yes    | Whether gratuity is part of CTC                 |
| `isEmployerPfIncludedInCtc` | boolean | ✅ Yes    | Whether employer PF is included in CTC          |

---

## 📤 API Response

```json
{
    "inHandSalary": {
        "monthlyInHand": 257270,
        "quaterlyInHand": 771812,
        "yearlyInHand": 3087250
    },
    "incomeTax": {
        "monthlyIncomeTax": 99166,
        "quaterlyIncomeTax": 297500,
        "yearlyIncomeTax": 1190000
    },
    "pfContribution": {
        "monthlyPF": 25000,
        "quaterlyPF": 75000,
        "yearlyPF": 300000
    }
}
```

---

## 📡 API Endpoint

```http
GET getSalaryBreakUp?anualSalary=5000000&isNewTaxSlab=true&basicSalary=0&isGratuity=true&isEmployerPF=true
```

---

## 🧠 Calculation Logic

### 1. Salary Breakdown

* If `basicSalary` is not provided:

  * Calculated as a percentage of CTC (e.g., 40–50%)
* HRA and allowances derived accordingly
* PF calculated as:

  * Employee PF = 12% of basic
  * Employer PF = 12% of basic (based on flag)
* Gratuity calculated if included

---

### 2. Income Tax Calculation

#### 🏛️ Old Tax Regime

* Includes deductions (e.g., 80C, HRA, etc.)
* Slab-based taxation

#### 🆕 New Tax Regime

* Lower tax rates
* Minimal deductions

---

### 3. In-Hand Salary

```text
In-Hand Salary = CTC - (Tax + Employee PF + Other Deductions)
```

---

## 🧪 Error Handling

* Invalid inputs (negative CTC, invalid slab)
* Missing required parameters
* Unsupported tax regime values

---

## 📈 Future Enhancements

* 📍 Location-based tax rules (India states)
* 🧾 Support for deductions (80C, 80D, etc.)
* 📊 UI dashboard for visualization
* 🔐 Authentication & rate limiting
* 🤖 AI-based tax optimization suggestions

---

## ⚙️ How to Run

```bash
git clone https://github.com/YOUR_USERNAME/salary-calculator-api.git
cd salary-calculator-api
mvn clean install
mvn spring-boot:run
```

---


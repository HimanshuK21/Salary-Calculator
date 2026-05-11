# Salary Calculator

A full-stack Salary Calculator project with a Spring Boot backend API and a Vite + React frontend UI.

## Overview

This repository includes:

- `SalaryCalculatorApi/` — backend service for salary breakup, tax, PF, and in-hand salary calculations.
- `SalaryCalculatorUI/` — frontend web UI for entering salary inputs and viewing calculation results.

## Backend - SalaryCalculatorApi

The backend provides a REST API that calculates:

- Monthly, quarterly, and yearly in-hand salary
- Income tax for old and new tax regimes
- PF contributions and gratuity handling
- Salary breakup including basic salary, HRA, allowances, and deductions

### Run backend

```bash
cd SalaryCalculatorApi/salary_calc_api
./mvnw clean install
./mvnw spring-boot:run
```

### Example API request

```http
GET getSalaryBreakUp?anualSalary=5000000&isNewTaxSlab=true&basicSalary=0&isGratuity=true&isEmployerPF=true
```

## Frontend - SalaryCalculatorUI

The frontend is built with React and TypeScript using Vite. It provides an interactive form and displays salary calculation output clearly.

### UI Screenshot

<img width="881" height="1064" alt="Salary Calculator UI screenshot" src="https://github.com/user-attachments/assets/659ae156-0251-4a42-b13c-e9abd74ea6c1" />

### Run frontend

```bash
cd SalaryCalculatorUI/salary_calc_ui
npm install
npm run dev
```

Then open the local dev URL shown in the terminal (typically `http://localhost:5173`).

### Build frontend

```bash
cd SalaryCalculatorUI/salary_calc_ui
npm run build
```

## Project Structure

- `SalaryCalculatorApi/salary_calc_api` — Spring Boot backend source
- `SalaryCalculatorUI/salary_calc_ui` — Vite + React frontend source

---

## 📈 Future Enhancements

* 📍 Location-based tax rules (India states)
* 🧾 Support for deductions (80C, 80D, etc.)
* 📊 UI dashboard for visualization
* 🔐 Authentication & rate limiting
* 🤖 AI-based tax optimization suggestions

---
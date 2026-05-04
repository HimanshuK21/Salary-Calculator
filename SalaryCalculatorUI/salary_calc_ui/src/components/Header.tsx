export const Header = () => {
  return (
    <div className="app-header-section">
      <h1 className="salary-calculator-title">Salary Calculator</h1>
      <SubHeading />
    </div>
  )
}

const SubHeading = () => {
  return (
    <p className="salary-calculator-subtitle">
      Calculate your annual, quarterly, and monthly in-hand salary and applicable taxes
    </p>
  );
}
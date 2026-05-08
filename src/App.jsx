export default function App() {
  const employees = [
    { name: 'John Doe', role: 'Backend Engineer' },
    { name: 'Alice Smith', role: 'Frontend Engineer' },
    { name: 'Mike Johnson', role: 'DevOps Engineer' }
  ];

  return (
    <div className="container">
      <h1>Employee Portal</h1>

      <div className="card-grid">
        {employees.map((emp, index) => (
          <div className="card" key={index}>
            <h2>{emp.name}</h2>
            <p>{emp.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
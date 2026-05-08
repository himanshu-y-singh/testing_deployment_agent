export default function App() {
 const employees = [
 { name: 'John Doe', role: 'Backend Engineer' },
 { name: 'Alice Smith', role: 'Frontend Engineer' },
 { name: 'Mike Johnson', role: 'DevOps Engineer' }
 ];

 return (
 <div className="container">

Employee Portal

 <div className="card-grid">
 {employees.map((emp, index) => (
 <div className="card" key={index}>

{emp.name}

{emp.role}

 
 ))}
 
 
 );
}
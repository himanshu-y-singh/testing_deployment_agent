export default function App() {
  const foods = [
    { name: 'Burger', price: '$10' },
    { name: 'Pizza', price: '$15' },
    { name: 'Pasta', price: '$12' }
  ];

  return (
    <div className="container">
      <h1>Food Delivery App</h1>

      <div className="food-grid">
        {foods.map((food, index) => (
          <div className="food-card" key={index}>
            <h2>{food.name}</h2>
            <p>{food.price}</p>
            <button>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
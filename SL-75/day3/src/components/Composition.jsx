import Card from "./Card.jsx";

const Composition = () => {
  return (
    <div>
      <h2>Composition Example</h2>

      <Card title="Greeting Card">
        <h4>Hello Sonali 👋</h4>
        <p>No props drilling here</p>
      </Card>
    </div>
  );
};

export default Composition;

import Child from "./Child";

const Middle = ({ user }) => {
  return (
    <div className="box">
      <p>Middle Component</p>
      <Child user={user} />
    </div>
  );
};

export default Middle;

import Parent from "./props-drilling/parent";
import UserContainer from "./refactored/UserContainer";

import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-3xl font-bold text-center mb-8">Props Drilling vs Refactored Components</h1>

    <div className="grid md:grid-cols-2 gap-6">
        
    <div className="bg-white shadow-lg rounded-xl p-5">
    <h2 className="text-xl font-semibold mb-4 text-blue-600">Props Drilling</h2>
          <Parent name="Lucky" />
        </div>

        
        <div className="bg-white shadow-lg rounded-xl p-5">
        <h2 className="text-xl font-semibold mb-4 text-green-600">Refactored Components</h2>
          <UserContainer />
      
        </div>
      </div>
    </div>
  );
}

export default App;

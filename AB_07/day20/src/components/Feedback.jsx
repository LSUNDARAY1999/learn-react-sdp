import { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted (mock)");
    setFeedback("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-3">
        Sprint Feedback
      </h3>

      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border rounded p-2 mb-3"
          placeholder="Enter feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;

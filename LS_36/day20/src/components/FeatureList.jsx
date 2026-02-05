const features = [
  "Authentication UI (Login / Logout)",
  "Mock API Integration",
  "Real-time Notification UI",
  "Responsive Layout with Tailwind",
];

const FeatureList = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">
        Sprint Deliverables
      </h3>

      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;

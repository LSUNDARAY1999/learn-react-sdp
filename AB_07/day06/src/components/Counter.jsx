import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-80 text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Redux Counter
        </h1>

        <p className="text-4xl font-semibold text-blue-600 mb-6">
          {count}
        </p>

        <div className="flex justify-between gap-3">
          <button
            onClick={() => dispatch(increment())}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
          >
            Increment
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
          >
            Decrement
          </button>
        </div>

        <button
          onClick={() => dispatch(reset())}
          className="mt-4 w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

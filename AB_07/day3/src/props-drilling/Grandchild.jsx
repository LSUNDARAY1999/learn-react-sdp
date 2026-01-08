const Grandchild = ({name}) => {
  return (
    <div className="border border-blue-100 rounded-lg p-4 mt-3 bg-blue-50">
    <h5 className="font-medium text-blue-700">GrandChild</h5>
    <p className="text-gray-700">User Name: {name}</p>
    </div>
  )
}

export default Grandchild

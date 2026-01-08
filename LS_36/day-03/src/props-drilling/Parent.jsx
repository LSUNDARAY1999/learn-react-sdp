import Child from "./child";

function Parent({name}) {

    return(
        <div className="border border-blue-300 rounded-lg p-4 mb-3">
        <h3 className="font-semibold text-blue-500">Parent</h3>
        <Child name={name}/>
        </div>
    );
}

export default Parent;
import GrandChild from "./Grandchild"

function Child({name}) {

    return(
        <div className="border border-blue-200 rounded-lg p-4 mt-3">
        <h4 className="font-medium text-blue-400">Child</h4>
        <GrandChild name={name}/>
        </div>
    )
}

export default Child;
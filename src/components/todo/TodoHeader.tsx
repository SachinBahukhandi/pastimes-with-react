import Header from "../../interfaces/TodoHeader";


export default function TodoHeader(props: Header) {
    const color = `bg-${props.color}-300`;
    console.log(color);
    return <div className="mt-2 mr-1 ml-1 p-4 border-2">
        <div className="flex">
            <div className={`flex-none ${color} rounded-full h-1 w-1 p-2 mt-1`}></div>
            <div className="flex-auto ml-2">{props.title}</div>
        </div>
    </div>
}
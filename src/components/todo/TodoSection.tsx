import Header from "../../interfaces/TodoHeader";
import TodoBody from "./TodoBody";
import Todo from '../../interfaces/Todo';

let items= Array.from(Array(9).keys());

let TodoCards: Array<JSX.Element> = [];
items.forEach((item)=>{
    let card = {
        id: item,
        name: "sachin",
        description: "Hello World!"
    };
    TodoCards.push(<TodoBody {...card} />);
});

export default function TodoSection(props: Header) {
    return <div className="mt-2 mr-1 ml-1 p-4">
        <div className="flex">
            <div className="flex-none rounded-full h-1 w-1 p-2 mt-1" style={{ backgroundColor: props.color }}></div>
            <div className="flex-auto ml-2">{props.title}</div>
        </div>
        {TodoCards}
        {/* <div className="grid grid-cols-9">
                {TodoCards}
        </div> */}
    </div>
}
import TodoHeader from "./TodoSection";

export default function TodoComponent() {
    return <div className="grid grid-cols-3 divide-x min-h-full h-screen">
        <TodoHeader title="Todo" color='red' />
        <TodoHeader title="In Progress" color='yellow' />
        <TodoHeader title="Done" color='green' />
    </div>;
}
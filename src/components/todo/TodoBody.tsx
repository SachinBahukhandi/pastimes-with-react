import Todo from "../../interfaces/Todo";

export default function TodoBody(props: Todo) {
    return <div className="grid grid-cols-1 bg-white h-40 mt-1 rounded pt-2 px-2">
        <h3>NFT Collections</h3>
        <p>Wed, 12 Jun - Thu, 31 Mar</p>
        <div className="flex flex-row">
            <div className="flex flex-auto bg-red-50 m-2 rounded-xl items-center justify-center">Tag 1</div>
            <div className="flex flex-auto bg-red-50 m-2 rounded-xl items-center justify-center">Tag 2</div>
            <div className="flex flex-auto bg-red-50 m-2 rounded-xl items-center justify-center">Tag 1</div>
            <div className="flex flex-auto bg-red-50 m-2 rounded-xl items-center justify-center">Tag 1</div>
            <div className="flex flex-auto bg-red-50 m-2 rounded-xl items-center justify-center">Tag 1</div>
            <div className="flex flex-auto bg-red-50 m-2 rounded-xl items-center justify-center">Tag 1</div>
            <div className="flex flex-auto bg-red-50 m-2 rounded-xl items-center justify-center">Tag 1</div>
            <div className="flex flex-auto bg-red-50 m-2 rounded-xl items-center justify-center">Tag 1</div>
            <div className="flex flex-auto bg-red-50 m-2 rounded-xl items-center justify-center">Tag 1</div>
        </div>
    </div>;
}
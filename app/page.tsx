import { getTodos } from "@/lib/todos";
import { TodoItem } from "@/components/TodoItem";
import NewTodoForm from "./components/NewTodoForm";



export default async function Home() {
const {todos} = await getTodos()
  return (
    <section className="py-20">
     <div className="container">
      <h1 className="mb-10 w-fit bg-slate-100 px-2 text-4xl font-bold">Todos</h1>
      <NewTodoForm/>
      <h2 className="mt-2 border-b pb-2 text-xl">Previous todos:</h2>
      <ul className="mt-4 flex flex-col gap-1">
        {todos?.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
     </div>
    </section>
     );
}


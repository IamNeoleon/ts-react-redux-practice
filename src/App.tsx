import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTasks } from "./redux/slices/tasksSlice";

import { TTask } from "./@types/task";
import { RootState } from "./redux/store";

import Task from "./components/Task/Task";

function App() {
   const tasks = useSelector((state: RootState) => state.tasks.tasks)
   const dispatch = useDispatch();

   async function fetchData<T>(url: string): Promise<T[]> {
      const response = await axios.get(url)

      if (!Array.isArray(response.data)) {
         throw new Error('Вернулись другой тип данных, а не массив')
      }

      return response.data as T[]
   }

   const getTasks = async () => {
      const tasksResponse = await fetchData<TTask>('https://67e3640f2219ffdd.mokky.dev/todo-list');

      return tasksResponse;
   }

   useEffect(() => {
      const fetchAndSetTasks = async () => {
         const tasks = await getTasks();
         dispatch(setTasks(tasks));
      };

      fetchAndSetTasks();
   }, [])

   return (
      <>
         <div className="wrapper">
            <ul className="tasks__list">
               {tasks.map((task) => <Task key={task.id} title={task.title} completed={task.completed} />)}
            </ul>
         </div>
      </>
   )
}

export default App

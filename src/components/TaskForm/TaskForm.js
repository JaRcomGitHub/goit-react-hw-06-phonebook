// Импортируем хук
import { useDispatch } from "react-redux";

// Импортируем генератор экшена
import { addTask } from "../../redux/actions";

export const TaskForm = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // Вызываем генератор экшена и передаем текст задачи для поля payload
    // Отправляем результат - экшен создания задачи
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };
    
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Enter task text..." />
      <button type="submit">Add task</button>
    </form>
  );
};

import classes from "./TodoItem.module.css";

export const TodoItem: React.FC<{ text: string; removeTodo: () => void }> = (
  props
) => {
  const handleRemoveTodo = () => {
    props.removeTodo();
  };
  return (
    <li onClick={handleRemoveTodo} className={classes.item}>
      {props.text}
    </li>
  );
};

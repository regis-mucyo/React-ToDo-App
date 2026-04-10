import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
interface ButtonProps {
  id: number;
  handleDelete(id: number): void;
}
const Button = ({ id, handleDelete }: ButtonProps) => {
  return (
    <>
      <button
        onClick={() => handleDelete(id)}
        className="text-sm ml-1 p-1 rounded-2xl"
      >
        <span className="p-2.5 rounded-3xl bg-gray-100 relative bottom-2">
          <FontAwesomeIcon icon={faTrash} size="lg" className="text-red-600" />
        </span>
      </button>
    </>
  );
};
export default Button;

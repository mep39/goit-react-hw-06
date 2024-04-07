import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { BiSolidPhone } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrap}>
      <div className={css.info}>
        <p className={css.text}>
          <BiSolidUser />
          {name}
        </p>
        <p className={css.text}>
          <BiSolidPhone />
          {number}
        </p>
      </div>

      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

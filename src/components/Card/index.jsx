import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

function Card(props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/products/id", { state: { data: props.data } });
  }

  return (
    <div onClick={handleClick} className={style.card}>
      <img
        src={props.data.attributes.image}
        alt="avant-garde lamp"
        className={`rounded-xl h-64 md:h-48 w-full object-cover ${style.img}`}
      ></img>
      <div className="card-body items-center text-center mt-4">
        <h2 className={`card-title capitalize tracking-wide ${style.tracking}`}>
          {props.data.attributes.title}
        </h2>
        <span className="text-secondary">${props.data.attributes.price}</span>
      </div>
    </div>
  );
}

export default Card;

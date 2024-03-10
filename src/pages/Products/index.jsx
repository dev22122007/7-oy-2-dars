import style from "./style.module.css";
import useFetch from "../../hooks/function";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import { NavLink } from "react-router-dom";

function Products() {
  const message = useFetch(
    "https://strapi-store-server.onrender.com/api/products"
  );

  console.log(message);
  return (
    <div className="container-fluid container-lg">
      <Filter></Filter>

      <div className="card-wrapper">
        <header className={style.header}>
          <div className={style.products}>
            <p>22 products</p>

            <span className={style.productsIcon}>
              <NavLink to={"#"}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
                </svg>
              </NavLink>
              <NavLink to={"#"}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  ></path>
                </svg>
              </NavLink>
            </span>
          </div>
        </header>

        <div className={style.cardWrap}>
          {message.loading ? (
            <div
              className={`spinner-border text-primary ${style.spinner}`}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            message.data &&
            message.data.data.map((el, index) => {
              return <Card key={index} data={el}></Card>;
            })
          )}
        </div>
        <div className={` mt-16 d-flex justify-content-end`}>
          <div className={`join ${style.justify}`}>
            <button className="btn btn-xs sm:btn-md join-item">Prev</button>
            <button className="btn btn-xs sm:btn-md border-none join-item ">
              1
            </button>
            <button className="btn btn-xs sm:btn-md border-none join-item ">
              2
            </button>
            <button className="btn btn-xs sm:btn-md border-none join-item bg-base-300 border-base-300 ">
              3
            </button>
            <button className="btn btn-xs sm:btn-md join-item">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

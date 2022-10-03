import "../styles/Categories.css";
import { plantList } from "../datas/plantList";
import { useDispatch, useSelector } from "react-redux";


function Categories() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  const cat = useSelector((state) => state.cat);
  const dispatch = useDispatch();


  return (
    <div className="lmj-categories">
      <h5><b>Catégories</b></h5>
      <select
        value={cat}
        onChange={(e) =>
          dispatch({
            type: "cat/changeCategory",
            payload: e.target.value,
          })
        }
        className="lmj-categories-select form-select"
      >
        <option value="">Toutes catégories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Categories;

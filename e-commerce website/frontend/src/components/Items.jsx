import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div className="flex flex-col cursor-pointer hover:scale-[1.03] duration-300 space-y-4 ring-2 ring-red-400 p-4 rounded-t-xl">
      <Link to={`/product/${item.id}`}>
        <img src={item.image} alt={item.name} className="rounded-t-xl" />
      </Link>
      <h2 className="font-bold">{item.name}</h2>
      <p className="font-bold flex flex-row space-x-2">
        <p className="line-through font-normal mr-2">${item.new_price}</p> - $
        {item.old_price}
      </p>
    </div>
  );
}

export default Item;

/* eslint-disable react/jsx-pascal-case */
import new_collections from "./Ecommerce_Assets (1)/Assets/Frontend_Assets/new_collections";
import Item from "./Items";

function NewColl() {
  return (
    <div className="flex flex-col py-5 justify-center items-center">
      <p className="border-b-4 pb-5 mb-10 border-black  text-5xl">
        NEW COLLECTION
      </p>
      <hr />
      <div className="grid grid-cols-4 gap-4 mx-10 gap-y-8">
        {new_collections.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default NewColl;

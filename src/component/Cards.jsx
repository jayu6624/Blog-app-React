// import React from "react";

// function Cards({item}) {
//   console.log("Item for card:", null);

//   return (
//     <>
//       <div className="card w-96 bg-base-100 shadow-xl m-auto">
//         <figure>
//           <img
//             className="h-auto max-w-lg rounded-lg"
//             src={item.imageUrl} // Update src attribute with item.imageUrl
//             alt={item.name} // Add alt attribute for accessibility
//           />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">
//             {item.name}
//             <div className="badge badge-secondary p-1 text-sm">NEW</div>
//           </h2>
//           <p>{item.dis}</p>
//           <div className="card-actions space-x-screen-3">
//             <div className="bg-pink-500 p-3 rounded-xl items-start">{item.price}</div>
//             <div className="bg-pink-500 p-3 rounded-xl relative justify-end">Buy Now</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;

import React from "react";

function Cards({ item }) {
  console.log(item);
  return (
    <div className="p-4 transform transition duration-500 hover:scale-105">
      <div className="card w-96 bg-base-100 shadow-xl m-auto mt-4 border border-white">
        <figure>
          <img src={item.image} alt={item.name} className="aspect-square rounded-lg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold text-white">{item.Title}</h2>
          <p className="text-gray-400">{item.dis}</p>
          <div className="card-actions flex justify-between items-center mt-4">
            <div className="bg-pink-500 p-3 rounded-xl text-white">
              {item.price}
            </div>
            <div className="bg-pink-500 p-3 rounded-xl text-white cursor-pointer">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

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
    <div>
      <div className="card w-96 bg-base-100 shadow-xl m-auto">
        <figure>
          <img src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.Title}</h2>
          <p>{item.dis}</p>
          <div className="card-actions space-x-screen-3">
            <div className="bg-pink-500 p-3 rounded-xl items-start">
              {item.price}
            </div>{" "}
            <div className="bg-pink-500 p-3 rounded-xl relative justify-end">
              Buy Now
            </div>
          </div>
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

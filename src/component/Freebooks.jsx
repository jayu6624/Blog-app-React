// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import Cards from "./Cards.jsx";

// function Freebooks() {
//   const list = [
//     {
//       id: 1,
//       name: "Storybook",
//       Title: "Jumboo a strongest ELephant ",
//       catagary: "free",
//       price: 0,
//       image:
//         "https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1718021711~exp=1718025311~hmac=548e448778ed0435c3beab1eb4e5437dd88b8a53f0142a95354e3314285c40cc&w=900",
//     },
//     {
//       id: 2,
//       name: "Historicbook",
//       Title: "About our iron men ",
//       catagary: "free",
//       price: 0,
//       image:
//         "https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1718021711~exp=1718025311~hmac=548e448778ed0435c3beab1eb4e5437dd88b8a53f0142a95354e3314285c40cc&w=900",
//     },
//     {
//       id: 3,
//       name: "shiva",
//       Title: "samll stories  ",
//       catagary: "free",
//       price: 0,
//       image:
//         "https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1718021711~exp=1718025311~hmac=548e448778ed0435c3beab1eb4e5437dd88b8a53f0142a95354e3314285c40cc&w=900",
//     },
//     {
//       id: 4,
//       name: "sports",
//       Title: "samll stories  ",
//       catagary: "free",
//       price: 0,
//       image:
//         "https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1718021711~exp=1718025311~hmac=548e448778ed0435c3beab1eb4e5437dd88b8a53f0142a95354e3314285c40cc&w=900",
//     },
//     {
//       id: 5,
//       name: "sports",
//       Title: "samll stories  ",
//       catagary: "free",
//       price: 0,
//       image:
//         "https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1718021711~exp=1718025311~hmac=548e448778ed0435c3beab1eb4e5437dd88b8a53f0142a95354e3314285c40cc&w=900",
//     },
//     {
//       id: 6,
//       name: "sports",
//       Title: "samll stories  ",
//       catagary: "free",
//       price: 0,
//       image:
//         "https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1718021711~exp=1718025311~hmac=548e448778ed0435c3beab1eb4e5437dd88b8a53f0142a95354e3314285c40cc&w=900",
//     },
//   ];
//   const filterData = list.filter((data) => data.catagary === "free");
//   console.log(data);

//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 space-y-4 mt-7">
//       <div>
//         <h1 className="text-white font-bold">Free offered Books</h1>
//         <p>
//           Welcome to BookMart, your ultimate destination for discovering and
//           sharing books! Whether you're an avid reader seeking new
//           recommendations, a reviewer looking to share your thoughts, or a
//           casual browser in search of your next great read, BookMart has
//           something for everyone. Our platform connects book lovers from around
//           the world, fostering a vibrant community where you can explore diverse
//           genres, find personalized suggestions, and engage in meaningful
//           discussions.
//         </p>
//       </div>
//       <div>
//         <Slider {...settings}>
//           {filterData.map((item) => {
//             <Cards item={item} key={item.id} />;
//             // console.log(item);
//           })}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default Freebooks;

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards.jsx";

function Freebooks() {
  const list = [
    {
      id: 1,
      name: "Science Fiction",
      Title: "Space science ",
      catagary: "free",
      price: "$20.99",
      image:
        "https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg",
      dis: "Science fiction (sci-fi) explores futuristic ideas and advanced technology. It features space travel, robots, and AI, imagining future impacts on society and exploring alternate realities and dystopias.",
    },
    {
      id: 2,
      name: "Historicbooks",
      Title: "About our iron men",
      catagary: "free",
      price: "$10.99",
      image:
        "https://cdn.britannica.com/09/200809-050-30C0B865/Vallabhbhai-Patel.jpg",
      dis: "Science fiction (sci-fi) explores futuristic ideas and advanced technology. It features space travel, robots, and AI, imagining future impacts on society and exploring alternate realities and dystopias.",
    },
    {
      id: 3,
      name: "Shiva",
      Title: "Mythology",
      catagary: "free",
      price: "$21.99",
      image:
        "https://cdn.pixabay.com/photo/2024/03/23/16/34/ai-generated-8651561_640.jpg",
      dis: "Science fiction (sci-fi) explores futuristic ideas and advanced technology. It features space travel, robots, and AI, imagining future impacts on society and exploring alternate realities and dystopias.",
    },
    {
      id: 4,
      name: "Storybooks",
      Title: "Jumboo",
      catagary: "free",
      price: "$17.99",
      image:
        "https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg",
      dis: "Science fiction (sci-fi) explores futuristic ideas and advanced technology. It features space travel, robots, and AI, imagining future impacts on society and exploring alternate realities and dystopias.",
    },
    {
      id: 5,
      name: "sports",
      Title: "small stories",
      catagary: "free",
      price: "20.99",
      image:
        "https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg",
      dis: "Science fiction (sci-fi) explores futuristic ideas and advanced technology. It features space travel, robots, and AI, imagining future impacts on society and exploring alternate realities and dystopias.",
    },
    {
      id: 6,
      name: "sports",
      Title: "small stories",
      catagary: "free",
      price: "$12.22",
      image:
        "https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg",
      dis: "Science fiction (sci-fi) explores futuristic ideas and advanced technology. It features space travel, robots, and AI, imagining future impacts on society and exploring alternate realities and dystopias.",
    },
  ];

  const filterData = list.filter((data) => data.catagary === "free");
  console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 space-y-4 mt-7  mb-7">
      <div>
        <h1 className="text-white text-xl font-bold">Free offered Books</h1>
        <p className="mt-4 text-white">
          Welcome to BookMart, your ultimate destination for discovering and
          sharing books! Whether you're an avid reader seeking new
          recommendations, a reviewer looking to share your thoughts, or a
          casual browser in search of your next great read, BookMart has
          something for everyone. Our platform connects book lovers from around
          the world, fostering a vibrant community where you can explore diverse
          genres, find personalized suggestions, and engage in meaningful
          discussions.
        </p>
      </div>
      <div className="mt-7">
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebooks;

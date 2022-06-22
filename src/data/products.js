import mixer2Image from "../assets/mixer2.jpeg";
import mixer3Image from "../assets/mixer3.jpeg";
import count1Image from "../assets/kettle2.jpg";
import phone1Image from "../assets/phone.jpeg";
import phone2Image from "../assets/phone1.jpeg";
import phone3Image from "../assets/phone2.jpeg";
import mixerImage from "../assets/nay.jpeg";
import cameraImage from "../assets/camera.jpeg";
import laptopImage from "../assets/laptop.jpeg";

const products = [
  {
    image: mixer3Image,
    productId: "logo",
    categoryId: "Women",
    title: "Nike logo ",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: <h2>3999</h2>,
  },
  {
    image: mixer2Image,
    productId: "Jordan",
    categoryId: "Women",
    title: "Jordan Nike",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: <h2>4999</h2>,
  },

  {
    image: mixerImage,
    productId: "RU",
    categoryId: "Women",
    title: "Nike RU",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price:<h2> 2999</h2>,
  },
  {
    image: phone1Image,
    productId: "Male",
    categoryId: "Men",
    title: "Nike Male",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: <h2>5999</h2>,
  },
  {
    image: phone2Image,
    productId: "Blazer Mix",
    categoryId: "Men",
    title: "Nike Blazer Mix",
    description: `    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: <h2>6699</h2>,
  },
  {
    image: phone3Image,
    productId: "SA",
    categoryId: "Men",
    title: "Nike ",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: <h2>2399</h2>,
  },
  {
    image: count1Image,
    productId: "White air max",

    categoryId: "Max",
    title: "Nike white air max",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: <h2>4999</h2>,
  },
  {
    image: laptopImage,
    productId: "Black air max",

    categoryId: "Max",
    title: "Nike black air max",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: <h2>3299</h2>,
  },
  {
    image: cameraImage,
    productId: "Black-white air max",

    categoryId: "Max",
    title: "Nike black-white air max",
    description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: <h2>1299</h2>,
  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter((product) => product.categoryId === categoryId);
  }
  return products;
}

export function getProduct(productId) {
  return products[
    products.findIndex((product) => product.productId === productId)
  ];
}

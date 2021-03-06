import min2Image from "../assets/mixer2.jpeg";
import min3Image from "../assets/mixer3.jpeg";
import count1Image from "../assets/kettle2.jpg";
import phone1Image from "../assets/phone.jpeg";
import phone2Image from "../assets/phone1.jpeg";
import phone3Image from "../assets/phone2.jpeg";
import minImage from "../assets/nay.jpeg";
import cameraImage from "../assets/camera.jpeg";
import laptopImage from "../assets/laptop.jpeg";
import menImage from "../assets/men.jpeg";
import maxImage from "../assets/max.jpeg";
import womenImage from "../assets/women.jpeg";

const products = [
  {
    image: min3Image,
    productId: "logo",
    categoryId: "Women",
    title: "Nike logo ",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 3999,
  },
  {
    image: min2Image,
    productId: "Jordan",
    categoryId: "Women",
    title: "Jordan Nike",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 4399,
  },

  {
    image: minImage,
    productId: "RU",
    categoryId: "Women",
    title: "Nike RU",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 2999,
  },
  {
    image: phone1Image,
    productId: "Male",
    categoryId: "Men",
    title: "Nike Male",
    description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 5099,
  },
  {
    image: phone2Image,
    productId: "Blazer Mix",
    categoryId: "Men",
    title: "Nike Blazer Mix",
    description: `    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 6099,
  },
  {
    image: phone3Image,
    productId: "SA",
    categoryId: "Men",
    title: "Nike ",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 2399,
  },
  {
    image: count1Image,
    productId: "White air max",

    categoryId: "Max",
    title: "Nike white air max",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 2999,
  },
  {
    image: laptopImage,
    productId: "Black air max",

    categoryId: "Max",
    title: "Nike black air max",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 3299,
  },
  {
    image: cameraImage,
    productId: "Black-white air max",

    categoryId: "Max",
    title: "Nike air max RU",
    description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 2560,
  },
  {
    image: womenImage,
    productId: "Max",

    categoryId: "Women",
    title: "Nike Women",
    description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 1299,
  },
  {
    image: menImage,
    productId: "Men",

    categoryId: "Men",
    title: "Nike Men",
    description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 1399,
  },
  {
    image: maxImage,
    productId: "Tr23",

    categoryId: "Max",
    title: "Nike max",
    description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 1500,
  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter((product) => product.categoryId === categoryId);
  }

  return products;
}

// dark-roast
export function getProduct(productId) {
  return products[
    products.findIndex((product) => product.productId === productId)
  ];
}

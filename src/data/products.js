import mixer2Image from "../assets/mixer2.jpeg";
import mixer3Image from "../assets/mixer3.jpeg";
import count1Image from "../assets/kettle2.jpg";
import phone1Image from "../assets/phone.jpeg"
import phone2Image from "../assets/phone1.jpeg"
import phone3Image from "../assets/phone2.jpeg"
import mixerImage from "../assets/nay.jpeg"
import cameraImage from "../assets/camera.jpeg"
import laptopImage from "../assets/laptop.jpeg"

const products = [
  {
    image: mixer3Image,
    productId: "Airpods",
    categoryId: "stand-mixers",
    title: "Wireless Headphones",
    description: ``,
    price: 6999,
  },
  {
    image: mixer2Image,
    productId: "Earphone",
    categoryId: "stand-mixers",
    title: "Headphones",
    description: ` `,
    price: 7999,
  },

  {
    image: mixerImage,
    productId: "Headphones",
    categoryId: "stand-mixers",
    title: "Earphones",
    description: ``,
    price: 2999,
  },
  {
    image: phone1Image,
    productId: "iPhones 13",
    categoryId: "major-appliances",
    title: "IPhone ",
    description: ` `,
    price: 9999,
  },
  {
    image: phone2Image,
    productId: "Samsung",
    categoryId: "major-appliances",
    title: "Samsung ",
    description: ` `,
    price: 6699,
  },
  {
    image: phone3Image,
    productId: "Vivo",
    categoryId: "major-appliances",
    title: "Vivo ",
    description: ` `,
    price: 2399,
  },
  {
    image: count1Image,
    productId: "TV Samsung",

    categoryId: "countertop-appliances",
    title: "TV ",
    description: ``,
    price: 4999,
  },
  {
    image: laptopImage,
    productId: "Laptop",

    categoryId: "countertop-appliances",
    title: "Laptop ",
    description: ``,
    price: 3299,
  },
  {
    image: cameraImage,
    productId: "Camera",

    categoryId: "countertop-appliances",
    title: "Camera ",
    description: '',
    price: 1299,
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
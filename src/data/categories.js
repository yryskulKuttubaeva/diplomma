import laptopImage from "../assets/blender.jpeg";
import phoneImage from "../assets/microwave.jpeg";
import naysImage from "../assets/mixer.jpg";
import headerImage from "../assets/countertop1.webp";
import headerImage2 from "../assets/majorheader.jpeg";
import headerImage3 from "../assets/mixerheader.jpeg";

const categories = [
  {
    categoryId: "countertop-appliances",
    title: "Laptop",
    title2: "lorem ipsum dolar",
    image: laptopImage,
    headerImage: headerImage,
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur obcaecati praesentium officia quia autem, veritatis accusantium veniam ad suscipit vitae amet magni ipsam perferendis sed, unde vel. Magni, incidunt?.",
  
  },
  {
  
    categoryId: "major-appliances",
    title: "Phones",
    image: phoneImage,
    headerImage: headerImage2,
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur obcaecati praesentium officia quia autem, veritatis accusantium veniam ad suscipit vitae amet magni ipsam perferendis sed, unde vel. Magni, incidunt?",
    
  },
  {
  
    categoryId: "stand-mixers",
    title: "Tablet",
    image: naysImage,
    headerImage: headerImage3,
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur obcaecati praesentium officia quia autem, veritatis accusantium veniam ad suscipit vitae amet magni ipsam perferendis sed, unde vel. Magni, incidunt?",
    
  },
 

];

export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.findIndex((category) => category.categoryId === categoryId)
  ];
}
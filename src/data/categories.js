import countImage from "../assets/blender.jpeg";
import majorImage from "../assets/microwave.jpeg";
import mixersImage from "../assets/mixer.jpg";
import headerImage from "../assets/countertop1.webp";
import headerImage2 from "../assets/majorheader.jpeg";
import headerImage3 from "../assets/mixerheader.jpeg";

const categories = [
  {
    
    categoryId: "countertop-appliances",
    title: "Countertop appliances",
    title2: "lorem ipsum dolar",
    image: countImage,
    headerImage: headerImage,
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur obcaecati praesentium officia quia autem, veritatis accusantium veniam ad suscipit vitae amet magni ipsam perferendis sed, unde vel. Magni, incidunt?.",
  
  },
  {
  
    categoryId: "wreless headphones",
    title: "wreless headphones",
    image: majorImage,
    headerImage: headerImage2,
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur obcaecati praesentium officia quia autem, veritatis accusantium veniam ad suscipit vitae amet magni ipsam perferendis sed, unde vel. Magni, incidunt?",
    
  },
  {
  
    categoryId: "stand-mixers",
    title: "Stand mixers",
    image: mixersImage,
    headerImage: headerImage3,
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur obcaecati praesentium officia quia autem, veritatis accusantium veniam ad suscipit vitae amet magni ipsam perferendis sed, unde vel. Magni, incidunt?",
    
  },
 

];

export function getCategories() {
  return categories;
}

// dark-roast
export function getCategory(categoryId) {
  return categories[
    categories.findIndex((category) => category.categoryId === categoryId)
  ];
}
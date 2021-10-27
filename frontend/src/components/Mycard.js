import { Card } from "./card/card";


 export function mycard() {
  const products = [
    {
      name: "pepsi",
      description: "cool drink",
      image: "",
      brand: "",
      price: 5,
      category: "drink",
      countingStock: 5,
      rating: 5,
      isFeatured: true,
    },
    {
      name: "fanta",
      description: "cool drink",
      image: "",
      brand: "",
      price: 5,
      category: "drink",
      countingStock: 6,
      rating: 4,
      isFeatured: true,
    },
    {
      name: "sprite",
      description: "cool drink",
      image: "",
      brand: "",
      price: 3,
      category: "drink",
      countingStock: 2,
      rating: 4,
      isFeatured: true,
    },
    {
      name: "cofe",
      description: "hot drink",
      image: "",
      brand: "",
      price: 5,
      category: "drink",
      countingStock: 10,
      rating: 1,
      isFeatured: true,
    },
    {
      name: "water",
      description: "drink",
      image: "",
      brand: "",
      price: 1,
      category: "drink",
      countingStock: 50,
      rating: 5,
      isFeatured: false,
    },
  ];
  return (
    <div className="container mydiv">
    <div className="row">
      {products.map((product, index) => (
        <Card
          key={index}
          name={product.name}
          description={product.description}
          price={product.price}
          category={product.category}
          countingStock={product.countingStock}
          rating={product.rating}
          isFeatured={product.isFeatured}
        />
      ))}
    </div>
    </div>
  );
}

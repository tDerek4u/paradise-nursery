import { useEffect, useState } from "react";
import Container from "./Container";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductByCategory = () => {
  const { cat } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProductsByCat = async () => {
    try {
      setLoading(true);
      let response = [];

      switch (cat) {
        case 'AppleTrees':
          response = [
            {
              "id": 1,
              "title": "Granny Smith Apple",
              "price": 120,
              "description": "A crisp, tart apple with a green skin. Perfect for baking and fresh eating. Originally from Australia.",
              "category": "fruit",
              "image": "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg",
              "rating": {
                "rate": 4.8,
                "count": 120
              }
            },
            {
              "id": 2,
              "title": "Fuji Apple",
              "price": 150,
              "description": "A sweet and juicy apple with a dense flesh. Popular for fresh eating. Originally from Japan.",
              "category": "fruit",
              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-AI1uXb6sHOmrE4_ZkbPkCMA0ONCZdxAnw&s",
              "rating": {
                "rate": 4.7,
                "count": 210
              }
            },
            {
              "id": 3,
              "title": "Golden Delicious Apple",
              "price": 130,
              "description": "A sweet, yellow-skinned apple with a soft texture. Great for salads and fresh eating.",
              "category": "fruit",
              "image": "https://www.yates.co.nz/media/plants/fruit-and-citrus/pr-tn-fruit-apple.jpg?rmode=max&ranchor=center&quality=100&width=638&height=626",
              "rating": {
                "rate": 4.5,
                "count": 150
              }
            },
            {
              "id": 4,
              "title": "Red Delicious Apple",
              "price": 140,
              "description": "A mildly sweet, red-skinned apple with a distinctive shape. Ideal for fresh eating.",
              "category": "fruit",
              "image": "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg",
              "rating": {
                "rate": 4.2,
                "count": 180
              }
            },
            {
              "id": 5,
              "title": "New Zealand Apple",
              "price": 160,
              "description": "A versatile apple variety known for its unique flavor and crisp texture. Grown in the pristine orchards of New Zealand.",
              "category": "fruit",
              "image": "https://media.istockphoto.com/id/183422512/photo/fresh-red-apples-on-white-background.jpg?s=612x612&w=0&k=20&c=OmfmcQLh3mwp4pFVQn9Sr2U8VCyIgGtV6fuaDmd3Yrk=",
              "rating": {
                "rate": 4.9,
                "count": 95
              }
            },
            {
              "id": 6,
              "title": "USA Apple",
              "price": 130,
              "description": "A variety of apple known for its perfect balance of sweetness and tartness. Grown in the finest orchards across the USA.",
              "category": "fruit",
              "image": "https://media.istockphoto.com/id/1365099869/photo/six-apples.jpg?s=612x612&w=0&k=20&c=Kx9jNvEET5ERr7oHNFMxroTc54K1Ngk7R1BW9ICX2PU=",
              "rating": {
                "rate": 4.6,
                "count": 110
              }
            }
          ];
          break;
        case 'LemonTrees':
          response = [
            {
              "id": 7,
              "title": "Eureka Lemon",
              "price": 100,
              "description": "A popular lemon variety with a smooth skin and tart flavor. Excellent for culinary uses and juicing.",
              "category": "fruit",
              "image": "https://t4.ftcdn.net/jpg/02/55/39/77/360_F_255397744_rwNCund3WjKsrsv6yKKpK8tzmJ8sYRnF.jpg",
              "rating": {
                "rate": 4.7,
                "count": 140
              }
            },
            {
              "id": 8,
              "title": "Meyer Lemon",
              "price": 120,
              "description": "A cross between a lemon and an orange, offering a sweeter and less acidic flavor. Great for desserts and drinks.",
              "category": "fruit",
              "image": "https://cdn.britannica.com/84/188484-050-F27B0049/lemons-tree.jpg",
              "rating": {
                "rate": 4.8,
                "count": 130
              }
            },
            {
              "id": 9,
              "title": "Lisbon Lemon",
              "price": 110,
              "description": "A hardy lemon variety with a bright yellow skin and tangy taste. Perfect for cooking and garnishing.",
              "category": "fruit",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lemon_-_whole_and_split.jpg/405px-Lemon_-_whole_and_split.jpg",
              "rating": {
                "rate": 4.5,
                "count": 115
              }
            }
          ];
          break;
        case 'LimeTrees':
          response = [
            {
              "id": 10,
              "title": "Key Lime",
              "price": 90,
              "description": "A small lime variety with a strong aroma and tart flavor. Ideal for pies and beverages.",
              "category": "fruit",
              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEqMguWOSrywhDXsUzQMxFqAiGJWijD0G9Gw&s",
              "rating": {
                "rate": 4.6,
                "count": 150
              }
            },
            {
              "id": 11,
              "title": "Persian Lime",
              "price": 95,
              "description": "A large, seedless lime with a mild and juicy flavor. Perfect for cocktails and culinary uses.",
              "category": "fruit",
              "image": "https://sparklingcbd.com/cdn/shop/articles/sliced-lime_1200x1200.jpg?v=1678403300",
              "rating": {
                "rate": 4.7,
                "count": 160
              }
            }
          ];
          break;
        case 'OrangeTrees':
          response = [
            {
              "id": 12,
              "title": "Navel Orange",
              "price": 80,
              "description": "A sweet and seedless orange variety with a thick peel. Great for fresh eating and juicing.",
              "category": "fruit",
              "image": "https://t3.ftcdn.net/jpg/02/01/79/54/360_F_201795443_a16jojvPRiobPC96uO7ePHSNzGVoBLbc.jpg",
              "rating": {
                "rate": 4.9,
                "count": 200
              }
            },
            {
              "id": 13,
              "title": "Valencia Orange",
              "price": 85,
              "description": "A juicy orange variety known for its excellent flavor and high juice content. Perfect for fresh eating and juicing.",
              "category": "fruit",
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/320px-Orange-Fruit-Pieces.jpg",
              "rating": {
                "rate": 4.8,
                "count": 180
              }
            }
          ];
          break;
        default:
          response = [];
          break;
      }

      setProducts(response);
      setLoading(false);
    } catch (error) {
      console.error("Error: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsByCat();
  }, [cat]);

  return (
    <Container>
      <h1 className="font-bold text-center text-3xl mb-10 capitalize">
        Explore {cat} Products
      </h1>

      {loading && (
        <h2 className="text-red-950 text-center">Loading Products...</h2>
      )}
      <div className="products grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products &&
          products
            .slice(0, 8)
            .map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
      </div>
    </Container>
  );
};

export default ProductByCategory;

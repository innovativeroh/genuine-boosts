"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
interface ImageAttachment {
  name: string;
  cloudflare_image_id: string;
}

interface Product {
  id: number;
  uniqid: string;
  title: string;
  description: string;
  price: number;
  image_attachment?: ImageAttachment;
  sellix_product_id: string; // Add the Sellix product ID
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dev.sellix.io/v1/products", {
          headers: {
            Authorization:
              "Bearer TzuvcHcNViFZQbK9x06NYP51j8s9ONV5SKjAS1L1UXLVnv7upnQs2z8jQuKsfTOl"
          }
        });
        setProducts(response.data.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    // Include Sellix's embed script for the purchase button
    const script = document.createElement("script");
    script.src = "https://cdn.sellix.io/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
    <div id="products"></div>
    <div className="max-w-[1200px] m-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 px-4">
        {products.map((product) => {
          const imageUrl = product.image_attachment
            ? `https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${product.image_attachment.cloudflare_image_id}/public`
            : null;

          return (
            <div
              key={product.id}
              className="relative flex flex-col text-white bg-black w-full overflow-hidden rounded-lg shadow-md"
            >
              {/* Product Image */}
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={product.title}
                  width={300}
                  height={150}
                  className="object-cover w-full h-48 rounded-t-lg"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/400/320";
                    e.currentTarget.onerror = null;
                  }}
                />
              )}
              {/* Product Details */}
              <div className="text-left p-4">
                <div>
                  <h2 className="text-sm text-white">{product.title}</h2>
                </div>
                <p className="text-sm block mt-1 text-pink-500">
                  Starting at :{" "}
                  <span>${product.price}</span>
                </p>
              </div>
              <button
                data-sellix-product={product.uniqid}
                type="submit"
                className="bg-blue-500 m-4 p-2 rounded-lg text-pink-500 bg-transparent border-pink-500 border-[1px] font-bold text-sm"
              >
                Purchase
              </button>
              {/* Border Beam Effect */}
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Products;

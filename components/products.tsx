import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const products = [
  {
    id: 1,
    name: "Product 1",
    image: "/images/watch.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Product 2",
    image: "/images/trouser.webp",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Product 3",
    image: "/images/shirt.webp",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const ProductSliderPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center text-white">
        Our Products
      </h1>
      <div id="products" className="container mx-auto py-3 px-4 ">
        <div className="max-w-6xl mx-auto my-8">
          <Swiper
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex items-center">
                    <div>
                      <h2 className="text-3xl font-semibold">{product.name}</h2>
                      <p className="text-gray-500 mt-2">
                        {product.description}
                      </p>
                      <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductSliderPage;

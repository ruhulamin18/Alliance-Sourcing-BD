import Image from "next/image";

interface Product {
  name: string;
  image: string;
}

interface ProductCategory {
  title: string;
  subtitle?: string;
  products: Product[];
}

const productCategories: ProductCategory[] = [
  {
    title: "Knitwear",
    subtitle: "T-Shirt",
    products: [
      {
        name: "Premium Soft Touch V-Neck",
        image: "/products/tshirt-1.jpg",
      },
      {
        name: "Pique Polo Shirt",
        image: "/products/tshirt-2.jpg",
      },
      {
        name: "Urban Style Graphic T-Shirt",
        image: "/products/tshirt-3.jpg",
      },
    ],
  },
  {
    title: "",
    subtitle: "Polo",
    products: [
      {
        name: "Classic Piqué Polo Shirt",
        image: "/products/polo-1.jpg",
      },
      {
        name: "Premium Soft Touch V-Neck",
        image: "/products/polo-2.jpg",
      },
      {
        name: "Sport Dry Polo Shirt",
        image: "/products/polo-3.jpg",
      },
      {
        name: "Urban Style Graphic T-Shirt",
        image: "/products/polo-4.jpg",
      },
    ],
  },
  {
    title: "",
    subtitle: "Hoodie",
    products: [
      {
        name: "Classic Pullover Hoodie",
        image: "/products/hoodie-1.png",
      },
      {
        name: "Zipper Front Fleece Hoodie",
        image: "/products/hoodie-2.png",
      },
      {
        name: "Premium Heavyweight Hoodie",
        image: "/products/hoodie-3.png",
      },
      {
        name: "Streetwear Oversized Hoodie",
        image: "/products/hoodie-4.png",
      },
    ],
  },
  {
    title: "Sweaters",
    subtitle: "Men's Sweaters",
    products: [
      {
        name: "Crew Neck Sweater",
        image: "/products/sweater-1.png",
      },
      {
        name: "V-Neck Sweater",
        image: "/products/sweater-2.png",
      },
      {
        name: "Cardigan Sweater",
        image: "/products/sweater-3.png",
      },
      {
        name: "Turtleneck Sweater",
        image: "/products/sweater-4.png",
      },
    ],
  },
  {
    title: "Woven",
    subtitle: "Five Pocket Twill",
    products: [
      {
        name: "Five Pocket Twill",
        image: "/products/twill-1.png",
      },
      {
        name: "Five Pocket Twill",
        image: "/products/twill-2.png",
      },
      {
        name: "Five Pocket Twill",
        image: "/products/twill-3.png",
      },
      {
        name: "Five Pocket Twill",
        image: "/products/twill-4.png",
      },
      {
        name: "Five Pocket Twill",
        image: "/products/twill-5.png",
      },
    ],
  },
  {
    title: "",
    subtitle: "Ladies Dress & Jackets",
    products: [
      {
        name: "Ladies Dresses",
        image: "/products/ladies-dress-1.png",
      },
      {
        name: "Ladies Dresses",
        image: "/products/ladies-dress-2.png",
      },
      {
        name: "Ladies Jacket",
        image: "/products/ladies-jacket-1.png",
      },
      {
        name: "Ladies Jacket",
        image: "/products/ladies-jacket-2.png",
      },
    ],
  },
];

export function BuyingHouseProducts() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Products
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            Explore our wide range of high-quality products across different
            categories and subcategories.
          </p>
        </div>

        {/* Product Categories */}
        <div className="mt-16 space-y-12">
          {productCategories.map((category, categoryIndex) => (
            <div key={`${category.title}-${category.subtitle}`}>
              {/* Main Category */}
              {category.title && (
                <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                  {category.title}
                </h3>
              )}

              {/* Subcategory */}
              {category.subtitle && (
                <div
                  className={`flex items-center gap-4 ${
                    category.title ? "mt-7" : ""
                  }`}
                >
                  <h4 className="shrink-0 text-lg font-semibold text-slate-900 sm:text-xl">
                    {category.subtitle}
                  </h4>

                  <div className="h-px flex-1 bg-slate-200" />
                </div>
              )}

              {/* Product Grid */}
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {category.products.map((product, index) => (
                  <div
                    key={`${product.name}-${index}`}
                    className="
                      group
                      overflow-hidden
                      rounded-xl
                      border border-slate-200
                      bg-white
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                    "
                  >
                    {/* Product Image */}
                    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-white sm:h-52">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="
                          object-contain
                          p-3
                          transition-transform duration-500
                          group-hover:scale-105
                        "
                      />
                    </div>

                    {/* Product Name */}
                    <div className="px-4 pb-4 pt-2 text-center">
                      <p className="truncate text-xs font-semibold text-slate-700 sm:text-sm">
                        {product.name}
                      </p>

                      {/* Cyan Underline */}
                      <div className="mx-auto mt-2 h-0.5 w-6 bg-cyan-400 transition-all duration-300 group-hover:w-10" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
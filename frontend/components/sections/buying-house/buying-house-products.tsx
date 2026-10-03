"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface Product {
  id: number;
  name: string;
  description: string | null;
  image: string | null;
  category: string | null;
  isActive: boolean;
}

interface ProductCategory {
  title: string;
  products: Product[];
}

export function BuyingHouseProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/api/products`);

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message || "Failed to fetch products"
          );
        }

        setProducts(result.data || []);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Failed to load products"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const productCategories = useMemo<ProductCategory[]>(() => {
    const groupedProducts: Record<string, Product[]> = {};

    products
      .filter((product) => product.isActive)
      .forEach((product) => {
        const category = product.category?.trim() || "Other";

        if (!groupedProducts[category]) {
          groupedProducts[category] = [];
        }

        groupedProducts[category].push(product);
      });

    return Object.entries(groupedProducts).map(
      ([category, products]) => ({
        title: category,
        products,
      })
    );
  }, [products]);

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

        {/* Loading State */}
        {loading && (
          <div className="mt-16 text-center">
            <p className="text-sm text-slate-500">
              Loading products...
            </p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="mt-16 text-center">
            <p className="text-sm text-red-500">
              {error}
            </p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && productCategories.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-sm text-slate-500">
              No products available at the moment.
            </p>
          </div>
        )}

        {/* Product Categories */}
        {!loading && !error && productCategories.length > 0 && (
          <div className="mt-16 space-y-12">
            {productCategories.map((category) => (
              <div key={category.title}>
                {/* Main Category */}
                <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                  {category.title}
                </h3>

                {/* Product Grid */}
                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {category.products.map((product) => (
                    <div
                      key={product.id}
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
                        {product.image ? (
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
                            unoptimized
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-slate-50">
                            <span className="text-xs text-slate-400">
                              No Image
                            </span>
                          </div>
                        )}
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
        )}
      </div>
    </section>
  );
}
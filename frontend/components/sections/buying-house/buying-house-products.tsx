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
  subcategory: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ProductSubcategory {
  title: string;
  products: Product[];
}

interface ProductCategory {
  title: string;
  subcategories: ProductSubcategory[];
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

        // Backend response:
        // { success: true, products: [...] }
        setProducts(result.products || []);
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

  /*
   * Category → Subcategory → Products
   *
   * The backend sends products in createdAt ASC order.
   * We preserve that order here.
   */
  const productCategories = useMemo<ProductCategory[]>(() => {
    const categoryMap = new Map<
      string,
      Map<string, Product[]>
    >();

    products
      .filter((product) => product.isActive)
      .forEach((product) => {
        const category =
          product.category?.trim() || "Other";

        const subcategory =
          product.subcategory?.trim() || "Other";

        if (!categoryMap.has(category)) {
          categoryMap.set(category, new Map());
        }

        const subcategoryMap = categoryMap.get(category)!;

        if (!subcategoryMap.has(subcategory)) {
          subcategoryMap.set(subcategory, []);
        }

        subcategoryMap.get(subcategory)!.push(product);
      });

    return Array.from(categoryMap.entries()).map(
      ([category, subcategoryMap]) => ({
        title: category,
        subcategories: Array.from(
          subcategoryMap.entries()
        ).map(([subcategory, products]) => ({
          title: subcategory,
          products,
        })),
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
            Explore our wide range of high-quality products
            across different categories and subcategories.
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
        {!loading &&
          !error &&
          productCategories.length === 0 && (
            <div className="mt-16 text-center">
              <p className="text-sm text-slate-500">
                No products available at the moment.
              </p>
            </div>
          )}

        {/* Categories */}
        {!loading &&
          !error &&
          productCategories.length > 0 && (
            <div className="mt-16 space-y-16">

              {productCategories.map((category) => (
                <div key={category.title}>

                  {/* Main Category */}
                  <h3 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    {category.title}
                  </h3>

                  <div className="mt-8 space-y-12">

                    {/* Subcategories */}
                    {category.subcategories.map(
                      (subcategory) => (
                        <div
                          key={`${category.title}-${subcategory.title}`}
                        >

                          {/* Subcategory Heading */}
                          <div className="flex items-center gap-4">
                            <h4 className="shrink-0 text-2xl font-semibold text-slate-800">
                              {subcategory.title}
                            </h4>

                            <div className="h-px flex-1 bg-slate-200" />
                          </div>

                          {/* Products */}
                          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

                            {subcategory.products.map(
                              (product) => (
                                <div
                                  key={product.id}
                                  className="
                                    group
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    transition-all
                                    duration-300
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
                                          transition-transform
                                          duration-500
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
                              )
                            )}

                          </div>
                        </div>
                      )
                    )}

                  </div>
                </div>
              ))}

            </div>
          )}
      </div>
    </section>
  );
}
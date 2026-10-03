"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface Product {
  id: number;
  name: string;
  description: string | null;
  image: string | null;
  category: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ProductForm {
  name: string;
  description: string;
  image: string;
  category: string;
  isActive: boolean;
}

const initialForm: ProductForm = {
  name: "",
  description: "",
  image: "",
  category: "",
  isActive: true,
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<ProductForm>(initialForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchProducts = async () => {
    try {
      setError("");

      const response = await fetch(`${API_URL}/api/products`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to fetch products"
        );
      }

      setProducts(result.data);
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

  useEffect(() => {
    fetchProducts();
  }, []);

  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
    setShowForm(false);
  };

  const handleImageUpload = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setError("");
    setSuccess("");
    setUploading(true);

    try {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        throw new Error("Authentication required");
      }

      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(`${API_URL}/api/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to upload image"
        );
      }

      setForm((currentForm) => ({
        ...currentForm,
        image: result.data.url,
      }));

      setSuccess("Image uploaded successfully.");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to upload image"
      );
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (uploading) {
      setError("Please wait until the image upload is complete.");
      return;
    }

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const token = localStorage.getItem("adminToken");

      if (!token) {
        throw new Error("Authentication required");
      }

      const url = editingId
        ? `${API_URL}/api/products/${editingId}`
        : `${API_URL}/api/products`;

      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to save product"
        );
      }

      setSuccess(
        editingId
          ? "Product updated successfully."
          : "Product created successfully."
      );

      resetForm();
      await fetchProducts();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to save product"
      );
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingId(product.id);

    setForm({
      name: product.name,
      description: product.description || "",
      image: product.image || "",
      category: product.category || "",
      isActive: product.isActive,
    });

    setShowForm(true);
    setError("");
    setSuccess("");
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    try {
      setError("");
      setSuccess("");

      const token = localStorage.getItem("adminToken");

      if (!token) {
        throw new Error("Authentication required");
      }

      const response = await fetch(
        `${API_URL}/api/products/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to delete product"
        );
      }

      setSuccess("Product deleted successfully.");

      await fetchProducts();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to delete product"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Products
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Manage the products displayed on your website.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setForm(initialForm);
              setEditingId(null);
              setShowForm(true);
              setError("");
              setSuccess("");
            }}
            className="rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700"
          >
            Add Product
          </button>
        </div>

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {success}
          </div>
        )}

        {showForm && (
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-800">
                  {editingId ? "Edit Product" : "Add Product"}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {editingId
                    ? "Update the product information."
                    : "Add a new product to your website."}
                </p>
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="text-sm font-medium text-slate-500 hover:text-slate-800"
              >
                Cancel
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="product-name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Product Name
                </label>

                <input
                  id="product-name"
                  type="text"
                  value={form.name}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      name: event.target.value,
                    })
                  }
                  placeholder="e.g. Premium Cotton T-Shirt"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="product-category"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Category
                </label>

                <input
                  id="product-category"
                  type="text"
                  value={form.category}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      category: event.target.value,
                    })
                  }
                  placeholder="e.g. Knitwear"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="product-description"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Description
                </label>

                <textarea
                  id="product-description"
                  value={form.description}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      description: event.target.value,
                    })
                  }
                  placeholder="Write a description for this product..."
                  rows={5}
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="product-image"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Product Image
                </label>

                <input
                  id="product-image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 file:mr-4 file:rounded-md file:border-0 file:bg-cyan-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-cyan-700 hover:file:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60"
                />

                {uploading && (
                  <p className="mt-2 text-sm text-cyan-600">
                    Uploading image...
                  </p>
                )}

                {form.image && !uploading && (
                  <div className="mt-4">
                    <p className="mb-2 text-xs font-medium text-slate-500">
                      Image Preview
                    </p>

                    <img
                      src={form.image}
                      alt="Product preview"
                      className="h-32 w-32 rounded-lg border border-slate-200 object-cover"
                    />
                  </div>
                )}
              </div>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      isActive: event.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                />

                <span className="text-sm font-medium text-slate-700">
                  Active product
                </span>
              </label>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={saving || uploading}
                  className="rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : editingId
                      ? "Update Product"
                      : "Create Product"}
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          {loading ? (
            <div className="p-8 text-center text-sm text-slate-500">
              Loading products...
            </div>
          ) : products.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-sm font-medium text-slate-600">
                No products found
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Click &quot;Add Product&quot; to create your first
                product.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1050px]">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Product
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Category
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Description
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="hover:bg-slate-50"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-12 w-12 rounded-lg border border-slate-200 object-cover"
                            />
                          ) : (
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-xs text-slate-400">
                              No Image
                            </div>
                          )}

                          <p className="text-sm font-semibold text-slate-800">
                            {product.name}
                          </p>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                          {product.category || "Uncategorized"}
                        </span>
                      </td>

                      <td className="max-w-[400px] px-6 py-4">
                        <p className="truncate text-sm text-slate-600">
                          {product.description ||
                            "No description"}
                        </p>
                      </td>

                      <td className="px-6 py-4">
                        {product.isActive ? (
                          <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                            Inactive
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              handleEdit(product)
                            }
                            className="rounded-lg border border-cyan-200 px-3 py-2 text-xs font-medium text-cyan-700 transition-colors hover:bg-cyan-50"
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(product.id)
                            }
                            className="rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-600 transition-colors hover:bg-red-50"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
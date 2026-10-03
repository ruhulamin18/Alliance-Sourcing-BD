"use client";

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from "react";

import {
  PackageCheck,
  Handshake,
  ReceiptText,
  ClipboardCheck,
  FileCheck2,
  Ship,
  Factory,
  Truck,
  ShieldCheck,
  SearchCheck,
  BadgeCheck,
  Boxes,
  LucideIcon,
} from "lucide-react";

import AdminLayout from "@/components/admin/AdminLayout";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string | null;
  icon: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ServiceForm {
  title: string;
  description: string;
  image: string;
  icon: string;
  isActive: boolean;
}

const initialForm: ServiceForm = {
  title: "",
  description: "",
  image: "",
  icon: "PackageCheck",
  isActive: true,
};

const iconOptions: {
  name: string;
  label: string;
  icon: LucideIcon;
}[] = [
  {
    name: "PackageCheck",
    label: "Package Check",
    icon: PackageCheck,
  },
  {
    name: "Handshake",
    label: "Handshake",
    icon: Handshake,
  },
  {
    name: "ReceiptText",
    label: "Receipt / Order",
    icon: ReceiptText,
  },
  {
    name: "ClipboardCheck",
    label: "Quality Check",
    icon: ClipboardCheck,
  },
  {
    name: "FileCheck2",
    label: "Compliance",
    icon: FileCheck2,
  },
  {
    name: "Ship",
    label: "Shipping",
    icon: Ship,
  },
  {
    name: "Factory",
    label: "Factory",
    icon: Factory,
  },
  {
    name: "Truck",
    label: "Truck",
    icon: Truck,
  },
  {
    name: "ShieldCheck",
    label: "Security / Protection",
    icon: ShieldCheck,
  },
  {
    name: "SearchCheck",
    label: "Inspection",
    icon: SearchCheck,
  },
  {
    name: "BadgeCheck",
    label: "Verified",
    icon: BadgeCheck,
  },
  {
    name: "Boxes",
    label: "Products / Boxes",
    icon: Boxes,
  },
];

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);

  const [form, setForm] =
    useState<ServiceForm>(initialForm);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] =
    useState<number | null>(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // --------------------------------------------------
  // Fetch Services
  // --------------------------------------------------

  const fetchServices = async () => {
    try {
      setError("");

      const response = await fetch(
        `${API_URL}/api/services`
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to fetch services"
        );
      }

      setServices(result.data || []);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to load services"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // --------------------------------------------------
  // Reset Form
  // --------------------------------------------------

  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
    setShowForm(false);
  };

  // --------------------------------------------------
  // Image Upload
  // --------------------------------------------------

  const handleImageUpload = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setError("");
    setSuccess("");
    setUploading(true);

    try {
      const token =
        localStorage.getItem("adminToken");

      if (!token) {
        throw new Error("Authentication required");
      }

      const formData = new FormData();

      formData.append("image", file);

      const response = await fetch(
        `${API_URL}/api/upload`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Failed to upload image"
        );
      }

      setForm((currentForm) => ({
        ...currentForm,
        image: result.data.url,
      }));

      setSuccess(
        "Image uploaded successfully."
      );
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

  // --------------------------------------------------
  // Submit
  // --------------------------------------------------

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (uploading) {
      setError(
        "Please wait until the image upload is complete."
      );

      return;
    }

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const token =
        localStorage.getItem("adminToken");

      if (!token) {
        throw new Error(
          "Authentication required"
        );
      }

      const url = editingId
        ? `${API_URL}/api/services/${editingId}`
        : `${API_URL}/api/services`;

      const method = editingId
        ? "PUT"
        : "POST";

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
          result.message ||
            "Failed to save service"
        );
      }

      setSuccess(
        editingId
          ? "Service updated successfully."
          : "Service created successfully."
      );

      resetForm();

      await fetchServices();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to save service"
      );
    } finally {
      setSaving(false);
    }
  };

  // --------------------------------------------------
  // Edit
  // --------------------------------------------------

  const handleEdit = (service: Service) => {
    setEditingId(service.id);

    setForm({
      title: service.title,
      description: service.description,
      image: service.image || "",
      icon: service.icon || "PackageCheck",
      isActive: service.isActive,
    });

    setShowForm(true);
    setError("");
    setSuccess("");
  };

  // --------------------------------------------------
  // Delete
  // --------------------------------------------------

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (!confirmed) return;

    try {
      setError("");
      setSuccess("");

      const token =
        localStorage.getItem("adminToken");

      if (!token) {
        throw new Error(
          "Authentication required"
        );
      }

      const response = await fetch(
        `${API_URL}/api/services/${id}`,
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
          result.message ||
            "Failed to delete service"
        );
      }

      setSuccess(
        "Service deleted successfully."
      );

      await fetchServices();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to delete service"
      );
    }
  };

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* Page Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Services
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage your buying house services.
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
            Add Service
          </button>
        </div>

        {/* Messages */}
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600">
            {success}
          </div>
        )}

        {/* Form */}
        {showForm && (
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  {editingId
                    ? "Edit Service"
                    : "Add Service"}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {editingId
                    ? "Update this service."
                    : "Add a new service to your website."}
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

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Title */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Service Title
                </label>

                <input
                  type="text"
                  value={form.title}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      title: event.target.value,
                    })
                  }
                  placeholder="e.g. Apparel Sourcing"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Description
                </label>

                <textarea
                  value={form.description}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      description:
                        event.target.value,
                    })
                  }
                  placeholder="Write a description for this service..."
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              {/* Icon */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Service Icon
                </label>

                <select
                  value={form.icon}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      icon: event.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                >
                  {iconOptions.map((option) => {
                    const Icon = option.icon;

                    return (
                      <option
                        key={option.name}
                        value={option.name}
                      >
                        {option.label}
                      </option>
                    );
                  })}
                </select>

                {/* Selected Icon Preview */}
                <div className="mt-3 flex items-center gap-3">
                  {(() => {
                    const selectedIcon =
                      iconOptions.find(
                        (option) =>
                          option.name === form.icon
                      );

                    const SelectedIcon =
                      selectedIcon?.icon ||
                      PackageCheck;

                    return (
                      <>
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50">
                          <SelectedIcon className="h-6 w-6 text-sky-500" />
                        </div>

                        <span className="text-sm text-slate-500">
                          {selectedIcon?.label ||
                            "Package Check"}
                        </span>
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* Image Upload */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Service Image
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-md file:border-0 file:bg-cyan-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-cyan-700 hover:file:bg-cyan-100"
                />

                {uploading && (
                  <p className="mt-2 text-sm text-cyan-600">
                    Uploading image...
                  </p>
                )}

                {form.image && !uploading && (
                  <div className="mt-4">
                    <img
                      src={form.image}
                      alt="Service preview"
                      className="h-40 w-64 rounded-lg border border-slate-200 object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Active */}
              <div className="flex items-center gap-3">
                <input
                  id="service-active"
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      isActive:
                        event.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                />

                <label
                  htmlFor="service-active"
                  className="text-sm font-medium text-slate-700"
                >
                  Active service
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={saving || uploading}
                  className="rounded-lg bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : editingId
                    ? "Update Service"
                    : "Create Service"}
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Services List */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5">
            <h3 className="text-lg font-bold text-slate-800">
              All Services
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {services.length} service
              {services.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {loading ? (
            <div className="px-6 py-12 text-center">
              <p className="text-sm text-slate-500">
                Loading services...
              </p>
            </div>
          ) : services.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-sm text-slate-500">
                No services found.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {services.map((service) => {
                const iconOption =
                  iconOptions.find(
                    (option) =>
                      option.name === service.icon
                  );

                const Icon =
                  iconOption?.icon ||
                  PackageCheck;

                return (
                  <div
                    key={service.id}
                    className="flex flex-col gap-5 px-6 py-5 lg:flex-row lg:items-center lg:justify-between"
                  >
                    <div className="flex min-w-0 items-start gap-4">
                      {/* Icon */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sky-50">
                        <Icon className="h-6 w-6 text-sky-500" />
                      </div>

                      {/* Image */}
                      {service.image && (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-16 w-20 shrink-0 rounded-lg border border-slate-200 object-cover"
                        />
                      )}

                      {/* Content */}
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-semibold text-slate-800">
                            {service.title}
                          </h4>

                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                              service.isActive
                                ? "bg-green-100 text-green-700"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {service.isActive
                              ? "Active"
                              : "Inactive"}
                          </span>
                        </div>

                        <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex shrink-0 gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleEdit(service)
                        }
                        className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(service.id)
                        }
                        className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
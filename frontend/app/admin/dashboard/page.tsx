"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface DashboardStats {
  services: number;
  products: number;
  factories: number;
  machinery: number;
  partners: number;
  messages: number;
  unreadMessages: number;
}

const statItems = [
  {
    key: "services",
    title: "Services",
    description: "Total services",
  },
  {
    key: "products",
    title: "Products",
    description: "Total products",
  },
  {
    key: "factories",
    title: "Factories",
    description: "Total factories",
  },
  {
    key: "machinery",
    title: "Machinery",
    description: "Total machinery",
  },
  {
    key: "partners",
    title: "Partners",
    description: "Total partners",
  },
  {
    key: "messages",
    title: "Messages",
    description: "Total messages",
  },
] as const;

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        if (!token) {
          setError("Authentication required");
          return;
        }

        const response = await fetch(`${API_URL}/api/dashboard`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message || "Failed to fetch dashboard stats"
          );
        }

        setStats(result.data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Failed to load dashboard"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800">
            Welcome back, Admin
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Manage your Alliance Sourcing BD website from one place.
          </p>
        </section>

        {/* Error */}
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Statistics */}
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {statItems.map((stat) => (
            <div
              key={stat.key}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <p className="text-sm font-medium text-slate-500">
                {stat.title}
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-800">
                {loading ? "..." : stats?.[stat.key] ?? 0}
              </p>

              <p className="mt-2 text-xs text-slate-400">
                {stat.description}
              </p>
            </div>
          ))}
        </section>

        {/* Unread Messages */}
        <section className="rounded-xl border border-cyan-100 bg-cyan-50 p-6">
          <p className="text-sm font-medium text-cyan-700">
            Unread Messages
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-800">
            {loading ? "..." : stats?.unreadMessages ?? 0}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Messages that still need your attention.
          </p>
        </section>

        {/* Quick Actions */}
        <section className="rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-bold text-slate-800">
            Quick Actions
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Quickly access the main content management sections.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="/admin/services"
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700"
            >
              Manage Services
            </a>

            <a
              href="/admin/products"
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700"
            >
              Manage Products
            </a>

            <a
              href="/admin/factories"
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700"
            >
              Manage Factories
            </a>

            <a
              href="/admin/messages"
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700"
            >
              View Messages
            </a>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}
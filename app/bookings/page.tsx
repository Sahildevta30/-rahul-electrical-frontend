"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { createBooking, getServiceTypes } from "../../lib/api";
import { useAuthStore } from "../../lib/authStore";
import Link from "next/link";

export default function BookingsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user } = useAuthStore();
  const [serviceTypes, setServiceTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    service_type: searchParams.get("service") || "",
    description: "",
    address: "",
    city: "",
    pincode: "",
    preferred_date: "",
    preferred_time: "",
  });

  useEffect(() => {
    getServiceTypes().then((r) => setServiceTypes(r.data)).catch(console.error);
  }, []);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) { router.push("/account"); return; }
    setLoading(true);
    setError("");
    try {
      await createBooking(form);
      setSuccess(true);
    } catch (err: any) {
      setError(err.response?.data?.message || "Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-500 mb-2">We will contact you shortly to confirm the appointment.</p>
        <p className="text-gray-500 mb-8">
          Or call us at{" "}
          <a href="tel:9827708428" className="text-yellow-600 font-semibold">9827708428</a>
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/account?tab=bookings"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-2.5 rounded-xl">
            View My Bookings
          </Link>
          <Link href="/"
            className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-xl hover:bg-gray-50">
            Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Book a Service</h1>
      <p className="text-gray-500 mb-8">Fill in the details and we will schedule a technician visit.</p>

      {!user && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 text-sm">
          <p className="text-yellow-800">
            Please{" "}
            <Link href="/account" className="font-semibold underline">login</Link>
            {" "}to track your booking status.
          </p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6 text-sm">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
          <select required value={form.service_type} onChange={(e) => set("service_type", e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
            <option value="">Select a service</option>
            {serviceTypes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Problem Description</label>
          <textarea rows={3} value={form.description} onChange={(e) => set("description", e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Describe the problem in detail..." />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
          <textarea required rows={2} value={form.address} onChange={(e) => set("address", e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Full address for technician visit" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input value={form.city} onChange={(e) => set("city", e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Brajrajnagar" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
            <input value={form.pincode} onChange={(e) => set("pincode", e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="768216" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
            <input type="date" value={form.preferred_date} onChange={(e) => set("preferred_date", e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
            <select value={form.preferred_time} onChange={(e) => set("preferred_time", e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option value="">Any time</option>
              <option>Morning (9am – 12pm)</option>
              <option>Afternoon (12pm – 4pm)</option>
              <option>Evening (4pm – 7pm)</option>
            </select>
          </div>
        </div>

        <button type="submit" disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-60 text-base">
          {loading ? "Booking..." : "🔧 Book Service"}
        </button>

        <p className="text-xs text-gray-400 text-center">
          Or call us directly at{" "}
          <a href="tel:9827708428" className="text-gray-600 font-medium">9827708428</a>
        </p>
      </form>
    </div>
  );
}

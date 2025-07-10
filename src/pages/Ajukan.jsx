import React, { useState } from "react";

const Ajukan = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    jenisKelamin: "",
    noTelepon: "",
    kronologi: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ status: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.noTelepon) {
      setFeedback({
        status: "error",
        message: "Email dan No. Telepon wajib diisi.",
      });
      return;
    }

    setLoading(true);
    setFeedback({ status: "", message: "" });

    try {
      const res = await fetch(
        "https://backendsapa-production.up.railway.app/api/pengaduan/ajukan",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setFeedback({ status: "success", message: "Pengaduan berhasil dikirim!" });
        setFormData({
          nama: "",
          email: "",
          jenisKelamin: "",
          noTelepon: "",
          kronologi: "",
        });
      } else {
        setFeedback({ status: "error", message: data.message || "Gagal mengirim." });
      }
    } catch (error) {
      console.error("Error:", error);
      setFeedback({ status: "error", message: "Terjadi kesalahan server." });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-blue-300 flex items-center justify-center py-10">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-pink-100 animate-fade-in-up">
        <div className="flex flex-col items-center mb-6">
          <span className="text-4xl animate-bounce mb-2">📄</span>
          <h2 className="text-2xl font-extrabold text-sky-800 mb-2">Ajukan Pengaduan</h2>
          <p className="text-gray-600 text-center text-sm">
            Silakan isi form berikut untuk melaporkan pengaduan Anda secara aman dan rahasia.
          </p>
        </div>

        {feedback.message && (
          <div
            className={`mb-4 p-3 rounded-lg text-sm font-semibold text-center transition-all ${
              feedback.status === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {feedback.message}
          </div>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-pink-400">
              <i className="ri-user-heart-line"></i>
            </span>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Nama Lengkap"
              className="pl-10 pr-3 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-blue-400">
              <i className="ri-mail-line"></i>
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email (Wajib)"
              className="pl-10 pr-3 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              required
            />
          </div>

          <div className="relative">
            <span className="absolute left-3 top-2.5 text-pink-400">
              <i className="ri-user-heart-line"></i>
            </span>
            <select
              name="jenisKelamin"
              value={formData.jenisKelamin}
              onChange={handleChange}
              className="pl-10 pr-3 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-pink-300 transition bg-white text-gray-700"
              defaultValue=""
            >
              <option value="" disabled>
                Jenis Kelamin
              </option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          <div className="relative">
            <span className="absolute left-3 top-2.5 text-sky-400">
              <i className="ri-phone-line"></i>
            </span>
            <input
              type="tel"
              name="noTelepon"
              value={formData.noTelepon}
              onChange={handleChange}
              placeholder="No. Telepon (Wajib)"
              className="pl-10 pr-3 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-sky-300 transition"
              required
            />
          </div>

          <div className="relative">
            <span className="absolute left-3 top-3 text-pink-400">
              <i className="ri-edit-2-line"></i>
            </span>
            <textarea
              name="kronologi"
              value={formData.kronologi}
              onChange={handleChange}
              placeholder="Tuliskan kronologi pengaduan Anda..."
              className="pl-10 pr-3 py-3 border rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-pink-300 transition resize-none min-h-[100px]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-gradient-to-r from-sky-700 to-pink-400 text-white py-2 rounded-full font-bold shadow transition-all ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 hover:shadow-lg"
            }`}
          >
            {loading ? "Mengirim..." : "Kirim Pengaduan"}
          </button>
        </form>
      </div>

      <style>
        {`
          .animate-fade-in-up {
            animation: fadeInUp 1s;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
};

export default Ajukan;

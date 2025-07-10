import { Link } from "react-router-dom";

const Beranda = () => {
  return (
    <div className="beranda bg-gradient-to-b from-white via-pink-50 to-blue-100 min-h-screen">
      <div className="container mx-auto">

        {/* Hero Section */}
        <div
          className="w-full bg-cover bg-center py-20"
          style={{ backgroundImage: `url('/bg-sapa.png')` }}
        >
          <div className="flex flex-col justify-center items-center text-center min-h-[60vh] max-w-2xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-sky-800 mb-8">
              Selamat Datang di Situs SAPA
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-5">
              Wadah pelaporan kekerasan di Kelurahan Balaroa, hadir untuk menciptakan ruang aman bagi perempuan dan anak.
            </p>
            <a
              href="#info"
              className="inline-block bg-sky-800 hover:bg-sky-700 text-white py-3 px-5 rounded-full font-semibold text-base transition"
            >
              Tentang Kami <i className="ri-eye-line ml-2"></i>
            </a>
          </div>
        </div>

        {/* Info Section */}
        <div id="info" className="bg-purple-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl lg:text-3xl font-extrabold text-sky-800 drop-shadow">
                Apa itu SAPA
              </h2>
              <h2 className="text-xl lg:text-3xl font-extrabold mb-4 text-sky-800 drop-shadow">
                (Sahabat Perempuan dan Anak) ?
              </h2>
              <p className="text-gray-700 text-base">
                SAPA atau Sahabat Perempuan dan Anak merupakan inisiatif yang bertujuan menciptakan Kelurahan Ramah Perempuan dan Peduli Anak (KRPPA). Salah satu fokus utamanya adalah memberikan sosialisasi dan edukasi kepada masyarakat terkait pola asuh yang baik, serta melindungi anak-anak dari berbagai bentuk kekerasan, termasuk fisik, mental, dan seksual..
              </p>
            </div>
            <div>
              <h2 className="text-xl lg:text-3xl font-extrabold mb-4 text-sky-800 drop-shadow">
                Mengapa SAPA dibentuk?
              </h2>
              <p className="text-gray-700 text-base">
                Memberikan sosialisasi dan edukasi kepada masyarakat terkait pola asuh yang baik, serta melindungi anak-anak dari berbagai bentuk kekerasan, termasuk fisik, mental, dan seksual. Selain itu, program ini juga memberdayakan perempuan dengan memberikan pelatihan keterampilan guna meningkatkan kesejahteraan keluarga.
              </p>
            </div>
          </div>
        </div>

        {/* Relawan Section */}
        <div className="mt-10 mb-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 pt-12">
              {[
                {
                  title: "Relawan SAPA (Sahabat Perempuan dan Anak)?",
                  desc: (
                    <>
                      <p className="mb-4">
                        Relawan SAPA (Sahabat Perempuan dan Anak) adalah individu yang secara sukarela menyatakan kesediaannya untuk:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Berperan aktif dalam mencegah kekerasan terhadap perempuan dan anak</li>
                        <li>Memberikan edukasi kepada masyarakat, terutama tentang pola asuh yang baik dan perlindungan anak</li>
                        <li>Mendukung terciptanya lingkungan yang ramah, aman, dan peduli terhadap perempuan dan anak di tingkat kelurahan atau desa</li>
                      </ul>
                      <p className="mt-4">
                        Mereka bukan hanya menjadi pelapor, tapi juga menjadi penggerak perubahan sosial di komunitasnya.
                      </p>
                    </>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-sky-200 via-pink-100 to-yellow-100 rounded-2xl shadow-xl p-10 border border-sky-100"
                >
                  <h3 className="text-3xl font-bold text-sky-800 text-center mb-6">{item.title}</h3>
                  <div className="text-gray-700 text-base text-justify">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visi Misi */}
        <div className="bg-purple-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl lg:text-3xl font-extrabold text-sky-800 drop-shadow mb-4">
                VISI
              </h2>
              <p className="text-gray-700 text-xl">
                Mewujudkan lingkungan yang aman, adil, dan berpihak kepada perempuan dan anak melalui edukasi, perlindungan, dan kolaborasi sosial.
              </p>
            </div>
            <div>
              <h2 className="text-xl lg:text-3xl font-extrabold mb-4 text-sky-800 drop-shadow">
                MISI
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 text-xl">
                <li>Memberikan edukasi kepada masyarakat tentang kekerasan dan hak-hak perempuan dan anak.</li>
                <li>Menyediakan ruang pelaporan dan pendampingan korban.</li>
                <li>Mendorong keterlibatan aktif masyarakat dalam menciptakan perubahan.</li>
                <li>Menguatkan solidaritas relawan dalam kerja-kerja sosial dan advokasi.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Peran Relawan */}
        {/* <div className="pt-12">
          <h1 className="text-center text-4xl lg:text-5xl font-extrabold mb-10 text-sky-800 drop-shadow">
            Peran Relawan SAPA
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
            {[
              {
                title: "Edukator",
                items: [
                  "Membantu membuat konten edukasi (infografis, artikel, video)",
                  "Menjadi pemateri dalam sosialisasi atau workshop ke sekolah/masyarakat",
                ],
              },
              {
                title: "Pendamping Lapangan",
                items: [
                  "Terlibat dalam kegiatan langsung seperti aksi kampanye, forum, atau kegiatan ke masyarakat",
                ],
              },
              {
                title: "Koordinator Kegiatan",
                items: [
                  "Membantu mengatur agenda kegiatan",
                  "Berkoordinasi dengan mitra atau komunitas",
                ],
              },
              {
                title: "Media & Publikasi",
                items: [
                  "Membantu membuat konten sosial media",
                  "Mengelola akun IG/FB/Site SAPA",
                  "Dokumentasi kegiatan",
                ],
              },
            ].map((role, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-sky-200 via-pink-100 to-yellow-100 rounded-2xl shadow-xl p-6 border border-sky-100"
              >
                <h3 className="text-xl font-bold text-sky-800 mb-4 text-center">{role.title}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {role.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div> */}

        {/* Alur Pengaduan */}
        <div className="pt-20 pb-10 animate-fade-in-up">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto px-4">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="public\Online consulting-amico (1).png"
                alt="Ilustrasi Layanan"
                className="w-full max-w-md h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-extrabold text-sky-800 drop-shadow">
                Alur Pengelolaan <span className="text-pink-500">Pengaduan!</span>
              </h1>
              <p className="text-gray-600 mt-4">
                Kami memahami pentingnya proses yang jelas dalam menangani pengaduan kekerasan.
              </p>
              <div className="mt-8 space-y-6">
                {[
                  { num: "1", title: "Pengaduan", desc: "Penyampaian laporan melalui SAPA secara langsung atau daring." },
                  { num: "2", title: "Penyampaian", desc: "Pengaduan diteruskan ke pihak berwenang terkait." },
                  { num: "3", title: "Penelitian", desc: "Pemeriksaan bukti dan klarifikasi oleh petugas." },
                  { num: "4", title: "Tindak Lanjut", desc: "Tindakan hukum atau mediasi untuk penyelesaian kasus." },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-800 to-pink-400 text-white font-bold text-lg shadow">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sky-800">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Animasi */}
      <style>
        {`
          .animate-fade-in-down {
            animation: fadeInDown 1s;
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s;
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-40px);}
            to { opacity: 1; transform: translateY(0);}
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

export default Beranda;

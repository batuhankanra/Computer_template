import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
     <footer className="bg-gray-900 text-gray-200 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Site Bilgisi */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4 font-sans">Alvero</h2>
          <p className="text-sm text-gray-400">
            Bilgisayar, donanım ve aksesuar alışverişinizin güvenilir adresi.
          </p>
        </div>

        {/* Menü */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Hızlı Erişim</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Hakkımızda</a></li>
            <li><a href="#" className="hover:underline">İletişim</a></li>
            <li><a href="#" className="hover:underline">SSS</a></li>
            <li><a href="#" className="hover:underline">Kullanım Şartları</a></li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Bizi Takip Edin</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {currentYear} TechStore. Tüm hakları saklıdır.
      </div>
    </footer>
  )
}

export default Footer

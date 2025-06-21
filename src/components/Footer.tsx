"use client";

import type React from "react";

import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=50&width=50"
                  alt="Logo Desa"
                  className="w-12 h-12 rounded-full ring-4 ring-emerald-400/30"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-gray-900"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Desa Sukamaju
                </h3>
                <p className="text-sm text-gray-300">Kec. Sukamaju</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Desa yang maju, sejahtera, dan berdaya saing tinggi dengan
              semangat gotong royong untuk kesejahteraan bersama menuju masa
              depan yang lebih baik.
            </p>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3 text-emerald-400">
                Newsletter
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 rounded-xl"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl"
                >
                  {isSubscribed ? "Berhasil!" : "Berlangganan"}
                </Button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">
              Tautan Cepat
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Beranda", href: "#beranda" },
                { name: "Profil Desa", href: "#profil" },
                { name: "Layanan", href: "#layanan" },
                { name: "Berita", href: "#berita" },
                { name: "Galeri", href: "#galeri" },
                { name: "Kontak", href: "#kontak" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">
              Layanan Populer
            </h4>
            <ul className="space-y-3">
              {[
                "Administrasi Kependudukan",
                "Surat Keterangan",
                "Layanan Kesehatan",
                "Pendidikan",
                "UMKM & Ekonomi",
                "Infrastruktur",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#layanan"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">
              Kontak Kami
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Jl. Raya Sukamaju No. 123
                    <br />
                    Desa Sukamaju, Kec. Sukamaju
                    <br />
                    Kab. Sukamaju 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 text-sm">(021) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 text-sm">info@desasukamaju.id</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4 text-emerald-400">
                Ikuti Kami
              </h5>
              <div className="flex space-x-3">
                {[
                  {
                    icon: Facebook,
                    color: "hover:bg-blue-600",
                    name: "Facebook",
                  },
                  {
                    icon: Instagram,
                    color: "hover:bg-pink-600",
                    name: "Instagram",
                  },
                  {
                    icon: Twitter,
                    color: "hover:bg-blue-400",
                    name: "Twitter",
                  },
                  { icon: Youtube, color: "hover:bg-red-600", name: "YouTube" },
                ].map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href="#"
                      className={`bg-gray-700 p-3 rounded-xl ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg group`}
                      title={social.name}
                    >
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>
                © {new Date().getFullYear()} Desa Sukamaju. Dibuat dengan
              </span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>untuk kemajuan desa</span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 text-sm transition-colors duration-300"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 text-sm transition-colors duration-300"
              >
                Syarat & Ketentuan
              </a>
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 rounded-full"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

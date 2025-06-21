"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: [
        "Jl. Raya Sukamaju No. 123",
        "Desa Sukamaju, Kec. Sukamaju",
        "Kab. Sukamaju 12345",
      ],
      color: "bg-emerald-500",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: ["(021) 123-4567", "(021) 123-4568"],
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@desasukamaju.id", "kepala@desasukamaju.id"],
      color: "bg-red-500",
    },
    {
      icon: Clock,
      title: "Jam Pelayanan",
      content: [
        "Senin - Jumat: 08:00 - 16:00",
        "Sabtu: 08:00 - 12:00",
        "Minggu: Tutup",
      ],
      color: "bg-purple-500",
    },
  ];

  return (
    <section
      id="kontak"
      className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Hubungi Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Kontak & Lokasi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Silakan hubungi kami untuk informasi lebih lanjut atau layanan yang
            Anda butuhkan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`${info.color} p-4 rounded-2xl shadow-lg`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 mb-3 text-lg">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.content.map((item, itemIndex) => (
                            <p
                              key={itemIndex}
                              className="text-gray-600 leading-relaxed"
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <Send className="w-6 h-6 mr-3 text-emerald-600" />
                  Kirim Pesan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama lengkap"
                        required
                        className="h-12 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Masukkan email"
                        required
                        className="h-12 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Masukkan nomor telepon"
                      className="h-12 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Masukkan subjek pesan"
                      required
                      className="h-12 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tulis pesan Anda di sini..."
                      rows={6}
                      required
                      className="rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === "success" && (
                    <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 p-4 rounded-xl">
                      <CheckCircle className="w-5 h-5" />
                      <span>
                        Pesan berhasil dikirim! Kami akan segera merespons.
                      </span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl">
                      <AlertCircle className="w-5 h-5" />
                      <span>Terjadi kesalahan. Silakan coba lagi.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Mengirim...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Kirim Pesan</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
                  Lokasi Desa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 h-80 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20"></div>
                  <div className="relative text-center">
                    <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium text-lg">
                      Peta Lokasi Desa Sukamaju
                    </p>
                    <p className="text-gray-600 mt-2">
                      Klik untuk membuka di Google Maps
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

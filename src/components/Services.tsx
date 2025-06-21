"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Users,
  Heart,
  GraduationCap,
  Briefcase,
  Home,
  ArrowRight,
  Search,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      icon: FileText,
      title: "Administrasi Kependudukan",
      description:
        "Layanan pembuatan KTP, KK, Akta Kelahiran, dan dokumen kependudukan lainnya",
      color: "bg-blue-500",
      category: "administrasi",
      duration: "1-3 hari",
      requirements: ["Fotokopi KK", "Pas foto 3x4", "Surat pengantar RT/RW"],
    },
    {
      icon: Users,
      title: "Surat Keterangan",
      description:
        "Surat keterangan domisili, tidak mampu, usaha, dan berbagai surat keterangan lainnya",
      color: "bg-emerald-500",
      category: "administrasi",
      duration: "1 hari",
      requirements: ["KTP asli", "Surat pengantar RT/RW", "Materai 10.000"],
    },
    {
      icon: Heart,
      title: "Layanan Kesehatan",
      description:
        "Posyandu, Puskesmas Pembantu, dan program kesehatan masyarakat",
      color: "bg-red-500",
      category: "kesehatan",
      duration: "Setiap hari",
      requirements: [
        "KTP",
        "Kartu BPJS (jika ada)",
        "Buku KIA (untuk ibu hamil)",
      ],
    },
    {
      icon: GraduationCap,
      title: "Pendidikan",
      description:
        "PAUD, TK, SD, dan program pendidikan non-formal untuk masyarakat",
      color: "bg-purple-500",
      category: "pendidikan",
      duration: "Tahun ajaran",
      requirements: ["Akta kelahiran", "KK", "Surat keterangan sehat"],
    },
    {
      icon: Briefcase,
      title: "Ekonomi & UMKM",
      description: "Pembinaan UMKM, koperasi, dan pengembangan ekonomi kreatif",
      color: "bg-orange-500",
      category: "ekonomi",
      duration: "Program berkelanjutan",
      requirements: ["Proposal usaha", "KTP", "NPWP (jika ada)"],
    },
    {
      icon: Home,
      title: "Infrastruktur",
      description:
        "Pembangunan jalan, jembatan, irigasi, dan fasilitas umum lainnya",
      color: "bg-teal-500",
      category: "infrastruktur",
      duration: "Sesuai proyek",
      requirements: ["Usulan masyarakat", "Survey lokasi", "Persetujuan BPD"],
    },
  ];

  const categories = [
    { id: "all", name: "Semua Layanan" },
    { id: "administrasi", name: "Administrasi" },
    { id: "kesehatan", name: "Kesehatan" },
    { id: "pendidikan", name: "Pendidikan" },
    { id: "ekonomi", name: "Ekonomi" },
    { id: "infrastruktur", name: "Infrastruktur" },
  ];

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Layanan Publik
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Layanan Desa Sukamaju
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Berbagai layanan publik yang tersedia untuk memudahkan masyarakat
            dengan pelayanan yang cepat dan berkualitas
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari layanan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg scale-105"
                    : "hover:bg-emerald-50 hover:border-emerald-300"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2 text-emerald-600" />
                      <span>Waktu proses: {service.duration}</span>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Persyaratan:
                      </p>
                      <ul className="space-y-1">
                        {service.requirements.map((req, reqIndex) => (
                          <li
                            key={reqIndex}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="w-3 h-3 mr-2 text-emerald-500 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300"
                  >
                    Ajukan Layanan
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Layanan tidak ditemukan
            </h3>
            <p className="text-gray-500">
              Coba gunakan kata kunci yang berbeda atau pilih kategori lain
            </p>
          </div>
        )}

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Lihat Semua Layanan
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

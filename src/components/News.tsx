"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  Filter,
  Eye,
  Heart,
  Share2,
} from "lucide-react";

export default function News() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const news = [
    {
      id: 1,
      title: "Pembangunan Jalan Desa Tahap II Dimulai",
      excerpt:
        "Pemerintah desa memulai pembangunan jalan desa tahap kedua untuk meningkatkan akses transportasi warga dengan anggaran 2.5 miliar rupiah.",
      date: "15 Januari 2024",
      author: "Admin Desa",
      image: "/placeholder.svg?height=250&width=400",
      category: "Infrastruktur",
      views: 1250,
      likes: 89,
      featured: true,
    },
    {
      id: 2,
      title: "Festival Budaya Desa Sukamaju 2024",
      excerpt:
        "Acara tahunan festival budaya akan diselenggarakan pada bulan Februari dengan berbagai pertunjukan tradisional dan pameran UMKM.",
      date: "12 Januari 2024",
      author: "Karang Taruna",
      image: "/placeholder.svg?height=250&width=400",
      category: "Budaya",
      views: 980,
      likes: 156,
      featured: false,
    },
    {
      id: 3,
      title: "Program Bantuan Bibit Tanaman Produktif",
      excerpt:
        "Desa memberikan bantuan bibit tanaman produktif kepada 200 petani untuk meningkatkan hasil pertanian dan ketahanan pangan.",
      date: "10 Januari 2024",
      author: "BPD",
      image: "/placeholder.svg?height=250&width=400",
      category: "Pertanian",
      views: 756,
      likes: 67,
      featured: false,
    },
    {
      id: 4,
      title: "Pelatihan Digital Marketing untuk UMKM",
      excerpt:
        "Pelatihan digital marketing gratis untuk 50 pelaku UMKM dalam rangka meningkatkan penjualan online dan ekspansi pasar.",
      date: "8 Januari 2024",
      author: "PKK Desa",
      image: "/placeholder.svg?height=250&width=400",
      category: "UMKM",
      views: 634,
      likes: 92,
      featured: false,
    },
    {
      id: 5,
      title: "Launching Aplikasi Pelayanan Desa Online",
      excerpt:
        "Desa Sukamaju meluncurkan aplikasi mobile untuk memudahkan warga mengakses layanan administrasi secara digital.",
      date: "5 Januari 2024",
      author: "Tim IT Desa",
      image: "/placeholder.svg?height=250&width=400",
      category: "Teknologi",
      views: 1456,
      likes: 203,
      featured: true,
    },
    {
      id: 6,
      title: "Gotong Royong Pembersihan Sungai Desa",
      excerpt:
        "Masyarakat bergotong royong membersihkan sungai desa untuk menjaga kelestarian lingkungan dan mencegah banjir.",
      date: "3 Januari 2024",
      author: "Karang Taruna",
      image: "/placeholder.svg?height=250&width=400",
      category: "Lingkungan",
      views: 543,
      likes: 78,
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: "Semua" },
    { id: "Infrastruktur", name: "Infrastruktur" },
    { id: "Budaya", name: "Budaya" },
    { id: "Pertanian", name: "Pertanian" },
    { id: "UMKM", name: "UMKM" },
    { id: "Teknologi", name: "Teknologi" },
    { id: "Lingkungan", name: "Lingkungan" },
  ];

  const filteredNews = news.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = filteredNews.filter((item) => item.featured);
  const regularNews = filteredNews.filter((item) => !item.featured);

  return (
    <section
      id="berita"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Berita & Informasi
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Berita Terkini Desa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Informasi terbaru seputar kegiatan, program, dan perkembangan Desa
            Sukamaju
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari berita..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <Button
              variant="outline"
              className="flex items-center space-x-2 px-6 py-3 rounded-xl"
            >
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
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
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                    : "hover:bg-blue-50 hover:border-blue-300"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-4"></div>
              Berita Utama
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <Card
                  key={item.id}
                  className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-white to-blue-50"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        FEATURED
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {item.author}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {item.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {item.likes}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-500 hover:text-blue-600"
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                        >
                          Baca Selengkapnya
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular News */}
        {regularNews.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full mr-4"></div>
              Berita Lainnya
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((item) => (
                <Card
                  key={item.id}
                  className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <h3 className="text-lg font-bold text-gray-800 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {item.author}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {item.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {item.likes}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300"
                      >
                        Baca
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Berita tidak ditemukan
            </h3>
            <p className="text-gray-500">
              Coba gunakan kata kunci yang berbeda atau pilih kategori lain
            </p>
          </div>
        )}

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Lihat Semua Berita
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

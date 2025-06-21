"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ZoomIn, Download, Share2, Heart, Eye } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("semua");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [likedImages, setLikedImages] = useState<number[]>([]);

  const categories = [
    { id: "semua", name: "Semua" },
    { id: "kegiatan", name: "Kegiatan" },
    { id: "infrastruktur", name: "Infrastruktur" },
    { id: "budaya", name: "Budaya" },
    { id: "alam", name: "Alam" },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Gotong Royong Pembersihan Desa",
      category: "kegiatan",
      image: "/placeholder.svg?height=400&width=600",
      date: "15 Jan 2024",
      views: 245,
      likes: 32,
    },
    {
      id: 2,
      title: "Jembatan Baru Desa Sukamaju",
      category: "infrastruktur",
      image: "/placeholder.svg?height=400&width=600",
      date: "12 Jan 2024",
      views: 189,
      likes: 28,
    },
    {
      id: 3,
      title: "Tari Tradisional Desa",
      category: "budaya",
      image: "/placeholder.svg?height=400&width=600",
      date: "10 Jan 2024",
      views: 156,
      likes: 45,
    },
    {
      id: 4,
      title: "Pemandangan Sawah Desa",
      category: "alam",
      image: "/placeholder.svg?height=400&width=600",
      date: "8 Jan 2024",
      views: 298,
      likes: 67,
    },
    {
      id: 5,
      title: "Rapat Koordinasi BPD",
      category: "kegiatan",
      image: "/placeholder.svg?height=400&width=600",
      date: "5 Jan 2024",
      views: 134,
      likes: 19,
    },
    {
      id: 6,
      title: "Balai Desa Sukamaju",
      category: "infrastruktur",
      image: "/placeholder.svg?height=400&width=600",
      date: "3 Jan 2024",
      views: 167,
      likes: 23,
    },
    {
      id: 7,
      title: "Festival Budaya Tahunan",
      category: "budaya",
      image: "/placeholder.svg?height=400&width=600",
      date: "1 Jan 2024",
      views: 456,
      likes: 89,
    },
    {
      id: 8,
      title: "Hutan Bambu Desa",
      category: "alam",
      image: "/placeholder.svg?height=400&width=600",
      date: "28 Des 2023",
      views: 234,
      likes: 56,
    },
  ];

  const filteredItems =
    activeCategory === "semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const toggleLike = (imageId: number) => {
    setLikedImages((prev) =>
      prev.includes(imageId)
        ? prev.filter((id) => id !== imageId)
        : [...prev, imageId]
    );
  };

  const openModal = (item: any) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="galeri"
      className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Galeri Foto
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Galeri Desa Sukamaju
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dokumentasi kegiatan dan keindahan Desa Sukamaju dalam berbagai
            momen berharga
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-8 py-3 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                  : "hover:bg-purple-50 hover:border-purple-300"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white"
              onClick={() => openModal(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-white/80 text-sm">
                      <span>{item.date}</span>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {item.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {item.likes}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative">
                <img
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {selectedImage.title}
                  </h3>
                  <div className="flex items-center justify-between text-white/80">
                    <span>{selectedImage.date}</span>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {selectedImage.views}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {selectedImage.likes}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleLike(selectedImage.id)}
                      className={`flex items-center space-x-2 ${
                        likedImages.includes(selectedImage.id)
                          ? "text-red-500 border-red-500 hover:bg-red-50"
                          : "hover:text-red-500 hover:border-red-500"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          likedImages.includes(selectedImage.id)
                            ? "fill-current"
                            : ""
                        }`}
                      />
                      <span>Suka</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>Bagikan</span>
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Unduh</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Lihat Galeri Lengkap
          </Button>
        </div>
      </div>
    </section>
  );
}

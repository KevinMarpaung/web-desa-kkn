"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  Award,
  Target,
  Users,
  TrendingUp,
  Heart,
  Lightbulb,
} from "lucide-react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", name: "Tentang", icon: Users },
    { id: "vision", name: "Visi & Misi", icon: Target },
    { id: "achievements", name: "Prestasi", icon: Award },
    { id: "programs", name: "Program", icon: Lightbulb },
  ];

  const achievements = [
    {
      title: "Desa Terbaik Tingkat Kecamatan",
      year: "2023",
      category: "Pembangunan",
    },
    { title: "Juara 1 Lomba Desa Sehat", year: "2023", category: "Kesehatan" },
    { title: "Desa Digital Terdepan", year: "2022", category: "Teknologi" },
    { title: "Desa Wisata Terfavorit", year: "2022", category: "Pariwisata" },
  ];

  const programs = [
    {
      title: "Program Desa Sehat",
      description:
        "Meningkatkan kesehatan masyarakat melalui posyandu dan puskesmas",
      icon: Heart,
    },
    {
      title: "Desa Digital",
      description:
        "Digitalisasi layanan publik untuk kemudahan akses masyarakat",
      icon: TrendingUp,
    },
    {
      title: "Pemberdayaan UMKM",
      description: "Mengembangkan ekonomi kreatif dan usaha mikro masyarakat",
      icon: Users,
    },
    {
      title: "Desa Wisata",
      description: "Mengembangkan potensi wisata alam dan budaya desa",
      icon: MapPin,
    },
  ];

  return (
    <section
      id="profil"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Profil Desa
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Mengenal Desa Sukamaju
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desa yang terus berkembang dengan inovasi dan semangat gotong royong
            untuk mencapai kemajuan bersama
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg scale-105"
                    : "hover:bg-emerald-50 hover:border-emerald-300"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{tab.name}</span>
              </Button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="animate-in fade-in-50 duration-500">
          {activeTab === "about" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img
                  src="/placeholder.svg?height=500&width=700"
                  alt="Kantor Desa Sukamaju"
                  className="relative rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Tentang Desa Kami
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Desa Sukamaju adalah sebuah desa yang terletak di Kecamatan
                  Sukamaju dengan luas wilayah 1.250 hektar. Desa ini memiliki
                  potensi alam yang melimpah dan masyarakat yang gotong royong
                  dalam membangun desa.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Dengan semangat kebersamaan dan inovasi, Desa Sukamaju terus
                  berkembang menjadi desa yang maju, sejahtera, dan berdaya
                  saing tinggi di era digital ini.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="flex items-center space-x-3 p-4 bg-emerald-50 rounded-xl">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-gray-800">Lokasi</div>
                      <div className="text-sm text-gray-600">Kec. Sukamaju</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-800">Berdiri</div>
                      <div className="text-sm text-gray-600">Tahun 1945</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "vision" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-3 rounded-xl">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 ml-4">
                      Visi
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    "Terwujudnya Desa Sukamaju yang maju, sejahtera, mandiri,
                    dan berdaya saing dengan tetap menjaga nilai-nilai budaya
                    dan kearifan lokal"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 ml-4">
                      Misi
                    </h3>
                  </div>
                  <ul className="text-gray-700 space-y-3 text-lg">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      Meningkatkan kualitas pelayanan publik
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      Mengembangkan potensi ekonomi desa
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      Memperkuat gotong royong masyarakat
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      Melestarikan budaya dan lingkungan
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600">{achievement.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "programs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {programs.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-3 rounded-xl flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-3">
                            {program.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {program.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

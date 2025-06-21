"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Building,
  TreePine,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counters, setCounters] = useState({
    population: 0,
    villages: 0,
    area: 0,
  });

  const slides = [
    {
      title: "Selamat Datang di Desa Sukamaju",
      subtitle:
        "Desa yang maju, sejahtera, dan berdaya saing tinggi dengan semangat gotong royong",
      image: "/placeholder.svg?height=600&width=1200",
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      title: "Inovasi untuk Kemajuan Desa",
      subtitle:
        "Mengembangkan teknologi dan digitalisasi untuk pelayanan yang lebih baik",
      image: "/placeholder.svg?height=600&width=1200",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      title: "Bersama Membangun Masa Depan",
      subtitle: "Gotong royong dan kebersamaan adalah kunci kemajuan desa kita",
      image: "/placeholder.svg?height=600&width=1200",
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Counter animation
  useEffect(() => {
    const animateCounters = () => {
      const targets = { population: 2847, villages: 8, area: 1250 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCounters({
          population: Math.floor(targets.population * easeOut),
          villages: Math.floor(targets.villages * easeOut),
          area: Math.floor(targets.area * easeOut),
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepDuration);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const heroElement = document.getElementById("beranda");
    if (heroElement) observer.observe(heroElement);

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="beranda" className="relative overflow-hidden">
      {/* Slides */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-90`}
            ></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundBlendMode: "overlay",
              }}
            />

            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl">
                  <div className="animate-in slide-in-from-left-8 duration-1000">
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight">
                      {slide.title.split(" ").map((word, i) => (
                        <span
                          key={i}
                          className={
                            i === slide.title.split(" ").length - 1
                              ? "text-yellow-300"
                              : ""
                          }
                        >
                          {word}{" "}
                        </span>
                      ))}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed max-w-3xl">
                      {slide.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-in slide-in-from-left-8 duration-1000 delay-300">
                    <Button
                      size="lg"
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      Jelajahi Desa
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-gray-900 shadow-xl backdrop-blur-sm bg-white/10"
                    >
                      <Play className="mr-2 w-5 h-5" />
                      Tonton Video
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-yellow-400 w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Users className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
              <div className="text-3xl font-bold text-white mb-1">
                {counters.population.toLocaleString()}
              </div>
              <div className="text-sm text-gray-200">Jumlah Penduduk</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Building className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
              <div className="text-3xl font-bold text-white mb-1">
                {counters.villages}
              </div>
              <div className="text-sm text-gray-200">Dusun</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <TreePine className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
              <div className="text-3xl font-bold text-white mb-1">
                {counters.area.toLocaleString()}
              </div>
              <div className="text-sm text-gray-200">Hektar Luas Wilayah</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

const GALLERY_CATEGORIES = {
  photoStills: {
    title: "Photo Stills",
    images: [
      "/assets/images/still001.jpg",
      "/assets/images/still002.jpg",
      "/assets/images/still003.jpg",
      "/assets/images/still004.jpg",
    ],
  },
  premierePictures: {
    title: "Premiere Pictures",
    images: [
  "/assets/images/premierpictures/1d7925e0-9f21-4648-aa22-f1628cc9132e.jpg",
  "/assets/images/premierpictures/8ad4ad8f-4a33-4f30-ab4f-b8232a002012.jpg",
  "/assets/images/premierpictures/9D4A2425.jpeg",
  "/assets/images/premierpictures/9D4A2789.jpeg",
  "/assets/images/premierpictures/9D4A2973.jpeg",
  "/assets/images/premierpictures/9D4A3110.jpeg",
  "/assets/images/premierpictures/59F1F874-7A50-4449-B1F1-13CDD6A99520.jpg",
  "/assets/images/premierpictures/83243ac7-d26b-48c5-b12e-5197f7fd646f.jpg",
  "/assets/images/premierpictures/c9f951da-7bfb-4eef-a13c-2af8e1a4b9fa.jpg",
  "/assets/images/premierpictures/Copy of 9D4A1876.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 2 (1).jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 9.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 27.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 35.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 36.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 59.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 60.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 65.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 122.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 130.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 144.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 154.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 160.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 179.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 196.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 239.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 240.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 248.jpg",
  "/assets/images/premierpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 249.jpg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 1.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 4.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 13.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 16.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 17.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 18.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 19.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 21.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 22.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 23.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 24.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 33.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 34.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 45.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 51.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 54.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 69.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 70.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 76.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 79.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 107.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 119.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 140.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 182.jpeg",
  "/assets/images/premierpictures/SAP_Events_MothersOfChibokPremiere_ 199.jpeg"
],
  },
  factoryVisit: {
    title: "Factory Visit",
   images: [
  "/assets/images/factoryvisit/Copy of 9D4A0647.jpg",
  "/assets/images/factoryvisit/Copy of 9D4A0673.jpg",
  "/assets/images/factoryvisit/Copy of 9D4A0686.jpg",
  "/assets/images/factoryvisit/Copy of 9D4A0701.jpg",
  "/assets/images/factoryvisit/Copy of 9D4A0707.jpg",
  "/assets/images/factoryvisit/Copy of 9D4A0709.jpg",
  "/assets/images/factoryvisit/Copy of 9D4A0734.jpg",
  "/assets/images/factoryvisit/Copy of 9D4A0745.jpg",
  "/assets/images/factoryvisit/Copy of 9D4A0746.jpg",
  "/assets/images/factoryvisit/Copy of 9D4A0767.jpg",
  "/assets/images/factoryvisit/Copy of 9D4A0768.jpg",
  "/assets/images/factoryvisit/Copy of 9D4A0803.jpg",
  "/assets/images/factoryvisit/Copy of 9D4A0815.jpg",
  "/assets/images/factoryvisit/Copy of 9D4A0821.jpg",
  "/assets/images/factoryvisit/Copy of 9D4A0845.jpg"
],
  },
  productPictures: {
    title: "Product Pictures",
    images: [
  "/assets/images/productpictures/Copy of 9D4A1920.jpg",
  "/assets/images/productpictures/Copy of 9D4A1945.jpg",
  "/assets/images/productpictures/Copy of 9D4A1949.jpg",
  "/assets/images/productpictures/Copy of 9D4A1956.jpg",
  "/assets/images/productpictures/Copy of 9D4A1958.jpg",
  "/assets/images/productpictures/Copy of 9D4A1959.jpg",
  "/assets/images/productpictures/Copy of 9D4A1974.jpg",
  "/assets/images/productpictures/Copy of 9D4A1980.jpg",
  "/assets/images/productpictures/Copy of 9D4A1994.jpg",
  "/assets/images/productpictures/Copy of 9D4A1996.jpg",
  "/assets/images/productpictures/Copy of SAP_Events_MothersOfChibokPremiere_ 108.jpg"
],
  },
};

type CategoryKey = keyof typeof GALLERY_CATEGORIES;

export default function PhotoGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("photoStills");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentImages = GALLERY_CATEGORIES[activeCategory].images;

  return (
    <section
      id="photo-gallery"
      className="relative py-24 bg-neutral-950 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Section Header */}
      <div className="relative z-10 container mx-auto px-6 mb-12 pl-20 md:pl-20 lg:pl-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-guthenBloots text-white mb-6">
            Photo <span className="text-[#B89C58]">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#B89C58] to-transparent mx-auto" />
        </motion.div>
      </div>

      {/* Category Tabs */}
      <div className="relative z-10 container mx-auto px-6 mb-12 pl-20 md:pl-20 lg:pl-6">
        <div className="flex flex-wrap justify-center gap-4">
          {(Object.keys(GALLERY_CATEGORIES) as CategoryKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === key
                ? "bg-[#B89C58] text-black"
                : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 border border-neutral-700"
                }`}
            >
              {GALLERY_CATEGORIES[key].title}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Gallery Grid */}
      <div
        ref={containerRef}
        className="relative z-10 container mx-auto px-4 md:px-12 pl-20 md:pl-20 lg:px-4"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentImages.map((src, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group cursor-pointer ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                onClick={() => setSelectedImage(src)}
              >
                <div className={`relative overflow-hidden rounded-2xl ${index === 0 ? "aspect-[21/9]" : "aspect-[4/3]"
                  }`}>
                  <Image
                    src={src}
                    alt={`${GALLERY_CATEGORIES[activeCategory].title} ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index < 2}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#B89C58] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#B89C58] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#B89C58] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#B89C58] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Frame effect */}
                <div className="absolute -inset-3 border border-[#B89C58]/30 rounded-2xl -z-10 group-hover:border-[#B89C58]/80 transition-colors duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-[#B89C58]/50 to-transparent"
        />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl max-h-[90vh] w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating film grain effect overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg '%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </div>
    </section>
  );
}
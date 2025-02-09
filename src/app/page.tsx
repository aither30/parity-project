"use client";

import React from "react";
import Image from "next/image";
// import MapComponent from "./MapComponent";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
});

import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Page() {
    // Ref untuk mendeteksi apakah elemen terlihat
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // ✅ Pastikan pakai useInView() dengan benar
  
    // State untuk angka animasi
    const [farmers, setFarmers] = useState(0);
    const [production, setProduction] = useState(0);
  
    // Efek animasi angka saat masuk layar
    useEffect(() => {
      if (isInView) {
        const farmersInterval = setInterval(() => {
          setFarmers((prev) => (prev < 100 ? prev + 1 : 100));
        }, 20);
  
        const productionInterval = setInterval(() => {
          setProduction((prev) => (prev < 500 ? prev + 5 : 500));
        }, 10);
  
        return () => {
          clearInterval(farmersInterval);
          clearInterval(productionInterval);
        };
      }
    }, [isInView]);
  

  const playerRef = useRef<ReactPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (playerRef.current) {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="relative flex items-center justify-end h-screen bg-black text-white ">
        <Image
          src="/parity.jpg"
          alt="Background"
          fill
          className="absolute inset-0 z-0 object-cover opacity-50"
        />
        <div className="flex flex-col items-end">
          <h1
            className="relative z-10 md:text-8xl font-bold md:mr-20 mr-8 md:mb-12 mb-4 text-5xl"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
          >
            P A R I T Y{" "}
          </h1>
          <h1
            className="relative z-10 md:text-6xl text-3xl font-bold md:mr-20 mr-8"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
          >
            FOR A BALANCED
          </h1>
          <h1
            className="relative z-10 md:text-6xl text-3xl font-bold md:mr-20 mr-8"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
          >
            LIFE
          </h1>
        </div>
      </div>
      {/* About Us Section */}
      <section className="max-w-5xl mx-auto md:mt-12 mt-6">
        <h2 className="md:text-5xl text-2xl font-bold md:mb-4 mb-2">
          About Us
        </h2>
        <div className="flex flex-col gap-6 ">
          <div className="flex gap-4 p-6 bg-gray-300 border rounded-xl">
            <div className="w-2/3 ">
              <p className="text-md md:text-xl">
                PARITY was born from a smallholder farmer who believes that
                farmers are the main pillar of food security and economic
                growth. We were born out of a passion to bring real change to
                Indonesian farmers.
              </p>
              <p className="md:mt-4 mt-2 text-md md:text-xl">
                With this we move together by collecting products from small
                farmers in various regions, uniting their crops into large-scale
                products that are ready to meet the needs of the industry, both
                domestically and internationally.
              </p>
            </div>
            <div className="w-1/3">
              <Image
                src="/header.jpeg"
                alt="header"
                width={256}
                height={256}
                className="w-64 h-64 rounded-lg object-cover"
              />
            </div>
          </div>
          <motion.div ref={ref} className="flex text-white gap-6 px-6">
      {/* Box 1 */}
      <motion.div
        className="w-1/2 bg-blue-950 h-40 rounded-xl flex justify-center items-center flex-col"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h3 className="text-4xl font-bold">
          {farmers}+
        </motion.h3>
        <p className="text-xl">Farmers</p>
      </motion.div>

      {/* Box 2 */}
      <motion.div
        className="w-1/2 bg-blue-400 h-40 rounded-xl flex justify-center items-center flex-col"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h3 className="text-4xl font-bold">
          {production} tons
        </motion.h3>
        <p className="text-xl">Production per month</p>
      </motion.div>
    </motion.div>
        </div>
      </section>
      {/* Our Mision Section */}
      <section className="max-w-5xl mx-auto md:mt-12 mt-6 p-6  bg-gray-300 rounded-xl">
        <h2 className="md:text-3xl text-lg font-bold md:mb-4 mb-2">
          Our Mision:
        </h2>
        <p className="md:mt-4 mt-2 text-md md:text-xl">
          To be simple yet powerful by creating a fairer agricultural ecosystem,
          empowering farmers, and opening wider market access. With innovation,
          collaboration, and the spirit of working together, we strive to ensure
          Indonesian farmers&apos; products can compete in the market.
        </p>
      </section>
      {/* Our Products */}
      <section className="flex flex-col max-w-5xl mx-auto py-6 px-8 ">
        <h2 className="md:text-5xl text-2xl font-bold md:mb-4 mb-2">
          Our Products
        </h2>
        <div className="flex ">
          <div className="flex  items-center justify-center gap-6 p-6 rounded-lg w-full ">
            <div className="text-center bg-gray-300 p-4 h-96 rounded-xl">
              <Image
                src="/hardwoodcharcoal.png"
                alt="Hardwood charcoal"
                width={256}
                height={256}
                className="w-64 h-64 rounded-lg object-cover"
              />
              <p className="text-xl md:text-2xl font-bold mt-2">
                Hardwood charcoal
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 p-6  rounded-lg w-full ">
            <div className="text-center bg-gray-300 p-4 h-96 rounded-xl">
              <Image
                src="/coconutshellcharcoal.png"
                alt="coconut shell charcoal"
                width={256}
                height={256}
                className="w-64 h-64 rounded-lg object-cover"
              />
              <p className="text-xl md:text-2xl font-bold mt-2">
                coconut shell charcoal
              </p>
            </div>
          </div>
          <div className="flex  flex-col items-center gap-6 p-6 justify-center  rounded-lg w-full ">
            <div className="text-center bg-gray-300 p-4 h-96 rounded-xl">
              <Image
                src="/halabanwoodcharcoal.png"
                alt="Halabanwood charcoal"
                width={256}
                height={256}
                className="w-64 h-64 rounded-lg object-cover"
              />
              <p className="text-xl md:text-2xl font-bold mt-2">
                Halabanwood charcoal
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Place of Production Section */}
      <section className="max-w-5xl mx-auto py-6 md:PY-12 px-8">
        <h2 className="md:text-5xl text-2xl font-bold md:mb-4 mb-2">
          Place of Production
        </h2>
        <MapComponent />
      </section>
      <section className="max-w-5xl mx-auto py-6 md:PY-12 px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center gap-6 p-0 md:p-6 ">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/1.jpeg"
              alt="One of our farmer's kilns uses 5 ovens for wood charcoal burning."
              width={256}
              height={192}
              className="w-64 aspect-[4/3] rounded-lg object-cover mx-auto"
            />
            <p className="text:xl md:text-2xl font-semibold text-gray-800 mt-4">
              One of our farmer&apos;s kilns uses 5 ovens for wood charcoal
              burning.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/3.jpeg"
              alt="Unloading of combustion products"
              width={256}
              height={192}
              className="w-64 aspect-[4/3] rounded-lg object-cover mx-auto"
            />
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
              Unloading of combustion products
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 p-0 md:p-6 ">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/2.jpeg"
              alt="Preparation for combustion"
              width={256}
              height={192}
              className="w-64 aspect-[4/3] rounded-lg object-cover mx-auto"
            />
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
              Preparation for combustion
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/4.jpeg"
              alt="Good storage and packaging"
              width={256}
              height={192}
              className="w-64 aspect-[4/3] rounded-lg object-cover mx-auto"
            />
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
              Good storage and packaging
            </p>
          </div>
        </div>
      </section>
      {/* Section Mini Virtual Tour*/}
      <section className="max-w-5xl mx-auto py-6 md:PY-12 px-8">
        <h2 className="md:text-5xl text-2xl font-bold md:mb-4 mb-2">
          Mini Virtual Tour
        </h2>
        <div className="flex gap-6">
          <div className="relative w-full max-w-2xl mx-auto group">
            <ReactPlayer
              ref={playerRef}
              url="/minitour.mp4"
              playing={isPlaying}
              controls={false}
              width="100%"
              height="auto"
            />

            <button
              onClick={togglePlayPause}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            >
              {isPlaying ? (
                <FaPause size={64} color="white" />
              ) : (
                <FaPlay size={64} color="white" />
              )}
            </button>
          </div>
          <div className="flex flex-col gap-6 text-xl">
            <p>Welcome to our Mini Virtual Tour!</p>
            <p>
              In this short tour, you will be invited to see the process of
              burning high-quality wood charcoal directly using 5 ovens, besides
              that you will see raw hardwood products before burning and also
              the results of burning into wood charcoal products.
            </p>
            <p>
              It&apos;s a unique experience to see how simple technology
              combines with local wisdom to produce the highest quality
              environmentally friendly charcoal
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto py-6 md:PY-12 px-8">
        <h2 className="md:text-5xl text-2xl font-bold md:mb-4 mb-2">
          Our solutions for business clients
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 w-full">
          {/* Kotak pertama sampai ketiga (Baris pertama) */}
          <div className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-300 rounded-lg w-full md:w-1/4 ">
            <h2 className="text-xl md:text-2xl font-bold">Good Quality</h2>
            <p className="text-md md:text-lg text-gray-600">
              Through proper wood selection, optimal oven firing system, and
              good storage and packaging.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-300  rounded-lg w-full md:w-1/4">
            <h2 className="text-xl md:text-2xl font-bold">Meet the Needs</h2>
            <p className="text-md md:text-lg text-gray-600">
              PARITY provides charcoal based on client requests, such as size,
              dryness, and so on.
            </p>
          </div>
          <div className="flex flex-col items-center  justify-center gap-4 p-6 bg-gray-300 rounded-lg w-full md:w-1/4">
            <h2 className="text-xl md:text-2xl font-bold text-center">
              Large Scale Production
            </h2>
            <p className="text-md md:text-lg text-gray-600">
              PARITY produces up to 400 tons of charcoal per month.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-300 rounded-lg w-full md:w-1/4">
            <h2 className="text-xl md:text-2xl font-bold">Shipping</h2>
            <p className="text-md md:text-lg text-gray-600">
              PARITY assists in shipping to the client&apos;s place by land or
              sea.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-300 rounded-lg w-full md:w-1/4 ">
            <h2 className="text-xl md:text-2xl font-bold">Additional</h2>
            <p className="text-md md:text-lg text-gray-600">
              Other extras include flexibility, competitive pricing, and
              responsive customer support.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto py-6 md:PY-12 px-8 w-full">
        {/* Judul News Section */}
        <h2 className="md:text-5xl text-2xl font-bold md:mb-4 mb-2">News</h2>
        {/* Grid for News */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Industry News */}
          <div className="bg-gray-300 p-6 rounded-lg ">
            <Image
              src="/news1.png"
              alt="Charcoal demand trends in the global market"
              width={400}
              height={250}
              className="rounded-lg object-cover h-64"
            />
            <h3 className="text-2xl font-semibold mt-2">
              Indonesia Hardwood for Lump Charcoal
            </h3>
            <p className="text-gray-600 mt-2">
              Indonesian hardwood charcoal is known for its premium quality-high
              heat, long burn duration, and low residue. The best choice for
              global export needs! - Sep 27, 2023
            </p>
            <a
              href="https://www.cocologi.com/post/indonesiahardwood-for-lump-charcoa"
              className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
              Read More →
            </a>
          </div>

          {/* Education & Tips */}
          <div className="bg-gray-300 p-6 rounded-lg ">
            <Image
              src="/news2.jpg"
              alt="How to choose the right charcoal"
              width={400}
              height={250}
              className="rounded-lg object-cover h-64"
            />

            <h3 className="text-2xl font-semibold mt-2">
              The Story of the Surviving Charcoal Makers in Pemalang
            </h3>
            <p className="text-gray-600 mt-2">
              The story of the wood charcoal makers in Pemalang tells of the
              struggle of the artisans to survive amidst the challenges of the
              times. Although the demand for wood charcoal is still there, they
              have to face hard work, low sales, and changing lifestyles. This
              tradition lives on thanks to the perseverance and expertise passed
              down from generation to generation. - Aug 10, 2024
            </p>
            <a
              href="https://timesindonesia.co.id/ekonomi/50567
6/kisah-pembuat-arang-kayu-di-pemalangyang-masih-bertahan
"
              className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto py-6 md:py-12 px-8 w-full">
        <div className="w-full bg-gray-300 text-black p-12 flex flex-col rounded-lg">
          <h2 className="md:text-5xl text-2xl font-bold md:mb-4 mb-2">
            Get in touch with PARITY
          </h2>
          <p className="mb-2">We look forward to your inquiry.</p>
          <p className="font-semibold mb-2">Contact Info</p>

          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/6281243953947"
              className="flex items-center text-blue-600 hover:underline"
            >
              <FaWhatsapp className="text-green-500 text-xl mr-2" />
              +62 812-4395-3947
            </a>
          </div>

          <div className="flex items-center space-x-4 mt-2">
            <a
              href="https://www.facebook.com/ParityMultinational"
              className="flex items-center text-blue-600 hover:underline"
            >
              <FaFacebook className="text-blue-700 text-xl mr-2" />
              Parity Multinational
            </a>
          </div>

          <div className="flex items-center space-x-4 mt-2">
            <a
              href="https://www.instagram.com/parityy_"
              className="flex items-center text-blue-600 hover:underline"
            >
              <FaInstagram className="text-pink-500 text-xl mr-2" />
              @parityy_
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mt-8 gap-6">
          {/* Tombol Purchase */}
          <div className="w-full md:w-1/2 bg-blue-600 h-24 flex items-center justify-center rounded-lg">
            <a
              href=""
              className="text-lg font-semibold text-white text-center px-6"
            >
             Buying and
             helping farmers
            </a>
          </div>

          {/* Tombol Join Us */}
          <div className="w-full md:w-1/2 bg-blue-600 h-24 flex items-center justify-center rounded-lg">
            <a
              href=""
              className="text-lg font-semibold text-white text-center px-6"
            >
              Join us in building a
brighter and more
prosperous future.
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-black text-white py-6 md:py-12 text-center">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* About Us */}
            <div>
              <h3 className="font-semibold text-xl mb-4">About Us</h3>
              <p className="text-gray-300 leading-relaxed">
                PARITY was born from a smallholder farmer who believes that
                farmers are the main pillar of food security and economic
                growth. We were born out of a passion to bring real change to
                Indonesian farmers.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-xl mb-4">Contact Info</h3>
              <div className="flex flex-col gap-3 text-gray-300">
                <a
                  href="https://wa.me/6281243953947"
                  className="flex items-center gap-2 hover:text-green-400"
                >
                  <FaWhatsapp className="text-green-500 text-xl" />
                  +62 812-4395-3947
                </a>
                <a
                  href="https://www.facebook.com/ParityMultinational"
                  className="flex items-center gap-2 hover:text-blue-400"
                >
                  <FaFacebook className="text-blue-700 text-xl" />
                  Parity Multinational
                </a>
                <a
                  href="https://www.instagram.com/parityy_"
                  className="flex items-center gap-2 hover:text-pink-400"
                >
                  <FaInstagram className="text-pink-500 text-xl" />
                  @parityy_
                </a>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-semibold text-xl mb-4">Follow Us</h3>
              <div className="flex justify-center gap-6 text-2xl">
                <a
                  href="https://www.facebook.com/ParityMultinational"
                  className="text-blue-700 hover:text-blue-400 transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/parityy_"
                  className="text-pink-500 hover:text-pink-400 transition-colors"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} PT Parity Multinational, All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

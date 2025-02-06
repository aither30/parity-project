"use client";

import React from "react";
import Image from "next/image";
import MapComponent from "./components/MapComponent";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Page() {
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
      <section className="max-w-5xl mx-auto md:mt-12 mt-6 px-8 ">
        <h2 className="md:text-5xl text-2xl font-bold md:mb-4 mb-2">
          About Us
        </h2>
        <p className="text-md md:text-xl">
          PARITY was born from a smallholder farmer who believes that farmers
          are the main pillar of food security and economic growth. We were born
          out of a passion to bring real change to Indonesian farmers.
        </p>
        <p className="md:mt-4 mt-2 text-md md:text-xl">
          With this we move together by collecting products from small farmers
          in various regions, uniting their crops into large-scale products that
          are ready to meet the needs of the industry, both domestically and
          internationally.
        </p>
      </section>
      {/* Our Mision Section */}
      <section className="max-w-5xl mx-auto md:mt-16 mt-6 px-8">
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
      <section className="max-w-5xl mx-auto py-6 px-8">
        <h2 className="md:text-5xl text-2xl font-bold md:mb-4 mb-2">
          Our Products
        </h2>
        <div className="flex md:flex-row flex-col items-center gap-6 p-6 rounded-lg w-full">
          <div className="text-center">
            {/* Gambar */}
            <Image
              src="/woodcharcoal.png"
              alt="wood charcoal"
              width={256}
              height={256}
              className="w-64 h-64 rounded-lg object-cover"
            />
            <p className="text-xl md:text-2xl font-bold mt-2">wood charcoal</p>
          </div>
          {/* List Informasi */}
          <ul className="space-y-2 md:text-xl text-md list-disc ml-6">
            <li>Wood Type: Hardwood</li>
            <li>Fixed Carbon: 75 - 80%</li>
            <li>Moisture Content: &lt; 5%</li>
            <li>Ash Content: 1 - 3%</li>
            <li>Calorific Value: 7.000 – 8.500 kcal/kg</li>
            <li>Burning Duration: 3 - 5 Hours</li>
          </ul>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-6 p-6  rounded-lg w-full">
          <div className="text-center ">
            {/* Gambar */}
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

          {/* List Informasi */}
          <ul className="space-y-2 md:text-xl text-md list-disc ml-6">
            <li>Wood Type: Hardwood</li>
            <li>Fixed Carbon: 75 - 80%</li>
            <li>Moisture Content: &lt; 5%</li>
            <li>Ash Content: 1 - 3%</li>
            <li>Calorific Value: 7.000 – 8.500 kcal/kg</li>
            <li>Burning Duration: 3 - 5 Hours</li>
          </ul>
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
              src="/2.jpeg"
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
              src="/3.jpeg"
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

      <section className="max-w-5xl mx-auto py-6 md:PY-12 px-8">
        <h2 className="md:text-5xl text-2xl font-bold md:mb-4 mb-2">
          Our solutions for business clients
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 w-full">
          {/* Kotak pertama sampai ketiga (Baris pertama) */}
          <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg w-full md:w-1/4">
            <h2 className="text-xl md:text-2xl font-bold">Shipping</h2>
            <p className="text-md md:text-lg text-gray-600">
              PARITY assists in shipping to the client&apos;s place by land or
              sea.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white  rounded-lg w-full md:w-1/4">
            <h2 className="text-xl md:text-2xl font-bold">Meet the Needs</h2>
            <p className="text-md md:text-lg text-gray-600">
              PARITY provides charcoal based on client requests, such as size,
              dryness, and so on.
            </p>
          </div>
          <div className="flex flex-col items-center  justify-center gap-4 p-6 bg-white rounded-lg w-full md:w-1/4">
            <h2 className="text-xl md:text-2xl font-bold text-center">
              Large Scale Production
            </h2>
            <p className="text-md md:text-lg text-gray-600">
              PARITY produces up to 400 tons of charcoal per month.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg w-full md:w-1/4 ">
            <h2 className="text-xl md:text-2xl font-bold">Good Quality</h2>
            <p className="text-md md:text-lg text-gray-600">
              Through proper wood selection, optimal oven firing system, and
              good storage and packaging.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg w-full md:w-1/4 ">
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
          <div className="bg-white p-6 rounded-lg ">
            <Image
              src="/news1.jpeg"
              alt="Charcoal demand trends in the global market"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <p className="text-gray-500 text-sm mt-4">March 10, 2025</p>
            <span className="text-sm font-semibold text-blue-600">
              Industry News
            </span>
            <h3 className="text-2xl font-semibold mt-2">
              Charcoal Demand Trends in the Global Market
            </h3>
            <ul className="text-gray-600 mt-2 list-disc list-inside">
              <li>Global demand for charcoal continues to rise.</li>
              <li>
                The benefits of coconut shell charcoal in the culinary & health
                industries.
              </li>
              <li>New regulations on charcoal exports abroad.</li>
            </ul>
            <a
              href="#"
              className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
              Read More →
            </a>
          </div>

          {/* Education & Tips */}
          <div className="bg-white p-6 rounded-lg ">
            <Image
              src="/news2.jpeg"
              alt="How to choose the right charcoal"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <p className="text-gray-500 text-sm mt-4">March 8, 2025</p>
            <span className="text-sm font-semibold text-blue-600">
              Education & Tips
            </span>
            <h3 className="text-2xl font-semibold mt-2">
              How to Choose & Store Charcoal Properly
            </h3>
            <ul className="text-gray-600 mt-2 list-disc list-inside">
              <li>How to choose the right charcoal for specific needs.</li>
              <li>
                Tips for storing charcoal to keep it dry and high quality.
              </li>
              <li>The benefits of charcoal for health and agriculture.</li>
            </ul>
            <a
              href="#"
              className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-6 md:py-12 px-8 w-full">
        <div className="w-full bg-white text-black p-12 flex flex-col rounded-lg">
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
              Purchase
            </a>
          </div>

          {/* Tombol Join Us */}
          <div className="w-full md:w-1/2 bg-blue-600 h-24 flex items-center justify-center rounded-lg">
            <a
              href=""
              className="text-lg font-semibold text-white text-center px-6"
            >
              Join Us in Building a Brighter Future
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6 md:py-12 text-center">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="font-semibold text-xl mb-4">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
              PARITY was born from a smallholder farmer who believes that
              farmers are the main pillar of food security and economic growth.
              We were born out of a passion to bring real change to Indonesian
              farmers.
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

"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative flex min-h-screen w-screen items-center justify-end bg-gray-900 text-end">
      <Image
        src="/parity.jpg"
        alt="Background"
        fill
        className="absolute inset-0 z-0 opacity-50 w-screen h-screen object-cover"
      />
      <div className="relative right-0 z-10 max-w-lg w-full rounded-2xl shadow-lg">
        <p className="mt-4 text-gray-600">PARITY </p>
        <p className="mt-4 text-gray-600">FOR A BALANCED</p>
        <p className="mt-4 text-gray-600">LIFE</p>
      </div>
    </div>
  );
}

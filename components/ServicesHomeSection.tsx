"use client";

import { ServiceSection } from "./ServiceSection";
import {
  domestic,
  international,
  groupTravel,
} from "../public/data";

/**
 * Homepage Services Section
 * - Matches Figma layout
 * - Reusable
 * - Clean separation from /services route
 */
export default function ServicesHomeSection() {
  return (
    <section className="bg-[#FFFDF8] py-20">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center mb-14 px-6">
        <h2 className="text-4xl font-bold text-black">Services</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm">
          Explore our domestic, international, and group travel services
          designed to make every trip smooth and memorable
        </p>
      </div>

      {/* Services Content */}
      <div className="max-w-6xl mx-auto px-6">
        <ServiceSection label="Domestic" items={domestic} />
        <ServiceSection label="International" items={international} />
        <ServiceSection label="Group Travel" items={groupTravel} />
      </div>
    </section>
  );
}

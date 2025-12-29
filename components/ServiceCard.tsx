"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  image: string;
}

/**
 * ServiceCard
 * - Entry animation (fade + lift)
 * - Hover lift + scale
 * - Mobile tap feedback
 * - Matches Figma premium feel
 */
export const ServiceCard = ({ title, image }: ServiceCardProps) => {
  return (
    <motion.div
      // 🔹 Entry animation
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}

      // 🔹 Hover animation
      whileHover={{
        y: -8,
        scale: 1.03,
      }}

      // 🔹 Mobile tap feedback
      whileTap={{ scale: 0.97 }}

      className="
        bg-white
        rounded-2xl
        shadow-md
        hover:shadow-xl
        overflow-hidden
        cursor-pointer
        transition-shadow
      "
    >
      {/* Image */}
      <div className="relative h-[180px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
          priority={false}
        />
      </div>

      {/* Title */}
      <div className="py-3 text-center">
        <p className="text-sm font-semibold tracking-wide text-gray-900">
          {title.toUpperCase()}
        </p>
      </div>
    </motion.div>
  );
};

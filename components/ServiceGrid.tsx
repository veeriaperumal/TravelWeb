"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";

/**
 * Single service item shape
 * Keep this strict — prevents accidental props misuse
 */
interface GridItem {
  title: string;
  image: string;
}

/**
 * Props for ServiceGrid
 */
interface ServiceGridProps {
  items: GridItem[];
}

/**
 * Animation variants for the grid container
 * - Controls staggered animation of children
 * - Triggers only once when section enters viewport
 */
const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // subtle, premium stagger
      delayChildren: 0.1,
    },
  },
};

/**
 * ServiceGrid
 *
 * Responsibilities:
 * - Responsive grid (1 / 2 / 4 columns)
 * - Handles scroll-based entrance animation
 * - Delegates card animation to ServiceCard
 *
 * This component should stay dumb:
 * ❌ No business logic
 * ❌ No routing
 * ✅ Layout + animation only
 */
export const ServiceGrid = ({ items }: ServiceGridProps) => {
  return (
    <motion.div
      /* Initial hidden state */
      initial="hidden"

      /* Animate when visible in viewport */
      whileInView="visible"

      /* Animate only once (important for UX + performance) */
      viewport={{ once: true, margin: "-80px" }}

      /* Stagger control */
      variants={gridVariants}

      /* Responsive layout
         - Mobile: 1 column
         - Tablet: 2 columns
         - Desktop: 4 columns
      */
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
      "
    >
      {items.map((item, index) => (
        <ServiceCard
          key={item.title + index} // safer than index alone
          title={item.title}
          image={item.image}
        />
      ))}
    </motion.div>
  );
};

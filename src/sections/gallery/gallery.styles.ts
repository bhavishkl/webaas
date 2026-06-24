export const galleryStyles = {
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
  item: "group relative aspect-square rounded-2xl overflow-hidden cursor-pointer",
  image: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
  overlay: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6",
  caption: "text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300",
} as const;


import { motion } from "framer-motion";

interface DishCardProps {
  name: string;
  description: string;
  imageUrl: string;
  index: number;
}

const DishCard = ({ name, description, imageUrl, index }: DishCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 transition-all duration-300 hover:shadow-lg"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default DishCard;

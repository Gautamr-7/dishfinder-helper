
import { useState, useMemo } from "react";
import SearchBox from "../components/SearchBox";
import DishCard from "../components/DishCard";
import { dishes } from "../data/dishes";
import { motion } from "framer-motion";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) =>
      dish.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-medium text-gray-900 mb-4">
            Find Your Perfect Dish
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Search through our collection of delicious recipes
          </p>
          <SearchBox onSearch={setSearchQuery} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish, index) => (
              <DishCard key={dish.id} {...dish} index={index} />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-gray-500 text-lg">
                No dishes found matching your search.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;

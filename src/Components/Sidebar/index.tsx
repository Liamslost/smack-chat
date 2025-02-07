import { useState } from "react";
import { ChevronDown, Hash, Plus } from "lucide-react";
import { motion } from "framer-motion";
interface Category {
  name: string;
  channels: string[];
}
const categories: Category[] = [
  {
    name: "General",
    channels: ["welcome", "announcements", "chat"],
  },
  {
    name: "Technology",
    channels: ["programming", "design", "hardware"],
  },
  {
    name: "Gaming",
    channels: ["minecraft", "valorant", "fortnite"],
  },
];
export const Sidebar = () => {
  const [expanded, setExpanded] = useState<string[]>(["General"]);
  const toggleCategory = (category: string) => {
    setExpanded((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };
  return (
    <div className="w-64 bg-white dark:bg-gray-800 h-full overflow-y-auto border-r border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <button className="w-full px-4 py-2 rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 font-medium flex items-center gap-2 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors">
          <Plus size={18} />
          Add Channel
        </button>
      </div>
      {categories.map((category) => (
        <div key={category.name} className="mb-2">
          <button
            onClick={() => toggleCategory(category.name)}
            className="w-full px-4 py-2 flex items-center justify-between text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="font-medium">{category.name}</span>
            <motion.div
              animate={{
                rotate: expanded.includes(category.name) ? 180 : 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <ChevronDown size={18} />
            </motion.div>
          </button>
          <motion.div
            initial={false}
            animate={{
              height: expanded.includes(category.name) ? "auto" : 0,
              opacity: expanded.includes(category.name) ? 1 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="overflow-hidden"
          >
            {category.channels.map((channel) => (
              <button
                key={channel}
                className="w-full px-6 py-1.5 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm"
              >
                <Hash size={16} />
                {channel}
              </button>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

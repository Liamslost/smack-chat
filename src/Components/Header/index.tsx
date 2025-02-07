
import { Bell, Moon, Sun, User } from "lucide-react";
import { motion } from "framer-motion";
interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}
export const Header = ({ isDark, toggleTheme }: HeaderProps) => {
  return (
    <header className="h-14 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center"
        >
          <User className="text-gray-600 dark:text-gray-300" size={20} />
        </motion.button>
        <span className="font-medium text-gray-700 dark:text-gray-300">
          John Doe
        </span>
      </div>
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center"
        >
          <Bell className="text-gray-600 dark:text-gray-300" size={20} />
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="text-gray-600 dark:text-gray-300" size={20} />
          ) : (
            <Moon className="text-gray-600 dark:text-gray-300" size={20} />
          )}
        </motion.button>
      </div>
    </header>
  );
};

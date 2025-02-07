import { useState } from "react";
import {
  Moon,
  Sun,
  Menu,
  ChevronDown,
  Settings,
  User,
  Bell,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
export function App() {
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    "gaming",
  );
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };
  const categories = [
    {
      name: "Gaming",
      id: "gaming",
      channels: ["minecraft", "valorant", "league-of-legends"],
    },
    {
      name: "Technology",
      id: "tech",
      channels: ["programming", "web-dev", "ai-ml"],
    },
    {
      name: "Art",
      id: "art",
      channels: ["digital-art", "traditional", "animation"],
    },
  ];
  return (
    <div className={`w-full h-screen flex ${isDark ? "dark" : ""}`}>
      <motion.div
        initial={false}
        animate={{
          width: isSidebarOpen ? "240px" : "0px",
        }}
        className="h-full bg-gray-100 dark:bg-gray-800 overflow-hidden"
      >
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-6">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.button>
            <span className="font-semibold text-gray-800 dark:text-white">
              Categories
            </span>
          </div>
          {categories.map((category) => (
            <div key={category.id} className="mb-2">
              <motion.button
                whileHover={{
                  backgroundColor: isDark ? "#374151" : "#f3f4f6",
                }}
                onClick={() =>
                  setExpandedCategory(
                    expandedCategory === category.id ? null : category.id,
                  )
                }
                className="w-full p-2 rounded-lg flex items-center justify-between text-gray-700 dark:text-gray-300"
              >
                <span>{category.name}</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${expandedCategory === category.id ? "rotate-180" : ""}`}
                />
              </motion.button>
              <AnimatePresence>
                {expandedCategory === category.id && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    className="ml-4"
                  >
                    {category.channels.map((channel) => (
                      <motion.button
                        key={channel}
                        whileHover={{
                          x: 4,
                        }}
                        className="w-full p-2 text-left text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                      >
                        # {channel}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Settings className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.button>
          </div>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </motion.button>
        </header>
        <main className="flex-1 bg-gray-50 dark:bg-gray-900 p-6 overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-4">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-500" />
                <span className="font-medium text-gray-800 dark:text-white">
                  John Doe
                </span>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Just started playing Valorant! Anyone want to team up?
              </p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-500" />
                <span className="font-medium text-gray-800 dark:text-white">
                  Jane Smith
                </span>
                <span className="text-sm text-gray-500">1 hour ago</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                I'd be down for some games! What rank are you?
              </p>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}

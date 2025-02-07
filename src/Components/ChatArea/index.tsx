
import { Send } from "lucide-react";
import { motion } from "framer-motion";
const messages = [
  {
    id: 1,
    user: "John Doe",
    content: "Hey everyone! 👋",
    time: "12:30 PM",
  },
  {
    id: 2,
    user: "Jane Smith",
    content: "Welcome to the chat!",
    time: "12:31 PM",
  },
  {
    id: 3,
    user: "Mike Johnson",
    content: "How's everyone doing today?",
    time: "12:35 PM",
  }
];
export const ChatArea = () => {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="group flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 p-3 rounded-lg transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-medium">
              {message.user[0]}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {message.user}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {message.time}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {message.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          />
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-600 transition-colors"
          >
            <Send size={18} />
            Send
          </motion.button>
        </div>
      </div>
    </div>
  );
};

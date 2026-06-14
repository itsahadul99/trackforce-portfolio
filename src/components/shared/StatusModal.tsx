"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaCheck, FaXmark } from "react-icons/fa6";

type StatusModalProps = {
  open: boolean;
  type?: "success" | "error";
  title: string;
  description: string;
  onClose: () => void;
};

const StatusModal = ({
  open,
  type = "success",
  title,
  description,
  onClose,
}: StatusModalProps) => {
  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-[420px] rounded-2xl bg-[#0a0a0a] border border-white/10 p-8 text-center shadow-[0_0_40px_rgba(168,85,247,0.25)]"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              <FaXmark size={20} />
            </button>

            <div
              className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${
                isSuccess ? "bg-green-500/15 text-green-400" : "bg-red-500/15 text-red-400"
              }`}
            >
              {isSuccess ? <FaCheck size={28} /> : <FaXmark size={28} />}
            </div>

            <h3 className="text-white text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

            <button
              type="button"
              onClick={onClose}
              className="mt-7 w-full text-white font-semibold py-3 rounded-md transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(90deg, #1B73E8 0%, #9F60EE 100%)" }}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StatusModal;

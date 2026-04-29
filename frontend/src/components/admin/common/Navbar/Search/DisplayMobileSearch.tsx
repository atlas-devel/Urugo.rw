import Search from "./Search";
import { AnimatePresence, motion } from "framer-motion";

function DisplayMobileSearch({ mobileSearch }: { mobileSearch: boolean }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        {mobileSearch && <Search forMobile={true} />}
      </motion.div>
    </AnimatePresence>
  );
}

export default DisplayMobileSearch;

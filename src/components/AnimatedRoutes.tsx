import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomeSlide from "../pages/HomeSlide";
import Primeiro from "../pages/Primeiro";
import Segundo from "../pages/Segundo";
import Terceiro from "../pages/Terceiro";
import Quarto from "../pages/Quarto";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ height: "100%" }}
            >
              <HomeSlide />
            </motion.div>
          }
        />
        <Route
          path="/primeiro"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ height: "100%" }}
            >
              <Primeiro />
            </motion.div>
          }
        />
        <Route
          path="/segundo"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ height: "100%" }}
            >
              <Segundo />
            </motion.div>
          }
        />
        <Route
          path="/terceiro"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ height: "100%" }}
            >
              <Terceiro />
            </motion.div>
          }
        />
        <Route
          path="/quarto"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ height: "100%" }}
            >
              <Quarto />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes; 
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Root from "./routes/root"

export default function App() {
  const location = useLocation()
  return (
    <>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Routes */}
        <Route index element={<Root />} />
        {/* 404 page */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </AnimatePresence>
    </>
  )
}

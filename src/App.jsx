import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Root from "./routes/root"
import Work from "./routes/work"
import About from "./routes/about"
import Contacts from "./routes/contacts"

export default function App() {
  const location = useLocation()
  return (
    <>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Routes */}
        <Route index element={<Root />} />
        <Route path="Work" element={<Work />} />
        <Route path="About" element={<About />} />
        <Route path="Contacts" element={<Contacts />} />
        {/* 404 page */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </AnimatePresence>
    </>
  )
}

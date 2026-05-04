import { Route, Routes } from "react-router"
import LandingPage from "./pages/landing/LandingPage"
import AboutFc from "./pages/about/AboutFc"
import Restaurants from "./pages/restaurants/Restaurants"
import PageNotFound from "./pages/404/PageNotFound"
import { allPaths } from "./routes/paths"
import Careers from "./pages/careers/Careers"
import Blog from "./pages/blog/Blog"
import Feedback from "./pages/feedback/Feedback"
import FAQs from "./pages/faqs/FAQs"

function App() {
  return (
    <Routes>
      <Route path={allPaths.landing} element={<LandingPage />} />
      <Route path={allPaths.about} element={<AboutFc />} />
      <Route path={allPaths.restaurants} element={<Restaurants />} />
      <Route path={allPaths.careers} element={<Careers />} />
      <Route path={allPaths.blog} element={<Blog />} />
      <Route path={allPaths.feedback} element={<Feedback />} />
      <Route path={allPaths.faqs} element={<FAQs />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App

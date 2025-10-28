
import { createBrowserRouter, RouterProvider } from "react-router-dom";  
import Wrapper from "./layouts/Wrapper";
import HomeTwo from "./components/homes/home-2";
import Aboutus from "./components/about-us";
import Service from "./components/service";
import Contact from "./components/contact";
import ErrorArea from "./components/error";
 


const router = createBrowserRouter([
  { path: "/", element: <HomeTwo /> },
  // { path: "/home-2", element: <HomeTwo /> }, 
  { path: "/about-us", element: <Aboutus /> }, 
  { path: "/service", element: <Service /> }, 
  // { path: "/service-details", element: <ServiceDetails /> }, 
  // { path: "/register", element: <Register /> }, 
  // { path: "/login", element: <Login /> }, 
  // { path: "/pricing-plan", element: <PricingPlan /> }, 
  // { path: "/faq", element: <Faq /> }, 
  // { path: "/team", element: <Team /> }, 
  // { path: "/team-details", element: <TeamDetails /> }, 
  // { path: "/portfolio", element: <Portfolio /> }, 
  // { path: "/portfolio-details", element: <PortfolioDetails /> }, 
  // { path: "/blog", element: <Blog /> }, 
  // { path: "/blog-details", element: <BlogDetails /> }, 
  { path: "/contact", element: <Contact /> }, 



  { path: "*", element: <ErrorArea /> },
]);


function App() {

  return (
    <Wrapper> 
      <RouterProvider router={router} />
    </Wrapper>
  )
}

export default App

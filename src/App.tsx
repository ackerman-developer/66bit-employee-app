import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppRoutes } from "./const"
import ListEmployees from "./pages/list-employees/ListEmployees"
import AboutEmployee from "./pages/about-employee/AboutEmployee"
import Layout from "./components/layout/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            path={AppRoutes.listEmployees}
            element={<ListEmployees />}
          />
          <Route
            path={`${AppRoutes.aboutEmployee}/:id`}
            element={<AboutEmployee />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

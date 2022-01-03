import { Routes, Route } from 'react-router-dom'
import { Footer, NavBar } from './components'
import { Home, SesameStreet } from './views'

export default function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sesame-street" element={<SesameStreet />} />
          {/* "No Match" Route */}
          <Route
            path="*"
            element={
              <main className="m-2 text-center text-warning alert alert-warning">
                <>There's nothing here!</>
              </main>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { AppHeader } from './cmps/app-header.jsx'
import { Home } from './pages/home-page.jsx'
import { AboutUs } from './pages/about.jsx'
import { BookIndex } from './pages/book-index.jsx'
import { AboutIndex } from './cmps/about-index.jsx'
import { Team } from './cmps/team.jsx'
import { BookDetail } from './pages/book-details.jsx'
import { UserMsg } from './cmps/user-msg.jsx'

export function App() {


    return <Router>
        <section className="app-layout">

            <AppHeader />

            <main className="full main-layout">
                <Routes>
                    <Route element={<Home />} path="/" />

                    <Route element={<AboutUs />} path="/about" >
                        <Route element={<AboutIndex />} path="/about" />
                        <Route element={<Team />} path="/about/team" />
                    </Route >

                    <Route element={<BookIndex />} path="/book" />
                    <Route element={<BookDetail />} path="/book/:bookId" />
                </Routes>
            </main>
            <UserMsg />
        </section>
    </Router >
}



{/* {page === 'home' && <Home />}
{page === 'about' && <AboutUs />}
{page === 'books' && <BookIndex />} */}
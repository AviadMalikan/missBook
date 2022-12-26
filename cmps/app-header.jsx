const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <section className="main-layout app">
        <header className="app-header full flex flex justify-between align-center">
            <Link to="/">
                <h1>Miss Book!</h1>
            </Link>
            <nav className="app-nav">

                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/book">Books</NavLink>
            </nav>
        </header>
    </section >

}
const { Outlet, Link } = ReactRouterDOM

export function AboutUs() {

    return <section>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cumque hic minima nostrum quos asperiores ab at soluta minus rem illo exercitationem quis, repellendus, consectetur repellat eveniet explicabo accusamus? Incidunt.</p>
        <div className="social-links">
            <Link to="/about"><button>Index</button></Link>
            <Link to="/about/team"><button>Team</button></Link>
        </div>
        <div className="nested-route">
            <Outlet />
        </div>

    </section>
}
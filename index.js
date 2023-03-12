// Child
function Nav() {
    return (
        <header>
            <nav className="nav">
                <img src="./React-icon.svg.png" width="70px" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contract</li>
                </ul>
            </nav>
        </header>
    )
}

// Child
function Content() {
    return (
        <main>
            <h1 className="title">Fun facts about Blessing</h1>
            <ul>
                <li>I love coding</li>
                <li>I love Ice cream</li>
                <li>I love learning</li>
            </ul>
        </main>
    )
}

// Child
function MyFooter() {
    return (
        <footer className="footer">
            <small>Blaire is learning React framework</small>
        </footer>
    )
}

// Parent
function Page() {
    return (
        <div>
            <Nav />
            <Content />
            <MyFooter />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root")
)
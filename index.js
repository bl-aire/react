// Child
function Nav() {
    return (
        <header>
            <nav>
                <img src="./React-icon.svg.png" width="60px" />
            </nav>
        </header>
    )
}

// Child
function Content() {
    return (
        <main>
            <h1>Fun facts about Blessing</h1>
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
        <footer>
            <small>I am the footer</small>
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
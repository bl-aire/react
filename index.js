function Nav() {
    return (
        <header>
            <nav>
                <img src="./React-icon.svg.png" width="60px" />
            </nav>
        </header>
    )
}

function Content() {
    return (
        <div>
            <h1>Fun facts about Blessing</h1>
            <ul>
                <li>I love coding</li>
                <li>I love Ice cream</li>
                <li>I love learning</li>
            </ul>
        </div>
    )
}

function MyFooter() {
    return (
        <small>I am the footer</small>
    )
}

ReactDOM.render(
    <div>
        <Nav />
        <Content />
        <MyFooter />
    </div>, 
    document.getElementById("root")
)
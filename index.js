function Nav() {
    return (
        <nav>
            <img src="./React-icon.svg.png" width="100px" />
        </nav>
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

ReactDOM.render(
    <div>
        <Nav />
        <Content />
    </div>, 
    document.getElementById("root")
)
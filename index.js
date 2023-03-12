import Nav from "./nav"
import MyFooter from "./Footer"
import Content from "./Content"

// Parent
function App() {
    return (
        <div>
            <Nav />
            <Content />
            <MyFooter />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root")
)
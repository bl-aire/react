import Nav from "./nav"
import MyFooter from "./Footer"
import Content from "./Content"

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
function MyContent() {
    return (
        <p>This is my content component.</p>
    )
}

function MyFooter() {
    return (
        <p>This is my footer component.</p>
    )
}

ReactDOM.render(
    <div>
        <MyContent />
        < MyFooter />
    </div>, 
    document.getElementById("root")
)
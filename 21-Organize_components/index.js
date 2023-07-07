// import React from "react"
// import ReactDOM from "react-dom"
import Header from "./Header.js"
import Footer from "./components/Footer.js"
import MainContent from "./components/MainContent.js"


/**
Challenge: move the Footer and MainContent components
into their own files.
*/





function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
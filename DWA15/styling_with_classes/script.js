
function Header () {
  return (
  <header>
    <nav className="nav">
      <img className="img-logo" src="./img/react-logo.png"/>
      <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
    </nav>
  </header>
  )
}

function MainContent () {
  return (
    <div>
      <h1>Why I am excited to learn React</h1>
      <h3>Here are afew things</h3>
      <ol>
        <li>thing 1</li>
        <li>thing 2</li>
        <li>thign 3</li>
        <li>thing 4</li>
        <li>thing 5</li>
        <li>thing 6</li>
      </ol>
    </div>
  )
}

function Footer () {
  return (
    <footer>
       <small>© 2021 Bruyns development. All rights reserved.</small>
    </footer>
  )
}

function Page () {
  return (
    <div>
    <Header/>
    <MainContent/>
    <Footer/>
  </div>
  )
}


ReactDOM.render( <Page/> , document.getElementById("root"));
// ReactDOM.render( <Footer/>, document.getElementById("root"))


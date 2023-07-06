
  // function TemporaryName() {
  //   return (
  //     <div>
  //       <img src="./img/react-logo.png" width="40px" height="40px"/>
  //       <h1>Fun facts about React</h1>
  //       <ul>
  //         <li>Was first released in 2013</li>
  //         <li>Was originally created by Jordan Walke</li>
  //         <li>Has well over 100k stars on Github</li>
  //         <li>is maintained by Facebook</li>
  //         <li>Powers thousands of enterprise apps, including mobile apps</li>
  //       </ul>
  //     </div>   
  //   )
  // }
  
  // ReactDOM.render( <TemporaryName/>, document.getElementById("root"));

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

function Page () {
  return (
  <div>
      <header>This is my webapp
        <nav>
          <img src="./img/react-logo.png" width="40px" height="40px"/>
        </nav>
      </header>
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
    <footer>© 20xx Bruyns developement. All rights reserved</footer>
  </div>
  )
}
function Footer () {
  return (
    <div>
  </div>
  )
}

ReactDOM.render( <Page/>, document.getElementById("root"));
// ReactDOM.render( <Footer/>, document.getElementById("root"))


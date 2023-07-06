Quiz!

1. What is a React component?
a function with a set of html elements to be used one or more times in a codebase.
- A function that returns React elements. (UI)

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
the name myComponent should be MyComponent and the child tags shuld be wrapped in a parent tag like <></>-<div></div>
-(pascal case [CapitalFirstLetter])

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
the Header tag should be quoted inside <Header/> tag
-
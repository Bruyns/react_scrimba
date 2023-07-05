/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const navbar = (
    <nav>
        <h1>takelot</h1>
        <h3>these are items for sale</h3>
        <ol>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
            <li>New items</li>
        </ol>
    </nav>
)

    document.getElementById("root").append((JSON.stringify(navbar));
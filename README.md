So here we have built a simple project using an api : https://api.imgflip.com/get_memes
This api brings us meme images with names and we have to display them in card and search on the basis of names.

I have used React + tailwindcss to build this project and used the file-structure given below:

meme-search/

    public/
        index.html

    src/
        components/
            SearchBar.jsx
            MemeCard.jsx

        App.jsx
        App.css
        main.jsx
        index.css

    .gitignore
    package.json
    tailwind.config.js
    vite.config.js

SearchBar.jsx is the component controlling the search and MemeCard.jsx is controlling the overall meme grid.

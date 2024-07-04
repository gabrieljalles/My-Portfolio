# Technical Parts

### Inicialization of project
    npx create-next-app@latest ./
    √ Would you like to use TypeScript? ... Yes\
    √ Would you like to use ESLint? ... Yes\
    √ Would you like to use Tailwind CSS? ... Yes\
    √ Would you like to use `src/` directory? ... No\
    √ Would you like to use App Router? (recommended) ... Yes\
    √ Would you like to customize the default import alias (@/*)? ... No\

### installed other packages
tailwindcss-animate\
framer-motion clsx tailwind-merge [animations in project](https://www.framer.com/motion/)\
mini-svg-data-uri\
next-themes [create a dark mode in the project](https://ui.shadcn.com/docs/dark-mode/next)
react-icons [Library of react icons](https://react-icons.github.io/react-icons/)

### Extensions you will need to install:
    * Tailwind css intel
    * ES7+ React/Redux/React-Native snippets
    * PostCSS Language Support to fix the error: tailwind error unknown at rule

### To run the application 
    npm run dev

### Steps to initiate the application
    1. Delete favicon
    2. erase almost all the content of globals.css, leaving only @tailwind
    3. In the layout, change the name of the title and description of application
    4. Delete all the content of page.tsx, leaving only the structure of the function
    5. In twailwind.config.ts you can create a name of the colors you want to use
    6. Create a folder named components

### Tips for creating a new TSX
    * when the x.tsx is empty, if you digit rafce and press enter, the program will create the complete initial structure of your file. it is possible only if you have the extension ES7...

### Concepts *PRECISA CONFERIR*

##### Globals
    Responsible for the design standards

##### Layout
    Responsible for the font

___
# Design Parts

# How to use spotlight effects
according to the website https://ui.aceternity.com/components/spotlight

1. Install the package npm i framer-motion clsx tailwind-merge
2. if the folder named lib doesn´t exist, create and then, verify the utils.ts exists, thus create the a file with the title cn.ts. After, paste the code.
3. In components, create a folder named ui and inside of its, spotilight.ts
4. paste the code into the tailwind.config.js
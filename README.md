# ML Component Library

Keep track of reusable components for internal re-use. Based on the [CDL spec](https://macmillanlearning.atlassian.net/wiki/display/CDL/)

## [View the Library](https://mlazul.github.io/ml-component-library/)

[Current plan](https://docs.google.com/a/holtzbrinck.com/document/d/1K2D3jMThpBflFlZ53kzR-cUaDHYDnXWu_97p_Uagygw/edit?usp=sharing)

Clone this branch and then run `npm install && npm start` to run the server and try out components locally or visit the [library demo page](https://mlazul.github.io/ml-component-library/).

PRs and bug reports greatly appreciated. Contact @jeffp on slack or post in the #cdl channel.

## Folder structure
```
├── src/
│     ├── assets
│     │   └── fonts
│     │   └── styles
│     ├── components/
│     │   └── MLButton
│     │     └── MLButton.example // Demo code for the preview playground
│     │     └── MLButton.js // React component module
│     │     └── MLButton.md // Usage information, the text below the demo
│     └── libs/
```

## TODO
* Package these as modules for NPM installation
* Add a11y requirements
* Finish copying usage information from
* Write tests
* AccordionList


View usage examples on the demo.
# ML Components

Keep track of reusable components.  
They can be Icons, Buttons, Forms, etc.

Now includes a webpack server and the beginnings of a KitchenSink-like app for CDL components

Clone this branch and then run `npm install && npm start` to run the server and try out components.

PRs greatly appreciated.

## TODO
* Package these as modules for NPM installation

## MLMenu
```
<MLMenu 
    itemClicked={ function(c){console.log('clicked item',c)} } 
    menuTitle='test!'
    menuArray={['beans','baby foxes']}/>
```
## MLIcon
```
<MLIcon 
  iconType={ 'item_edit' } 
  className={ css['icon'] }
  iconWidth="24",
  iconHeight="24",
  viewBox="0 0 24 24",
  iconFill="#ffffff",
  iconTitle="Accessible title"
/>
```
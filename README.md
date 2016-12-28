# ML Components

Keep track of reusable components.  
They can be Icons, Buttons, Forms, etc.

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
/>
```
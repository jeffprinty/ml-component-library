# ML Components

Keep track of reusable components.  
They can be Icons, Buttons, Forms, etc.

Now includes a webpack server and the beginnings of a KitchenSink-like app for CDL components

Clone this branch and then run `npm install && npm start` to run the server and try out components.

PRs greatly appreciated.

## TODO
* Package these as modules for NPM installation
* Add a11y requirements

## MLMenu
```
<MLMenu 
  itemClicked={ function(c){console.log('clicked item',c)} } 
  title='test!'
  itemArray={['beans','baby foxes']}/>
```
## MLIcon
```
<MLIcon 
  className={ css['icon'] }
  type='item_edit' 
  width="24",
  height="24",
  viewBox="0 0 24 24",
  fill="#ffffff",
  title="Accessible title" />
```

## MLToggle
```
<MLToggle 
  checked={ true } 
  disabled={ true } on
  Change={ this._clickToggle } />  
```

## MLCard
```
<MLCard 
  title="The Gear Wars" 
  content="It was never really about the gears." 
  button={<MLButton title='Primary ' btnClass='primary' />}
  />
```
## MLButton
```
<MLButton title='Primary ' btnClass='primary' />
<MLButton title='Primary Red' btnClass='primary' secondary='red' />
<MLButton title='Primary Green' btnClass='primary' secondary='green' />`
```
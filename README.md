# Anchor

**Anchor** is a simple plugin used to create smooth scrolling anchor links. It uses GreenSock to animate the window to the targetted area.

### Installation
Want to use npm?
```javascript
npm install @mkoelewijn/anchor
```

Want to use yarn?
```javascript
yarn add @mkoelewijn/anchor
```

## Usage

### HTML
```html
<a href="#anchor-link" data-anchor>This is an anchor link</a>

<div id="anchor-link"><p>Target area</p></div>
```


### Javascript
```javascript
import Anchor from '@mkoelewijn/anchor';

new Anchor();
```
###

## Options

|               | type              | Default   | 
|---            |---                |---        |
| offset         | Integer           |   0     | 
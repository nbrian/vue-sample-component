# Vue Sample Components

_Demo project on creating custom components using **vue** + **webpack** + **typescript** + **axous**_


## Introduction

 Simply by adding Vue.js in your app you could use it enables to declaratively render data to the DOM using straightforward template syntax:

``` html
<div id="app">
    {{ message }}
</div>
```

``` javascript
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
```

__Output:__
```
Hello Vue!
```


### Properties and Methods

``` javascript
new Vue({
    el: '#app',
    data: {
        title: 'Click me'
    },
    methods: {
        doSomething() {
            alert('clicked!');
        }
    }
})
```

``` html
<div id="app">
    <button v-on:click="doSomething">{{title}}</button>
</div>
```

__Output:__
<section style="padding:16px;background-color: #f7f7f7;" data-markdown>
    <button data-template onClick="alert('clicked!')">Click me!</button>
</section>


### Components
``` javascript 
Vue.component('component', {
    data: {
        message:''
    },
    template: '<p>Hello {{ name }}. {{message}}</p>',
    props: ['name'],

    // Vue lifecycle hooks
    created: function(){
        this.message = 'Welcome to Vue.js!';
    }
})
```
There are also `mounted`, `updated` and `destroyed` lifecycle hooks


``` html
<div id="app">
    <component name="Brian"></component>
</div>
```

__Output:__
``` 
Hello Brian. Welcome to Vue.js!
```



## Vue + Typescript


``` javascript
new Vue({
    template: '<button @click="onClick">Click!</button>',
    data: {
        message: 'Hello!'
    },
    methods: {
        onCLick(){
            window.alert(this.message)    
        }
    }
})
```


**Using Typescript + vue-class-component**

``` javascript
import Vue from 'vue'
import Component from 'vue-class-component'

// The @Component decorator indicates the class is a Vue component
@Component({
    // All component options are allowed in here
    template: '<button @click="onClick">Click!</button>'
})
export default class MyComponent extends Vue {
    // Initial data can be declared as instance properties
    message: string = 'Hello!'
    // Component methods can be declared as instance methods
    onClick (): void {
        window.alert(this.message)
    }
}
```

## Using vue-cli (Vue + Typescript + Webpack + axous)
With _vue-cli_ we can have a scaffolded project

``` bash
vue init <template-name> <project-name>
```
__Sample:__
``` bash
vue init webpack my-project
```
### Official Templates
- **webpack** - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
- **webpack-simple** - A simple Webpack + vue-loader setup for quick prototyping.
- **browserify** - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.
- **browserify-simple** - A simple Browserify + vueify setup for quick prototyping.
- **pwa** - PWA template for vue-cli based on the webpack template
- **simple** - The simplest possible Vue setup in a single HTML file

### Custom Templates
``` bash
vue init username/repo my-project
```
So for this project I found a template with a complete typescript webpack [ducksoupdev/vue-webpack-typescript](https://github.com/ducksoupdev/vue-webpack-typescript)

``` bash
vue init ducksoupdev/vue-webpack-typescript vue-sample-componets
```
__scripts:__
- `npm run dev`: Webpack + Typescript with proper config for source maps & hot-reload.
- `npm test`: Mocha unit tests
- `npm run test:debug`: Debug Mocha unit tests in Chrome
- `npm run test:watch`: Fast feedback Mocha unit tests with hot-reload
- `npm run coverage`: Karma coverage reporter
- `npm run lint`: Lint all Typescript files
- `npm run build`: build with HTML/CSS/JS minification.
- `npm run ci:teamcity`: Teamcity CI integration
- `npm run ci:jenkins`: Jenkins CI integration

> PS: 
> I Edited the template and replace _bootstrap_ with _material-design-lite_.
> Also removed the default generated components.


## Sample Custom Component
With all these modules installed in our app we can now create ann app that looked like an _Angular_ app.

sample-input.ts

``` javascript
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'sample-input',
    template: require('./sample-input.html'),
    props: {
        placeholder: String
    }
})
export class SampleComponent extends Vue {}
```

sample-input.html
``` html
<form action="#">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text">
    <label class="mdl-textfield__label" for="sample1">{{placeholder}}</label>
  </div>
</form>
```


**Parent Component:**
home.html
``` html
<div>
    <sample-input placeholder="Sample 1"></sample-input>
    <sample-input placeholder="Sample 2"></sample-input>
    <sample-input placeholder="Sample 3"></sample-input>
</div>
```

home.ts

``` javascript
import Vue from 'vue';
import Component from 'vue-class-component';
import { SampleComponent } from '../components/sample/index';

@Component({
    template: require('./home.html'),
    components: {
        'sample-input': SampleComponent
    },
})
export class HomeComponent extends Vue {}

```


index.html
``` html
...
<div id="app">
    <home></home>
</div>
...
```

main.ts

``` javascript
import * as Vue from 'vue';

import { HomeComponent } from './sample';


new Vue({
   el: '#app-main',
   components: {
     'home': HomeComponent
   }
});
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# lint the Typescript
npm run lint

# run the tests
npm test

# run the tests on changes
npm run test:watch

# run the test suite and generate a coverage report
npm run coverage

# run the tests on Teamcity
npm run ci:teamcity

# run the tests on Jenkins
npm run ci:jenkins

# build for production with minification
npm run build

# clean the production build
npm run clean
```


## Reference
- https://vuejs.org/v2/guide/
- https://github.com/vuejs/vue-cli
- https://github.com/ducksoupdev/vue-webpack-typescript
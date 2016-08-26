// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081",
  secondary: '#fff',
  font: 'Arial'
});

const buttonStyles = {
  background: 'blue',
  display: 'inline-block',
  padding: '10px 30px'
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="black">
              ES6
            </Heading>
            <Heading size={1} fit caps>
              A quick, conceptual primer
            </Heading>
            <Text bold caps textColor="tertiary">Also on Github, for your viewing pleasure</Text>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps style={buttonStyles}>Sweet, take me there</Text>
            </Link>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps textColor="">Let vs var vs const</Heading>
            <Heading size={4} caps textColor="primary" textFont="primary">
              Which one do I use???
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={4} caps textColor="primary" textFont="primary">
                There are a few schools of thought, but they basically boil down to:
            </Heading>
            <List>
              <ListItem>Use <Code textColor="white">var</Code> sometimes, but mostly <Code textColor="white">const</Code> and<Code textColor="white">let</Code></ListItem>
              <ListItem>Never use <Code textColor="white">var</Code>, only <Code textColor="white">const</Code> and<Code textColor="white">let</Code></ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={4} caps textColor="primary" textFont="primary">
                Personally?
            </Heading>
            <Text textColor="secondary">
                Only use <Code textColor="white">let</Code> and <Code textColor="white">const</Code>, reasons being:
            </Text>
            <List>
              <ListItem><Code textColor="white">var</Code> variables are hard to contain -- can leak out of their scope</ListItem>
              <ListItem>Can also be overwritten even if they have already been declared</ListItem>
              <ListItem>You can be a time wizard and access them before they are even assigned a value. Whoa! Too much power!</ListItem>
              <ListItem><Code textColor="white">let</Code> is only accesible to current scope, and cannot be re-declared</ListItem>
              <ListItem><Code textColor="white">const</Code> allows us to control the mutability of our data, and gives developers a clearer picture of data restrictions</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="white">
              Examples
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example1")}
              margin="20px auto"
            />
            <Text>Bonus tip: Unsure? Use <Code textColor="white">const</Code></Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              Functions
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={4} caps textColor="primary" textFont="primary">
                Improvements
            </Heading>
            <Text textColor="secondary">
                Arrow Functions <Code textColor="white">=></Code>
            </Text>
            <text>Arrow functions are more concise, and allow us to implicitly return values, reducing lines of code. They also inherit <Code textColor="white">this</Code> from the parent scope.</text>
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example2")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={3} caps textColor="primary" textFont="primary">
                But when should I use an arrow function, over a named function?
            </Heading>
            <Text textColor="white" >Basically, when you need/are using an anonymous function -- because that's what they are.</Text>
            <Text textColor="white">So really -- callback functions!</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={4} caps textColor="primary" textFont="primary">
                Improvements pt. deux
            </Heading>
            <Text textColor="secondary">
                Default <Code textColor="white">arguments</Code>
            </Text>
            <Text>Allow us to pass in default values to our functions</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example3")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              Template Strings
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="white" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={4} caps textColor="primary" textFont="primary">
                String construction made easy
            </Heading>
            <Text textColor="black">
                With template strings, we can now combine and manipulate strings in a much more efficient way.
            </Text>
            <Markdown textColor="white">
              {`
Instead of this:

~~~
const name = "Sloane";
const age = 23;
const info = "My name is " + name + " and I'm " + age + " years old.".
// > My name is Sloane and I'm 23 years old.
~~~

We can do this!

~~~
const name = "Sloane";
const age = 23;
const info \`My name is \${name} and I'm \${age} years old.\`
// > My name is Sloane and I'm 23 years old.
~~~            `}
            </Markdown>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="white">
              Many uses
            </Heading>
            <Text>Not only can we make string concatenation much easier on ourselves, but we can also process strings by "tagging" them.</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example4")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Strings also have some new methods, because f**k regex!
            </Heading>
            <Text>Here a few:</Text>
            <List>
              <ListItem>
                <Code textColor="white">.startsWith()</Code>
              </ListItem>
              <ListItem>
                <Code textColor="white">.endsWith()</Code>
              </ListItem>
              <ListItem>
                <Code textColor="white">.includes()</Code>
              </ListItem>
            </List>
            <Text>FYI: These are all case sensitive! So if you want to ignore case, you still have to use regex</Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              Destructuring
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Grabbing the data we need, instead of digging for it
            </Heading>
            <Text>No more chaining properties, with destructuring we can get the data we need right away</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example5")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              We can destructure arrays too!
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example6")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              Nu Loops
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Current loop shortcomings
            </Heading>
            <Text>We already have ways of iterating over data, but they have some faults:</Text>
            <List>
              <ListItem><Code textColor="white">for</Code> -- Does the trick, but has low readability and confusing syntax</ListItem>
              <ListItem><Code textColor="white">.forEach</Code> -- Cannot use break statement inside it</ListItem>
              <ListItem><Code textColor="white">for..in</Code> -- Better, but only gives you the index and can return things that have been added to the array prototype!</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              for...of to the rescue!
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              It literally does everything
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example7")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Objects are a bit of a special case
            </Heading>
            <Text>Since Objects are missing key iteration methods, <Code textColor="white">for..of</Code> will not work as intended on them for now, although you can work around it.</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example8")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              Arrays also have some new methods
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Getting to the point
            </Heading>
            <Text>The <Code>Array</Code> prototype has new methods to make searching/filtering simpler.</Text>
            <List>
              <ListItem><Code textColor="white">Array.from</Code> -- Takes array "like" data and gives us an actual array</ListItem>
              <ListItem><Code textColor="white">Array.find</Code> -- Find something in an array, if it exists</ListItem>
              <ListItem><Code textColor="white">Array.some/Array.every</Code> -- Finds out if at least one thing or all things are a specified value</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Here are those methods in action
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example9")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              ...Spread and ...Rest operators
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Lazy array creation and value retrieval
            </Heading>
            <Text>...Spread and ...Rest both make assumptions, just in different ways.</Text>
            <List>
              <ListItem>
                <Code textColor="white">...Spread</Code> -- Takes values, and spreads them out into an array.
                <Markdown>
                  {`
~~~
  const spanTags = [...document.querySelector('span')];
  // > [span, span, span, span]
~~~              `}
                </Markdown>
                </ListItem>
              <ListItem>
                <Code textColor="white">...Rest</Code> -- Grabs the "rest" of the data
                <Markdown>
                  {`
~~~
  const scores = ['Sloane Smith', 23, 95, 45, 67, 89];
  const [ name, ...scores ] = scores; // We can specify the first item in the array, and then grab the rest!
~~~              `}
                </Markdown>
              </ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              A big topic: Classes
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              A tech lunch unto itself
            </Heading>
            <Text>Suffice to say, that if you are comfortable with class declarations -- yay, you can use them now! Otherwise, keep using prototypal inheritance, since that underlying structure in JS has not (and will probably not) change.</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example10")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              Rapid Fire: More Big Topics
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Promises
            </Heading>
            <Text>Asynchronous, basically says "I WILL go do that thing, and when I'm done I'll let you know."</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example11")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Symbols
            </Heading>
            <Text>A new primitive type -- are good when you need a piece of data to be unique.</Text>
            <Markdown>
              {`
~~~
const prizeLogic = {
  [Symbol('Jason')]: { department: "Interactive" },
  [Symbol('Jason')]: { department: "Back-end" },
  [Symbol('Jason')]: { department: "Interactive" },
  [Symbol('Jason')]: { department: "Interactive" }
}
~~~              `}
            </Markdown>
            <Text>Symbols are not enumerable though, so you cannot loop over them. So, they are good for storing private data.</Text>
            <Markdown>
              {`
~~~
const symbols = Object.getOwnPropertySymbols(prizeLogic);
const data = symbols.map(symbol => prizeLogic[symbol]);
~~~              `}
            </Markdown>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Generators
            </Heading>
            <Text>Denotted by a <Code>*</Code> symbol, and also asynchronous, generator functions can be stopped and started again with the <Code>yield</Code> statement</Text>
            <Text>Particularly useful, for chaining Ajax requests:</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example12")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Proxies
            </Heading>
            <List>
              <ListItem>Allow you to overwrite the default behavior of an operation on an object.</ListItem>
              <ListItem>Takes two things, a target and a handler. The methods inside are called "traps".</ListItem>
              <ListItem>Good for handling data formatting:</ListItem>
            </List>
            <Markdown>
              {`
~~~
const phoneHandler = {
    set(target, name, value) {
        target[name] = value.match(/[0-9]/g).join('');
    }

    get(target, name) {
        return target[name].replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
    }
}

const phoneNumbers = new Proxy({}, phoneHandler);
~~~              `}
            </Markdown>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Proxies (Again)
            </Heading>
            <Text>Proxies are also useful in communicating with other developers, and handling errors:</Text>
            <Markdown>
              {`
~~~
const safeHandler = {
    set(target, name, value) {
        const likeKey = Object.keys(target).find(k => k.toLowercase() === name.toLowerCase());

        if(!(name in target) && likeKey) {
            throw new Error('Oops! Looks like we already have that property but with a different case');
        }
            target[name] = value;
    }
}

const safety = new Proxy({ id: 100 }, safeHandler);

safety.ID = 200;
~~~              `}
            </Markdown>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Sets
            </Heading>
            <Text>Like an Array, but you cannot add the same thing twice.</Text>
            <List>
              <ListItem>Has its own API for data management</ListItem>
              <ListItem>Cannot acces values by index</ListItem>
              <ListItem>Are actually just generators!</ListItem>
              <ListItem>Has a few different methods that make using them pretty easy: <Code>.add()</Code>, <Code>.delete()</Code>, <Code>.clear()</Code></ListItem>
            </List>
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example13")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              WeakSets
            </Heading>
            <Text>The same as a set, except</Text>
            <List>
              <ListItem>Can ONLY ever contain object</ListItem>
              <ListItem>Cannot loop over them</ListItem>
              <ListItem>No <Code>.clear()</Code> because they actually clean themselves!</ListItem>
              <ListItem>If a reference to a value in the wekset no longer exists, it is removed from the set.</ListItem>
            </List>
            <Markdown>
              {`
~~~
let cat1 = { name: "Sandro", age: 1 },
//let cat2 = { name: "Pablo", age: 1 } cat2 no longer exists in the WeakSet

const weakCatMap = new WeatSet([cat1, cat2]);
~~~              `}
            </Markdown>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Okay cool, but how should I use sets on the daily?
            </Heading>
            <Text>Sets are great when you have a collection of data, like IDs or something, that you want to track but do not want duplicates of.</Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Maps
            </Heading>
            <Text>Like a set, except they have a key AND a value.</Text>
            <List>
              <ListItem>Keys and values can be anything</ListItem>
              <ListItem>Have different methods available: <Code>.set()</Code> <Code>.get()</Code> <Code>.has()</Code></ListItem>
            </List>
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example14")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              WeakMaps
            </Heading>
            <Text>Similar to a map, but like a WeakSet -- is not enumerable, and manages its own garbage collection. WeakMaps also do not have a size.</Text>
            <Markdown>
              {`
~~~
let cat1 = { name: "Sandro", 1};
let cat2 = { name: "Pablo", 1 };

const weakestMap = new WeakMap();
weakestMap.set(cat2, "My cat is better than your cat");
~~~              `}
            </Markdown>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Sweet! When should I use these dope maps?
            </Heading>
            <Text>Usually maps and weakmaps are best when you want to store some metadata about an object, like how many times something was interacted with or clicked on the DOM.</Text>
            <Markdown>
              {`
~~~
const clickCounts = new Map();

const buttons = querySelectorAll('button');

// Add click counts for each button node key
buttons.forEach(button => {
    clickCounts.set(button, 0);
    button.addEventListener('click', function() {
        const val = clickCounts.set(this, val + 1);
    });
});
~~~              `}
            </Markdown>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1} caps textColor="secondary">
              Thanks! Questions?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps textColor="secondary">
              Resources:
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Strings also have some new methods, because f**k regex!
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

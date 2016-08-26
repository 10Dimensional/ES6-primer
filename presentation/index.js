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
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example1")}
              margin="20px auto"
            />
            <Text>Bonus tip: Unsure? Use <Code textColor="white">const</Code></Text>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
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

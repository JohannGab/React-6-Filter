import React, { Component } from "react";
import Quote from "./Quote";

/* Constante qui contient un tableau contenant plusieurs objets*/
const quotes = [
  {
    quote:
      "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
    character: "Lisa Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
    characterDirection: "Right"
  },
  {
    quote:
      "I live in a single room above a bowling alley...and below another bowling alley.",
    character: "Frank Grimes",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887",
    characterDirection: "Left"
  },
  {
    quote: "Ahh! Sweet liquor eases the pain.",
    character: "Troy McClure",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112",
    characterDirection: "Right"
  },
  {
    quote:
      "Shoplifting is a victimless crime, like punching someone in the dark.",
    character: "Nelson Muntz",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    characterDirection: "Left"
  },
  {
    quote:
      "You're turning me into a criminal when all I want to be is a petty thug.",
    character: "Bart Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
    characterDirection: "Right"
  },
  {
    quote: "But my mom says I'm cool.",
    character: "Milhouse Van Houten",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
    characterDirection: "Right"
  },
  {
    quote:
      'For once maybe someone will call me "sir" without adding, "You\'re making a scene."',
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection: "Right"
  },
  {
    quote: "Nothing you say can upset us. We're the MTV generation.",
    character: "Bart Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
    characterDirection: "Right"
  },
  {
    quote: "Oh, so they have Internet on computers now!",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection: "Right"
  },
  {
    quote: "Ahh! Sweet liquor eases the pain.",
    character: "Troy McClure",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112",
    characterDirection: "Right"
  }
];
/* Constante qui contient un tableau contenant plusieurs objets*/

class App extends Component {
  /* déclaration de la state à un état Boléen False */
  state = {
    boleen: false
  };
  /* déclaration de la state à un état Boléen False */

  /* fonction qui permet de modifier la state de FALSE A TRUE via (!) */
  inverseboleen = () => {
    this.setState({ boleen: !this.state.boleen });
  };
  /* fonction qui permet de modifier la state de FALSE A TRUE via (!) */

  render() {
    return (
      <div>
        {/* Button click qui appel va valeur TRUE */}
        <button onClick={this.inverseboleen}>
          {/* déclaration des noms de : True et de False */}
          {this.state.boleen ? "no filter" : "filter"}
        </button>

        {/* Le tableau "quotes" est Filtré par filter puis le nouveau tableau "quote" de filter nous retourne soit un résultat qui est équivalent à True donc Affiche tout le tableau ou (||) retourne les characters qui inclue la string "Simpsons*/}
        {quotes
          .filter(
            quote => !this.state.boleen || quote.character.includes("Simpson")
          )
          .map((quot, index) => (
            <Quote {...quot} />
          ))}
        {/* Le map affiche ce que le filter aura filtré  via le tableau du map "quot" qui sera affecté en tant que paramètre du composant <Quote{...}>  les (...) signifie que toutes les clés du tableau "quot" filtré par filter seront prises */}
      </div>
    );
  }
}

export default App;
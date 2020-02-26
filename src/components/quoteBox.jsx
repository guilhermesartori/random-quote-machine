import React, { Component } from "react";

const quotes = [
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford"
  },
  {
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart"
  },
  {
    quote:
      "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau"
  },
  {
    quote:
      "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
    author: "Sheryl Sandberg"
  },
  {
    quote: "We become what we think about.",
    author: "Earl Nightingale"
  },
  {
    quote:
      "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford"
  },
  {
    quote: "You can’t use up creativity. The more you use, the more you have.",
    author: "Maya Angelou"
  },
  {
    quote:
      "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau"
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  },
  {
    quote:
      "Too many of us are not living our dreams because we are living our fears.",
    author: "Les Brown"
  }
];

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = quotes[Math.floor(Math.random() * quotes.length)];
    this.generateNewQuote = this.generateNewQuote.bind(this);
  }
  generateNewQuote() {
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    while (quote.author === this.state.author) {
      quote = quotes[Math.floor(Math.random() * quotes.length)];
    }
    this.setState(quote);
  }
  render() {
    return (
      <div id="quote-box">
        <div id="text">
          <p>
            <span id="quotation-mark">"</span>
            {this.state.quote}
          </p>
          <p id="author">-{this.state.author}</p>
        </div>
        <a
          href={`https://twitter.com/intent/tweet?&text="${this.state.quote}" - ${this.state.author}`}
          id="tweet-quote"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button id="twitter" className="btn btn-primary">
            <i class="fa fa-twitter"></i>
          </button>
        </a>
        <button id="tumblr" className="btn btn-primary">
          <i class="fa fa-tumblr"></i>
        </button>
        <button
          id="new-quote"
          className="btn btn-primary"
          onClick={this.generateNewQuote}
        >
          New Quote
        </button>
      </div>
    );
  }
}

export default QuoteBox;

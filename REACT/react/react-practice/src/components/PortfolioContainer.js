import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    let page;
    if (this.state.currentPage === "About") {
      page = <About />
    } else if (this.state.currentPage === "Blog") {
      page = <Blog />
    } else if (this.state.currentPage === "Contact") {
      page = <Contact />
    } else {
      page = <Home />
    }

    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {page}
      </div>
    );
  }
}

export default PortfolioContainer;

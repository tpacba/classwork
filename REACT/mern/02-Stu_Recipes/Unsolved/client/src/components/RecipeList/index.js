import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeListItem(props) {
  console.log(props.recipes)

  return (
    <li className="list-group-item">

      {props.recipes.map(item => (
        <Container key={item.key}>
          <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={item.thumbnail} />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>{item.title}</h3>
              <p>
                Ingredients: {item.ingredients.join(", ")}
              </p>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href={item.href}
              >
                Go to recipe!
          </a>
            </Col>
          </Row>
        </Container>
      ))}
      
    </li>
  );
}


// href: "http://www.recipezaar.com/Cajun-Hamburger-Steak-122095"
// ingredients: (17) ["bacon", "green pepper", "black pepper", "cayenne", "cajun seasoning", "steak sauce", "eggs", "garlic", "green onion", "ground beef", "liquid smoke flavoring", "onions", "salt", "sausage", "soy sauce", "water", "worcestershire sauce"]
// thumbnail: ""
// title: "Cajun Hamburger Steak "
// _id: "5f6cdb264374cb7b854e1fad"
// __proto__: Object
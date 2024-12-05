import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          commodi dolore aliquam tenetur, impedit voluptatibus cupiditate?
          Repellat, suscipit velit voluptatum explicabo accusamus dolores
          tempore praesentium deserunt quis modi mollitia id magnam similique
          nulla esse veniam dolorem voluptate aut quod! Voluptas, dicta soluta
          non nostrum temporibus obcaecati fuga ex sint distinctio?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          doloremque voluptate dolorum natus autem nostrum, minus fugit
          consequatur commodi numquam ab iusto rerum totam, deleniti, a nulla
          adipisci quaerat at consectetur unde assumenda! Asperiores, ullam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          soluta?
        </p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Biography;

import React from "react";

import Flickity from "react-flickity-component";
import TextHeader from "../../Utils/TextHeader/TextHeader";
import ReviewCard from "./modules/ReviewCard";
import Stars from "./modules/Stars";

const Reviews = () => {
  const flickityOptions = {
    initialIndex: 0,
    autoPlay: 3000,
    pageDots: false,
  };

  return (
    <div>
      <TextHeader
        title="We love our talents and partners"
        category="Reviews"
        description="Check out what our customers have to say about us."
        className="my-4"
      />

      <Flickity
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
      >
        <ReviewCard
          stars={5}
          name="Kenneth Suarez"
          review="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <ReviewCard
          stars={3}
          name="Kenneth Suarez"
          review="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <ReviewCard
          stars={1}
          name="Kenneth Suarez"
          review="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <ReviewCard
          stars={0}
          name="Kenneth Suarez"
          review="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </Flickity>
    </div>
  );
};

export default Reviews;

import React from 'react';
import Flickity from 'react-flickity-component';

import TextHeader from 'src/components/Utils/TextHeader/TextHeader';
import ReviewCard from './modules/ReviewCard';

const Reviews = () => {
  const flickityOptions = {
    initialIndex: 0,
    autoPlay: 3000,
    pageDots: false,
  };

  return (
    <div className="pt-8">
      <TextHeader
        title="We love our talents and partners"
        category="Reviews"
        description="Check out what the people say about us."
      />
      <hr className="my-4"></hr>

      <Flickity
        className={'carousel h-auto'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
      >
        <ReviewCard
          stars={5}
          name="Oscar R."
          review="My relationship with Eucalypto throughout my whole recruitment process has been amazing: supportiveness, counselling... They made my life easier and I am so happy I found them."
          src="/file/img/reviews/oscar.jpg"
        />
        <ReviewCard
          stars={4}
          name="Kenneth S."
          review=" I had a very human experience in the process with Eucalypto. They really listened to me and help me during the whole selection process. Eventually I chose the company that fitted the most with my ambitions and my needs."
          src="/file/img/reviews/kenneth.jpg"
        />
        <ReviewCard
          stars={5}
          name="Katie L."
          review="I was scared about changing company, but thanks to Eucalypto took the right decision. I feel very satisfied with my new job!"
          src="/file/img/reviews/empty.png"
        />
        <ReviewCard
          stars={5}
          name="Oliver C."
          review="They understood my technical background, not based on keywords. They placed me in the project I dreamed about"
          src="/file/img/reviews/empty.png"
        />
      </Flickity>
    </div>
  );
};

export default Reviews;

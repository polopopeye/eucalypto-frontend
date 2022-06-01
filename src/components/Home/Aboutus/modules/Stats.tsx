import React from 'react';
// @ts-ignore
import AnimatedNumber from 'animated-number-react';

const Stats = () => {
  const [num, setNum] = React.useState(331231);

  return (
    <>
      <div className="grid grid-cols-5 text-center py-8">
        <div className="col-span-2 ">
          <p className="py-5 text-primary font-bold text-xl bg-white w-20 h-20 m-auto rounded-full border-secondary border-4 ">
            +
            <AnimatedNumber
              value={7}
              duration={4000}
              formatValue={(value: any) => value.toFixed(0)}
            />
          </p>
          <p className="py-2 drop-shadow-2xl">Years of experience</p>
        </div>
        <div>
          <p className="py-5 text-primary font-bold text-xl bg-white w-20 h-20 m-auto rounded-full border-secondary border-4">
            +
            <AnimatedNumber
              value={500}
              duration={5000}
              formatValue={(value: any) => value.toFixed(0)}
            />
          </p>
          <p className="py-2">Candidates</p>
        </div>
        <div className="col-span-2">
          <p className="py-5 text-primary font-bold text-xl bg-white w-20 h-20 m-auto rounded-full border-secondary border-4">
            +
            <AnimatedNumber
              value={50}
              duration={6000}
              formatValue={(value: any) => value.toFixed(0)}
            />
          </p>
          <p className="py-2">Companies</p>
        </div>
      </div>
    </>
  );
};

export default Stats;

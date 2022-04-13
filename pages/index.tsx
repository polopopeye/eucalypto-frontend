import { collection, getDocs, getFirestore } from "firebase/firestore";
// import type { NextPage } from 'next';
import Head from "next/head";
import { useEffect } from "react";
import { array } from "yargs";
import iniApp from "../src/app/db";
import Hero from "../src/components/Home/Hero/Hero";
import Reviews from "../src/components/Home/Reviews/Reviews";
import ScrollSteps from "../src/components/Home/ScrollSteps/ScrollSteps";

const Home = (props: any) => {
  const { dbResponse } = props;

  return (
    <div>
      <Hero
        title="Your hidden"
        titleFeatured=" oportunities"
        src=" https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam."
        btnText="Find out more"
        href="/search"
      />
      <Reviews />

      <ScrollSteps />
      <h1 className="text-3xl font-bold underline text-primary bg-secondary">
        {dbResponse.map((item: any, index: number) => {
          return (
            <div key={index}>
              <p>{item.titulo}</p>
            </div>
          );
        })}
      </h1>
    </div>
  );
};

export async function getStaticProps() {
  let dbResponse: Array<any> = Array();
  const db = getFirestore(iniApp);
  const querySnapshot = await getDocs(collection(db, "test"));
  querySnapshot.forEach((doc) => {
    dbResponse.push(doc.data());
    console.log(doc.data());
  });

  return {
    props: {
      dbResponse,
    },
  };
}

export default Home;

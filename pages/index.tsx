import { collection, getDocs, getFirestore } from "firebase/firestore";

import iniApp from "../src/app/db";

import ScrollSteps from "../src/components/Home/ScrollSteps/ScrollSteps";

const Home = (props: any) => {
  const { dbResponse } = props;

  return (
    <div>
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

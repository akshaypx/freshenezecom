import { useContext } from "react";
import MyContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";

const Home = () => {
  const context = useContext(MyContext);
  console.log(context);
  return (
    <Layout>
      <div>Home</div>
    </Layout>
  );
};

export default Home;

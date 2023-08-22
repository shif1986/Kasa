import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Header from "../Components/Header";
import data from "../data.json";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Card gallery={data} />
      <Footer />
    </div>
  );
};

// connaitre totalites de datas

// const newData=data.map((values)=>{
// console.log(values.location);
// })

export default Home;

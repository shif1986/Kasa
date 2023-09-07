import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Header from "../Components/Header";
import data from "../data.json";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="container">
  
      <Banner />
      <Card gallery={data} />
      
    </div>
  );
};

// connaitre totalites de datas

// const newData=data.map((values)=>{
// console.log(values.location);
// })

export default Home;

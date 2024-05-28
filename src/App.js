
import './App.css';
import CardsData from './components/DB';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Category from './components/Category';
import Cards from './components/Cards';
import TopTrending from './components/TopTrending';
console.log(CardsData);

function App() {
  return (
   <>
   <Nav />
   <Slider />
   <Category />

   <div class="Container Card-Container">
<div class="Cards">
{
CardsData.map((record)=>{
 return(<Cards Image = {record.Image} Authorimg ={record.Authorimg}/>);

})}

</div>
  <div class="Pagination">
      <a href="#"> Show Me More </a>
  </div>
</div>


<div class="Container-Full Top-Trending">
    <div class="Container">
    <div class="section">
        <h1>Top trending topics</h1>
        <p> Discover over 100 topics</p>

    </div>
    <div class="Cards">
    {
CardsData.map((record)=>{
return(<TopTrending Image = {record.Image} />);


})}

<TopTrending Image = {require("./images/9.jpeg")} />
<TopTrending Image = {require("./images/10.jpeg")} />
    </div>
   

</div>
</div>




   </>
  );
}

export default App;

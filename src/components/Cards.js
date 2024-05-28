
import './Cards.css';

const Cards = (props)=>{
    return(
        <>
       

<div class="Card">
    {/* <!-- Card top Section --> */}
    <div class="Card-Top">
        <img src={props.Image} alt="Product Image" />
        <a href="#" class="A1">Games</a>
        <a href="#" class="A2">Photos</a>
    </div>
      {/* <!-- Card middle Section --> */}
    <div class="Card-Middle">
        <div class="Card-Details">
            <div class="Author"><img src={props.Authorimg}/></div>
            <a href="">Frederique &nbsp; . &nbsp;</a>
            <a href=""> Sep 30, 2023</a>
        </div>
       <h4>Eum delectus in minima rem</h4>
       
    </div>
      {/* <!-- Card bottom Section --> */}
    <div class="Card-Bottom ">
        <span><i class="fa-regular fa-heart"></i>97</span>
        <span><i class="fa-regular fa-comment-dots"></i>0</span>
        <span class="Share"><i class="fa-solid fa-arrow-up-from-bracket"></i></span>
    </div>
</div>

        </>
    );
}
export default Cards;
import './Slider.css';
function Slider(){

return(

    <>
    {/* <!-- Slider Section  --> */}
<div class="Container-Full slider">
    <div class="Container">
        {/* <!-- Slider top section --> */}
        <div class="Slider-Top">
            <h1>Minima </h1>
            <p> <b>8 Articles </b> were found for keyword <b>Minima</b> </p>
        </div>

         {/* <!-- Slider Middle section --> */}
         <div class="Slider-Middle">
           <span id="search"> <i class="fa-solid fa-magnifying-glass"></i> </span>
           <input type="text" placeholder="Search" />
           <span id="arrow"><i class="fa-solid fa-arrow-right"></i></span>
         </div>

          {/* <!-- Slider bottom section --> */}
        <div class="Slider-Bottom">
            <p>Suggestions:
                <a href="#">Labore</a>
                <a href="#">Minima</a>
                <a href="#">Rerum</a>
                <a href="#">Possimus</a>
                <a href="#">Magni</a>
            </p>
        </div>
        
    </div>
</div>

{/* <!-- End Slider Section --> */}
    </>
);
}
export default Slider;
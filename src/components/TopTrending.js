import './TopTrending.css';
const TopTrending =(props)=>{
    return(

        <>
         
    <div class="Card">
        <a href="#" class="A1">#1</a>
        {/* <!-- Card top Section --> */}
        <div class="Card-Top">
            <img src={props.Image} alt="Product Image" />
            
        </div>
          {/* <!-- Card middle Section --> */}
        <div class="Card-Middle">
           <h4>Photos</h4>
           <p>17 Articles</p>
           
        </div>
         
    </div>
  
        </>
    );
}

export default TopTrending;
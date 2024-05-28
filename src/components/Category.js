import './Category.css';
const Category = ()=>{
return(
    <>
    {/* <!-- Category Section --> */}

<div class="Container Categrory">
{/* <!-- Left Categrory Section --> */}
<div class="Cat-Left">
<ul>
<li><a href="#" class="Active">Articles
   </a> </li>
<li><a href="#"> Categories
   </a> </li>
<li><a href="#"> Tags
   </a> </li>
<li><a href="#"> Authors</a> </li>
</ul>
</div>
{/* <!-- right Categrory Section --> */}
<div class="Cat-Right">
<select>
<option >Filters</option>
<option >Most Recent</option>
<option >Most Liked</option>
<option >Most Discussed</option>
<option >Most Viewed</option>
</select>
</div>
</div>
{/* <!-- Category Section End--> */}
    </>
);
}

export default Category;
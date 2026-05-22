import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type PaginationProps = {
  currentPage:number;
  totalPages:number;
  onPageChange:(page:number)=>void;
};

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}:PaginationProps){

function handlePrev(){

if(currentPage>1){

onPageChange(currentPage-1);

}

}

function handleNext(){

if(currentPage<totalPages){

onPageChange(currentPage+1);

}

}

return(

<div className="flex justify-center items-center gap-3 pt-2">

<button

onClick={handlePrev}

disabled={currentPage===1}

className="
w-10
h-10
rounded-xl
border
border-secondary/20
bg-white
flex
items-center
justify-center
transition-all
duration-300
hover:border-accent
hover:text-accent
disabled:opacity-40
disabled:cursor-not-allowed
"

>

<FiChevronLeft/>

</button>

{

Array.from(
{length:totalPages},
(_,index)=>index+1
)

.map((page)=>(

<button

key={page}

onClick={()=>onPageChange(page)}

className={`
w-10
h-10
rounded-xl
border
flex
items-center
justify-center
transition-all
duration-300

${
currentPage===page

?

"bg-accent text-white border-accent shadow-lg"

:

"bg-white border-secondary/20 hover:border-accent hover:text-accent"
}

`}

>

{page}

</button>

))

}

<button

onClick={handleNext}

disabled={currentPage===totalPages}

className="
w-10
h-10
rounded-xl
border
border-secondary/20
bg-white
flex
items-center
justify-center
transition-all
duration-300
hover:border-accent
hover:text-accent
disabled:opacity-40
disabled:cursor-not-allowed
"

>

<FiChevronRight/>

</button>

</div>

);

}

export default Pagination;
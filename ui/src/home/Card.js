function Card(){
    return(
            <>
<div class="grid grid-cols-3 gap-8">
    <div class="m-9 ">
        <div class="w-60 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="w-80 rounded-t-lg h-80" 
                src="https://timesofindia.indiatimes.com/photo/92282228.cms" alt="product image" />
            </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Name of the movie 1</h5>
            </a>
            <div class="flex items-center justify-between">
                
                <span class="text-3xl font-bold text-gray-900 dark:text-white">Rating:-<span class="text-red-500">8.5/<span class="text-lg">10</span></span></span>

                </div>

        </div>
    </div>
    </div>
  
    <div class="m-9 ">
        <div class="w-60 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="w-60 rounded-t-lg h-80" 
                src="https://timesofindia.indiatimes.com/photo/92282228.cms" alt="product image" />
            </a>
            <div class="px-5 pb-5">
                <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Name of the movie</h5>
                </a>
                    <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">Rating:-<span class="text-red-500">8.5/<span class="text-lg">10</span></span></span>

                    </div>
            </div>
        </div>
    </div>  
    
    <div class="m-9 ">
    <div class="w-60 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="w-60 rounded-t-lg h-80" 
            src="https://timesofindia.indiatimes.com/photo/92282228.cms" alt="product image" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Name of the movie</h5>
            </a>
            <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">Rating:-<span class="text-red-500">8.5/<span class="text-lg">10</span></span></span>

            </div>
        </div>
    </div>
    </div>    
</div> 
        </>
    )

    
}
export default Card;
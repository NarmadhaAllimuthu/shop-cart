function Header({topic}){

return <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">{topic.header}</h1>
                    <p class="lead fw-normal text-white-50 mb-0">{topic.para}</p>
                </div>
            </div>
        </header>
       
                }

export default Header;                
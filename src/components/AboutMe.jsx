import OwlCarousel from 'react-owl-carousel';  
function AboutMe(){
    return(
        <>
        
            <div className="container-fluid" style={{padding:15}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        
                        <div class="col-lg-6">
                            <div class="position-relative mb-3">
                                <center><h2>Welcome TO JSFAMILY</h2></center>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi dolore qui earum excepturi sint aspernatur. Nihil provident ea, mollitia voluptatem, deserunt architecto consectetur ullam accusantium expedita delectus, pariatur voluptatum.</p>
                            </div>
                        </div>
                       
                        <div class="col-lg-6">
                            
                               <center><h1>Introduction</h1></center>
                               <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <div class="card">
                                    <div class="card-header">
                                        Quote1
                                    </div>
                                    <div class="card-body">
                                        <blockquote class="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                        </blockquote>
                                    </div>
                                </div>
                                    </div>
                                    <div class="carousel-item">
                                    <div class="card">
                                    <div class="card-header">
                                        Quote2
                                    </div>
                                    <div class="card-body">
                                        <blockquote class="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                        </blockquote>
                                    </div>
                                </div>
                                    </div>
                                    <div class="carousel-item">
                                    <div class="card">
                                    <div class="card-header">
                                        Quote3
                                    </div>
                                    <div class="card-body">
                                        <blockquote class="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                        </blockquote>
                                    </div>
                                </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                                </div>
                               {/* <OwlCarousel className="owl-carousel news-carousel carousel-item-4 position-relative" margin={10} autoplay smartSpeed={1000} item={0} dots={false} loop nav navText={['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>']}>
                                <div class="card">
                                    <div class="card-header">
                                        Quote
                                    </div>
                                    <div class="card-body">
                                        <blockquote class="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                        </blockquote>
                                    </div>
                                </div>
                                </OwlCarousel> */}
                            
                        </div>
                       
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
   
        </>
    );
}

export default AboutMe
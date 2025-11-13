import imgBTCpedia from "./img/btcpedia.png"
import imgPyformance from "./img/pyformance.png"
import imgMovieAnalysis from "./img/movie_analysis.png"
import "./Projects.css"


export default function()
{
    return (
        <>
        <h1 className="text-center mt-4">Some projects</h1>
        <div className="col-11 mt-4" style={{margin: "0 auto"}}>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <img src={imgBTCpedia} alt=""/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">BTCpedia</h5>
                        <p className="card-text">A Bitcoin tracker and guide <br/> <a href="https://github.com/prokope/BTCpedia" target="_blank">View on GitHub</a> </p>
                    </div>
                </div>  

                <div className="col">
                    <div className="card">
                        <img src={imgPyformance} alt=""/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Pyformance</h5>
                        <p className="card-text">A study dashboard <br/> <a href="https://github.com/prokope/pyformance" target="_blank">View on GitHub</a> </p>
                    </div>
                </div>
                
                <div className="col">
                    <div className="card">
                        <img src={imgMovieAnalysis} alt="" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Movie Dashboard</h5>
                        <p className="card-text">Analyzing movie ratings <br/> <a href="https://github.com/prokope/movie-dashboard" target="_blank">View on GitHub</a> </p>
                    </div>
                </div>
            </div>

            <div className="col-11">    
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
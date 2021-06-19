import Thumbnail from "./Thumbnail";
const Results = ({ results }) => {
    
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results.results?.map((result, index) => (
                <Thumbnail key={index} result={result} />
            ))}
        </div>
    );
};

export default Results;
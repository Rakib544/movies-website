import Thumbnail from "./Thumbnail";
const Results = ({ results }) => {
    console.log(results)
    return (
        <div>
            {results.results?.map((result, index) => (
                <Thumbnail key={index} result={result} />
            ))}
        </div>
    );
};

export default Results;
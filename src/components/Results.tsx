type ResultProps = {
  id: string;
  original_title: string;
};

type ResultsProps = {
  results: ResultProps[];
};

function Results({ results }: ResultsProps) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
}

export default Results;

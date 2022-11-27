const LineText = (props) => {
  const lines = props.text;
  return <p className="py-2 my-2 whitespace-pre-wrap">{lines} </p>;
};
export default LineText;

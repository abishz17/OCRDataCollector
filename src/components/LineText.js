const LineText = (props) => {
  const lines = props.text;
  return (
    <p className="text"> {lines} </p>
    // <TextareaAutosize
    //     maxRows={4}
    //     aria-label="maximum height"
    //     placeholder="Maximum 4 rows"
    //     value={lines}
    //     style={{ width: 600 }}
    // />
  );
};
export default LineText;

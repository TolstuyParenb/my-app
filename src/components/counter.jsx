import React from "react";
const Counter = (props) => {
  const { value } = props;

  const formatValue = () => {
    return value === 0 ? <span>empty</span> : value;
  };
  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };
  const handleIncrement = (id) => {
    console.log("handleIncrement");
    // setValue((prevState)=>prevState + 1)
    props.onIncrement(props.id);
  };
  const handlDecrement = (id) => {
    console.log("handlDecrement");
    // setValue((prevState)=>prevState - 1)
    props.onDecrement(props.id);
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <button
        className="btn btn-primary m-2 btn-sm"
        onClick={() => handleIncrement()}
      >
        +
      </button>

      <button
        className="btn btn-primary m-2  btn-sm"
        onClick={() => handlDecrement()}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;

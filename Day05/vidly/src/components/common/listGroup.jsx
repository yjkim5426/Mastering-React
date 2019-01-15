import React from "react";

const ListGroup = props => {
  return (
    <ul className="list-group">
      {props.items.map((item) => (
        <li
          className={ item === props.selectedItem ? "list-group-item active" : "list-group-item"}
          key={item[props.valueProperty]}
          onClick={() => props.onItemSelect(item)}
        >
          {item[props.textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;

// input: currentGenre, genres,
// output: onclick event - filtering genres

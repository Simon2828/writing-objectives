import React, { useState } from "react";

const Editable = ({
  text,
  type,
  placeholder,
  value,
  children,
  loId,
  ...props
}) => {
  const [isEditing, setEditing] = useState(false);
  const [lOUpdated, updateLo] = useState(false);

  const handleKeyDown = (event, type) => {
    updateLo(true);
    if (event.key === 'Enter') {
      event.target.blur();
    }
  };

  const saveEdit = (value) => {
    (async () => {
      console.log("value: ", value);
      const loIdNumber = loId.substring(17);
       await fetch(
        `http://localhost:3033/update/learning-objective/${loIdNumber}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: value }),
        }
      );
    })();
  };

  return (
    <section {...props}>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => handleKeyDown(e, type)}
        >
          {children}
        </div>
      ) : (
        <div
          onClick={() => {
            setEditing(true);
          }}
          onFocus={function (e) {
            // sets cursor to end of input text
            const val = e.target.value;
            e.target.value = "";
            e.target.value = val;
          }}
        >
          <span>
            {value ||
              placeholder ||
              `Sorry something went wrong.
            Click on Learning Objectives to search again.`}
          </span>
          {
            // should this be in the EditLearningObjective and come through as children?
            lOUpdated ? (
              <button
                onClick={() => {
                  saveEdit(value);
                }}
              >
                save
              </button>
            ) : null
          }
        </div>
      )}
    </section>
  );
};

export default Editable;

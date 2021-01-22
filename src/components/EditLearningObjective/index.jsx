import React, { useContext, useState } from "react";
import LearningObjective from "../LearningObjective";
import Editable from "../Editable";

import { useAuth0 } from "@auth0/auth0-react";

const EditLearningObjective = (props) => {
  const { user } = useAuth0();
  // {JSON.stringify(user, null, 2)} - user for auth / id for database... use sub property of user

  const [lO, updateLo] = useState(props.location.learningObjective);

  return (
    <>
      <Editable
        text={props.location.learningObjective}
        type="input"
        value={lO}
        loId={props.location.loId}
      >
        <input
          autoFocus
          type="text"
          name="task"
          value={lO}
          onChange={(e) => updateLo(e.target.value)}
        />
      </Editable>
      {props.location.stepsToSuccessToEdit}
    </>
  );
};

export default EditLearningObjective;

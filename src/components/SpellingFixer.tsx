import axios from "axios";
import React, {useState} from "react";
import LoadingSpinner from "./LoadingSpinner";
import ShowCorrected from "./ShowCorrected";

type Props = {corpus: string};

const SpellingFixer = ({corpus}: Props) => {
  const [corrected, setCorrected] = useState(null);
  const url = "https://us-east1-serverless-306422.cloudfunctions.net/spellchecker";
  
  return (
    <>
      {corrected === null
         ? <LoadingSpinner />
         : <ShowCorrected text={corrected} />
      }
    </>
  );
};

export default SpellingFixer;
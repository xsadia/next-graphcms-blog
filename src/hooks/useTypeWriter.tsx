import { useState, useEffect } from "react";

type PauseType = {
  [key: string]: number;
};

const useTypewriter = (text: string, pauses: PauseType = {}) => {
  const [lengthTyped, setLengthTyped] = useState<number>(0);

  useEffect(() => {
    if (lengthTyped < text.length) {
      const currentCharacter = text[lengthTyped - 1];
      const pause = pauses[currentCharacter] || 35;

      const timeout = setTimeout(() => {
        setLengthTyped(lengthTyped + 1);
      }, pause);

      return () => clearTimeout(timeout);
    }
  }, [lengthTyped, pauses, text]);

  const textTyped = text.slice(0, lengthTyped);
  const textToType = text.slice(lengthTyped);

  return [textTyped, textToType];
};

export default useTypewriter;

import { createContext, useContext, useEffect, useState } from "react";
import SortingIterationStep, {
  SortingIterationStepAction,
} from "../types/sortingIterationStep";
import { quickSort } from "../algorithms/sorting/quick";
import { bubbleSort } from "../algorithms/sorting/bubble";
import { Note, NotePlayer } from "../utils/audio";
import {
  SortingAlgorithm,
  isValidSortingAlgorithm,
} from "../types/sortingAlgorithm";
import insertionSort from "../algorithms/sorting/insertion";
import gnomeSort from "../algorithms/sorting/gnome";
import mergeSort from "../algorithms/sorting/merge";
import heapSort from "../algorithms/sorting/heap";

export const DEFAULT_SORTING_ALGORITHM = SortingAlgorithm.QUICK;
const DEFAULT_INPUT_SIZE = 100;
const DEFAULT_PLAYBACK_TIME_SECONDS = 10;

const MIN_FREQUENCY = 220;
const MAX_FREQUENCY = 660;

export type SortingContextType = {
  input: number[];
  generateInput: () => void;
  inputSize: number;
  setInputSize: (size: number) => void;
  sortingAlgorithm: SortingAlgorithm;
  setAlgorithm: (algorithm: SortingAlgorithm) => void;
  playbackTimeS: number;
  setPlaybackTime: (time: number) => void;
  audioEnabled: boolean;
  setAudioEnabled: (enabled: boolean) => void;
  playStepAudio: (step: SortingIterationStep, values: number[]) => void;
  iterationSteps: SortingIterationStep[];
};

const SortingContext = createContext<SortingContextType>({
  input: [],
  iterationSteps: [],
  inputSize: DEFAULT_INPUT_SIZE,
  sortingAlgorithm: DEFAULT_SORTING_ALGORITHM,
  playbackTimeS: DEFAULT_PLAYBACK_TIME_SECONDS,
  audioEnabled: true,
  playStepAudio: () => {},
  setAudioEnabled: () => {},
  setInputSize: () => {},
  setAlgorithm: () => {},
  setPlaybackTime: () => {},
  generateInput: () => {},
});

export function SortingContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState<number[]>([]);
  const [iterationSteps, setIterationSteps] = useState<SortingIterationStep[]>(
    []
  );
  const [inputSize, setInputSize] = useState<number>(DEFAULT_INPUT_SIZE);
  const [sortingAlgorithm, setAlgorithm] = useState<SortingAlgorithm>(
    DEFAULT_SORTING_ALGORITHM
  );
  const [playbackTimeS, setPlayBackTime] = useState<number>(
    DEFAULT_PLAYBACK_TIME_SECONDS
  );

  const [notePlayer] = useState(new NotePlayer());
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);

  const generateInput = () => {
    const arr = [...Array(inputSize).keys()].map((i) => i + 1);
    arr.sort(() => Math.random() - 0.5);
    setInput(arr);
  };

  //Whenever inputsize changes, generate new input
  useEffect(() => {
    generateInput();
  }, [inputSize]);

  const setSortingAlgorithm = (algorithm: SortingAlgorithm) => {
    if (!isValidSortingAlgorithm(algorithm)) return;
    if (algorithm !== sortingAlgorithm) {
      setAlgorithm(algorithm);
      generateInput();
    }
  };

  useEffect(() => {
    const iterationSteps = sort(input, sortingAlgorithm);

    //manually add the final step/state (which contains no swaps)
    if (iterationSteps.length > 0) {
      iterationSteps.push({
        action: SortingIterationStepAction.NONE,
        indexes: [],
      });
    }

    setIterationSteps(iterationSteps);
  }, [input, sortingAlgorithm]);

  //Generate input on mount
  useEffect(() => {
    generateInput();
  }, []);

  const playStepAudio = (step: SortingIterationStep, values: number[]) => {
    if (!step || !notePlayer) return;
    if (!audioEnabled) return;

    const averageValue = values.reduce((a, b) => a + b, 0) / values.length;
    //calculate frequency. The higher the average value, the higher the frequency
    const frequency =
      MIN_FREQUENCY + (averageValue / inputSize) * MAX_FREQUENCY;

    const note = new Note(notePlayer.ctx!, frequency, "sine");
    notePlayer.playNote(note, 0.1);
  };

  return (
    <SortingContext.Provider
      value={{
        input: input,
        inputSize: inputSize,
        iterationSteps: iterationSteps,
        sortingAlgorithm: sortingAlgorithm,
        playbackTimeS: playbackTimeS,
        audioEnabled: audioEnabled,
        playStepAudio: playStepAudio,
        setAudioEnabled: setAudioEnabled,
        generateInput: generateInput,
        setInputSize: setInputSize,
        setAlgorithm: setSortingAlgorithm,
        setPlaybackTime: setPlayBackTime,
      }}
    >
      {children}
    </SortingContext.Provider>
  );
}

export function useSorting() {
  const context = useContext(SortingContext);
  if (!context) {
    throw new Error("useSorting must be used within a SortingContext");
  }
  return context;
}

function sort(input: number[], algorithm: SortingAlgorithm) {
  const inputCopy = [...input];
  switch (algorithm) {
    case SortingAlgorithm.QUICK:
      return quickSort(inputCopy);
    case SortingAlgorithm.BUBBLE:
      return bubbleSort(inputCopy);
    case SortingAlgorithm.INSERTION:
      return insertionSort(inputCopy);
    case SortingAlgorithm.GNOME:
      return gnomeSort(inputCopy);
    case SortingAlgorithm.MERGE:
      return mergeSort(inputCopy);
    case SortingAlgorithm.HEAP:
      return heapSort(inputCopy);
  }
}

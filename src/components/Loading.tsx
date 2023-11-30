import React, { useState, useEffect } from "react";
import { Loader } from "./styled/widgets/Widgets";
import {
  Center,
  LoaderBox,
  SpacedColumns,
} from "./styled/containers/containers";
import { AnimatedIcon, AnimatedGif } from "./styled/icons/icons";
import { ProgressBar } from "./styled/widgets/Widgets";
import { PageName } from "./styled/text/text";

interface LoadingProps {
  previousPage: string;
  incomingPage: string;
}

const Loading: React.FC<LoadingProps> = ({ previousPage, incomingPage }) => {
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const newProgress = prevProgress + 10; // Update based on your loading logic
        return newProgress <= 100 ? newProgress : 100;
      });
    }, 100); // Adjust the interval based on your loading logic

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <Loader>
      <Center>
        <LoaderBox>
          <AnimatedIcon move={loadingProgress} src="assets/walk.gif" />
          <ProgressBar
            width={loadingProgress}
            customstyles="position: inherit; height: 6px; background-color: green;"
          />
          <SpacedColumns>
            <PageName color="gray">{previousPage}</PageName>
            <AnimatedGif src="assets/loading.gif" />
            <PageName color="green">{incomingPage}</PageName>
          </SpacedColumns>
        </LoaderBox>
      </Center>
    </Loader>
  );
};

export default Loading;

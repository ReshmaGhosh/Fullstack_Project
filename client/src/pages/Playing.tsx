import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import PlayingCard from "../components/kulius/card/PlayingCard";
import { fetchPlaying } from "../components/features/playing/PlayingSlice";

function Playing() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaying());
  }, [dispatch]);

  const playing = useSelector(
    (state: RootState) => state.playing.playing
  );
  const status = useSelector((state: RootState) => state.playing.status);
  const error = useSelector((state: RootState) => state.playing.error);

  let content;
  if (status === "loading") {
    content = "Loading...";
  } else if (status === "succeeded") {
    content = playing.map((playing) => (
      <PlayingCard
        key={playing._id}
        _id={playing._id}
        title={playing.title}
        description={playing.description}
        method={playing.method}
        image={playing.image}
      />
    ));
  } else if (status === "failed") {
    content = `Error: ${error}`;
  }

  return <div>{content}</div>;
}

export default Playing;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchPartyTips } from "../components/features/partyTips/PartyTipsSlice";
import PartyTipsCard from "../components/kulius/card/PartyTipsCard";

function PartyTips() {
   const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPartyTips());
  }, [dispatch]);

  const partyTips = useSelector((state: RootState) => state.partyTips.partyTips);
  const status = useSelector((state: RootState) => state.partyTips.status);
  const error = useSelector((state: RootState) => state.partyTips.error);

  let content;
  if (status === "loading") {
    content = "Loading...";
  } else if (status === "succeeded") {
    content = partyTips.map((partyTips) => (
      <PartyTipsCard
        key={partyTips._id}
        _id={partyTips._id}
        title={partyTips.title}
        description={partyTips.description}
        method={partyTips.method}
        image={partyTips.image}
      />
    ));
  } else if (status === "failed") {
    content = `Error: ${error}`;
  }

  return <div>{content}</div>;
}


export default PartyTips;

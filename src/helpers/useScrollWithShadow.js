import React, { useState } from "react";

export function useScrollWithShadow() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [showTopShadow, setShowTopShadow] = useState(false);
  const [showBottomShadow, setShowBottomShadow] = useState(false);

  const onScrollHandler = (event) => {
    const newScrollTop = event.target.scrollTop;
    setScrollTop(newScrollTop);
    setScrollHeight(event.target.scrollHeight);
    setClientHeight(event.target.clientHeight);

    setShowTopShadow(newScrollTop > 0);
    setShowBottomShadow(clientHeight < scrollHeight - newScrollTop);
  };

  return {
    showTopShadow,
    showBottomShadow,
    onScrollHandler,
  };
}

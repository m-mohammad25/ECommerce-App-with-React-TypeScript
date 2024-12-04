import React, { Suspense } from "react";
import LottieHandler from "../LottieHandler/LottieHandler";

function PageSuspenseLoadingFallback({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <LottieHandler type="cartLoading" message="loading, please wait..." />
      }
    >
      {children}
    </Suspense>
  );
}

export default PageSuspenseLoadingFallback;

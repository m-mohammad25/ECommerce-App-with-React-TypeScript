import Lottie from "lottie-react";

import notFound from "@assets/lottieFiles/notFound.json";
import error from "@assets/lottieFiles/error.json";
import cartLoading from "@assets/lottieFiles/cartLoading.json";
import emptyCart from "@assets/lottieFiles/emptyCart.json";

const lottieAnimationTypes = {
  notFound,
  error,
  cartLoading,
  emptyCart,
};
type LottieHandlerProps = {
  type: keyof typeof lottieAnimationTypes;
  message?: string;
};

function LottieHandler({ message, type }: LottieHandlerProps) {
  const lottieType = lottieAnimationTypes[type];
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ marginTop: "15%" }}
    >
      <Lottie animationData={lottieType} style={{ width: "400px" }} />
      {message && (
        <h3 style={{ marginTop: "30px", fontSize: "19px" }}>{message}</h3>
      )}
    </div>
  );
}

export default LottieHandler;

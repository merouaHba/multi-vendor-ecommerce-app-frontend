import { LottieHandler } from "@/components/feedback";
import { Link } from "react-router-dom";


const Error = () => {
  return (
    <div className="container">
      <div
        className="d-flex flex-column align-items-center"
        style={{ marginTop: "15%" }}
      >
        <LottieHandler type="notFound" />
        <Link to="/" replace={true}>
          How about going back to safety?
        </Link>
      </div>
    </div>
  );
};

export default Error;

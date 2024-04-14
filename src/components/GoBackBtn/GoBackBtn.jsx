import { Link, useLocation } from "react-router-dom";
import css from "../GoBackBtn/GoBackBtn.module.css";

const GoBackBtn = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <div>
      <Link to={backLinkHref} className={css.btnBack}>
        Go back
      </Link>
    </div>
  );
};

export default GoBackBtn;

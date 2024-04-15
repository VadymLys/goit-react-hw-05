import { Link, useLocation } from "react-router-dom";
import css from "../GoBackBtn/GoBackBtn.module.css";
import { MdArrowBack } from "react-icons/md";

const GoBackBtn = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <div>
      <Link to={backLinkHref} className={css.btnBack}>
        <MdArrowBack className={css.arrow} />
        Go back
      </Link>
    </div>
  );
};

export default GoBackBtn;

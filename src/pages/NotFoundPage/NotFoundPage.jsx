import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import css from "../NotFoundPage/NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Page not found</h3>
      <GoBackBtn />
    </div>
  );
};

export default NotFoundPage;

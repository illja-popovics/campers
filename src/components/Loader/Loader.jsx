import { Circles } from 'react-loader-spinner';
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <Circles
        height="80"
        width="80"
        color="rgb(228, 72, 72)"
        ariaLabel="circles-loading"
      />
    </div>
  );
};

export default Loader;
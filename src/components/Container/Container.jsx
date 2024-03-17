import styles from "./Container.module.scss";

const Container = ({ children, containerClass }) => {
  const { container } = styles;
  const combinedClassName = `${container} ${containerClass}`;

  return <div className={combinedClassName}>{children}</div>;
};

export default Container;
// Container.tsx
import styles from "./layoutContainer.module.css";

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container}>{children}</div>;
}

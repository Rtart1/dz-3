import React from "react";
import Description from "../../components/description/Description";
import styles from "./mainPage.module.css";

const MainPage = () => {
  const data = { title: "Title", description: "description" };

  return (
    <div className={styles.main}>
      <h1>Main Page</h1>
      <Description data={data} />
    </div>
  );
};

export default MainPage;

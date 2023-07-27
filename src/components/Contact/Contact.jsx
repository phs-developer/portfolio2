import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>CONTACT WITH ME</h2>
      <div className={styles.contactContainer}>
        <ul data-aos="zoom-in-down" data-aos-duration="1500">
          <li>
            <a href="tel:010-3450-1944">010-3450-1944</a>
          </li>
          <li>
            <a href="mailto:phs970824@daum.net">phs970824@daum.net</a>
          </li>
          <li>
            <a href="https://blog.naver.com/gmltnscjswo">
              https://blog.naver.com/gmltnscjswo
            </a>
          </li>
          <li>
            <a href="https://github.com/phs-developer">
              https://github.com/phs-developer
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

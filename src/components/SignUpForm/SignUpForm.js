import styles from "./SignUpForm.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function SignUpForm() {
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("password", "");

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
    </form>
  );
}

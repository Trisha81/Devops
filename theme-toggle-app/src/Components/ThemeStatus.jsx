export default function ThemeStatus({ theme }) {
  return (
    <p>
      {theme === "light" ? (
        <span>🌞 Light Mode is Active</span>
      ) : (
        <span>🌙 Dark Mode is Active</span>
      )}
    </p>
  );
}

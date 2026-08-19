type FooterProps = {
  text?: string;
};

export default function Footer({
  text = "© 2026 Zurich",
}: FooterProps) {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "24px",
        marginTop: "40px",
        color: "#666",
        fontSize: "14px",
      }}
    >
      {text}
    </footer>
  );
}

<Footer text="© 2026 Zurich Insurance" />
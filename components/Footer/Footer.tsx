type FooterProps = {
  text?: string;
};

export default function Footer({
  text = "© 2026 Zurich",
}: FooterProps) {
  return (
    <footer className="mt-10 p-6 text-center text-sm text-gray-500">
      {text}
    </footer>
  );
}
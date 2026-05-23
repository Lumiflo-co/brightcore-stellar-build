import { MessageCircle } from "lucide-react";
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/447405326484?text=Hi%20Bright%20Core%20Construction%2C%20I%27d%20like%20a%20free%20estimate."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full text-white animate-float"
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

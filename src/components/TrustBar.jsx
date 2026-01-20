import { copy } from "../constants/copy";
import { BadgeCheck, Lock, MessageCircleMore, UserRound } from "lucide-react";

const iconMap = [BadgeCheck, UserRound, Lock, MessageCircleMore];

export default function TrustBar() {
  return (
    <section className="section pt-0">
      <div className="card">
        <div className="grid md:grid-cols-4 gap-4">
          {copy.trustBar.items.map((t, i) => {
            const Icon = iconMap[i] || BadgeCheck;
            return (
              <div
                key={t}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
              >
                <Icon size={18} />
                <span className="text-sm text-white/85">{t}</span>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-sm text-white/70">{copy.trustBar.micro}</p>
      </div>
    </section>
  );
}

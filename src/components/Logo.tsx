import Image from "next/image";

export function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <Image
        src="/itoilogo.png"
        alt="India To International logo"
        fill
        sizes="(max-width: 768px) 48px, 64px"
        className="object-contain"
        priority
      />
    </div>
  );
}

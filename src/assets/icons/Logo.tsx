import { Landmark } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex justify-start items-start">
      <Landmark className="text-primary mr-2" size={28} />
      <h1 className="text-2xl font-extrabold text-primary">Wallet Nest</h1>
    </div>
  );
};

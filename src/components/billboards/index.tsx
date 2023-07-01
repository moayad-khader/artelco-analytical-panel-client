import { memo } from "react";
import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
}

export const BillBoard: React.FC<Props> = ({
  title,
  subtitle,
  icon: Icon,
}) => {
  return (
    <div className="bg-white text-black pt-5 pb-1 bg-accent rounded-xl shadow-lg space-y-2 overflow-hidden border-l-8 border-[#1f77b4] border">
      <div className="px-5 pb-2 pt-0 flex flex-col items-center h-full justify-center">
        <div className="flex items-center mb-2">
          {Icon && (
            <div className="text-2xl  mr-2">
              <Icon size={24} />
            </div>
          )}
          <h3 className="text-xl  font-bold">{title}</h3>
        </div>
        <div className="text-center">
          {subtitle && <p className="text-6xl text-[#1f77b4] font-bold">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default BillBoard;

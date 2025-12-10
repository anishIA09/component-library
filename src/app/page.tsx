import { Circle } from "@/components/circle";
import { Senco } from "@/components/senco/senco";
import { Square } from "@/components/square";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Circle />
      <Square />
      <Senco />
    </div>
  );
}

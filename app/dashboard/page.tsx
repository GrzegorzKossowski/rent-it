import { ArrowLeftIcon } from "lucide-react";

export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <div className="p-6">
      <h1 className="text-6xl my-4">Strona główna panelu</h1>
      <div className="flex content-center gap-4">
        <ArrowLeftIcon /> Zapraszamy do kliknięcia w{" "}
        <span className="text-red-600">statystyki</span> na menu bocznym
      </div>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";

type ButtonProps = {
  id: number;
};

// A little prop drilling I know I know!
export default function TheButton({ id }: ButtonProps) {
  const router = useRouter();
  async function handleDelete() {
    const res = await fetch(`/api/deletemovie/${id}`, { method: "DELETE" });
    const status = res.status;
    if (status === 200) {
      router.refresh();
    }
  }
  return (
    <button className="btn btn-sm btn-error" onClick={handleDelete}>
      Delete
    </button>
  );
}

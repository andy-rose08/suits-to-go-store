import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (billboard_id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${billboard_id}`);

  return res.json();
};

export default getBillboard;

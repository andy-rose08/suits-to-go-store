"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { BriefcaseBusiness, Expand } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {

  const router = useRouter()

  const handleClick = () =>{
    router.push(`/product/${data?.product_id}`)
  }

  return (
    <div onClick={handleClick} className="bg-white group dark:bg-[#0D1A26] cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 dark:bg-[#132d46] relative">
        <Image
          alt={data?.name}
          src={data?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={
                <Expand
                  size={20}
                  className="bg-white dark:bg-[#0D1A25] text-gray-600
                  dark:text-white
                  "
                />
              }
            />
            <IconButton
              onClick={() => {}}
              icon={
                <BriefcaseBusiness
                  size={20}
                  className="bg-white dark:bg-[#0D1A25] text-gray-600
                  dark:text-white
                  "
                />
              }
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="font-semibold text-lg">
        <p>{data.name}</p>
        <p className="text-sm dark:text-gray-400 text-gray-500">
          {data.category?.name}
        </p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between ">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;

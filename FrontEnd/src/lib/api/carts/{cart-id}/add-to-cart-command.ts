import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";

import { DateVO } from "@/lib/date/Date";
import { httpService } from "@/lib/http";
import { Logger } from "@/lib/logger";

interface IAddToCartValues {
  productId: number;
  quantity?: number;
  cartId: number;
  userId: number;
}

interface IAddToCartDto {
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
}

export const useAddToCartMutation = () => {
  const { mutateAsync, isPending } = useMutation<
    void,
    unknown,
    IAddToCartValues
  >({
    mutationFn: (body: {
      cartId: number;
      userId: number;
      productId: number;
      quantity: number;
    }) =>
      httpService.put<void, IAddToCartDto>(`carts/${body.cartId}`, {
        userId: body.userId,
        date: DateVO.now(),
        products: [{ productId: body.productId, quantity: body.quantity ?? 1 }],
      }),
  });

  const handler = (body: IAddToCartValues) => {
    return mutateAsync(body)
      .then(async () => {
        // optionally mutate related data
      })
      .catch((e) => {
        // listen for a specific error and act respectively (e.g. throwing a specific error and catch it later)

        // notify backend about the error if needed
        Logger.error(
          "An error occurred during adding an item to the cart",
          e as Error
        );

        throw e;
      });
  };

  const isLoading = useMemo(() => isPending, [isPending]);

  return [handler, isLoading] as const;
};

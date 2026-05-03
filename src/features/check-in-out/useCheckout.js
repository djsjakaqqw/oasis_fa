import toast from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, status } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`booking #${data.id} successfully checkout`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error("There was error while check out  ");
    },
  });

  const isCheckingOut = status === "pending";

  return { checkout, isCheckingOut };
}

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, status } = useMutation({
    mutationFn: (bookinId) => deleteBookingApi(bookinId),
    onSuccess: () => {
      toast.success("booking successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  const isDeleting = status === "pending";
  return { isDeleting, deleteBooking };
}

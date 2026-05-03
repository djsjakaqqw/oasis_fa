import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { mutate: deleteCabin, status } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("cabins successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  const isDeleting = status === "pending";
  return { isDeleting, deleteCabin };
}

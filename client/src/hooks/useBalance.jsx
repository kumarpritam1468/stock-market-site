import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";

export const useBalance = () => {
    const queryClient = useQueryClient();

    const { mutate: addMoney, isPending: addingMoney } = useMutation({
        mutationFn: async (amount) => {
            try {
                const response = await fetch('/api/money/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({amount})
                });

                const data = await response.json();

                if (!response.ok) throw new Error(data.error || "Something Went Wrong");
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success("Added Money Successfully");
            queryClient.invalidateQueries({queryKey:['authUser']});
            document.getElementById(`addBox`).close();
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const { mutate: withdrawMoney, isPending: withdrawingMoney } = useMutation({
        mutationFn: async (amount) => {
            try {
                const response = await fetch('/api/money/withdraw', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({amount})
                });

                const data = await response.json();

                if (!response.ok) throw new Error(data.error || "Something Went Wrong");

                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success("Withdrawn successfully");
            queryClient.invalidateQueries({queryKey:['authUser']});
            document.getElementById(`withdrawBox`).close();
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return { addMoney, addingMoney, withdrawMoney, withdrawingMoney };
}
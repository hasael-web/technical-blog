import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginApi } from "@/service/auth";
import { useMutation } from "@tanstack/react-query";

const schema = z.object({
  username: z.string().min(1, "username required"),
  password: z.string().min(1, "password required"),
});

type RegisterFormValues = z.infer<typeof schema>;

interface IProps {
  callback: () => void;
}

const useRegister = (props: IProps) => {
  const { callback } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(schema),
  });

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (payload: { username: string; password: string }) =>
      loginApi(payload),
  });

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    mutate(data, {
      onSuccess: () => {
        callback();
      },
      onError: () => {},
    });
  };
  return {
    loading: isPending,
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
};

export default useRegister;

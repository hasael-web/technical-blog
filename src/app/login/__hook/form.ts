import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginApi } from "@/service/auth";
import { useMutation } from "@tanstack/react-query";

const schema = z.object({
  username: z.string().min(1, "username required"),
  password: z.string().min(1, "password required"),
});

type LoginFormValues = z.infer<typeof schema>;

interface IProps {
  callback: () => void;
}

const useLogin = (props: IProps) => {
  const { callback } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
  });

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (payload: { username: string; password: string }) =>
      loginApi(payload),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        localStorage.setItem("isLogin", String(true));
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

export default useLogin;

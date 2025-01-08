"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import useRegister from "./__hook/form";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowpassword] = useState(false);

  const onShowPassword = () => {
    setShowpassword(!showPassword);
  };

  const { errors, handleSubmit, loading, onSubmit, register } = useRegister({
    callback: () => {
      router.push("/login");
    },
  });

  return (
    <div className="w-full min-h-screen mx-auto flex bg-zinc-50 flex-col justify-center items-center">
      <div className=" w-[400px] bg-white shadow-md rounded-md flex flex-col gap-4 px-7 py-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Username</Label>
          <Input
            type="text"
            id="username"
            placeholder="example: hasaelbutarbutar80"
            {...register("username")}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Password</Label>
          <div className="flex gap-1">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="passowrd"
              {...register("password")}
            />
            <Button variant="link" onClick={onShowPassword}>
              {showPassword ? <Eye /> : <EyeOff />}
            </Button>
          </div>
        </div>
        <div className="w-full mt-2 flex gap-2 justify-end">
          <Link href={"/login"}>
            <Button className="flex-1">Login</Button>
          </Link>
          <div>
            <Button
              disabled={loading}
              className="flex-1"
              onClick={handleSubmit(onSubmit)}
            >
              {loading ? <LoaderCircle className="spin-in-1" /> : "Submit"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

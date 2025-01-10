"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";
import React from "react";
import CardHeaderContent from "../(component)/CardHeaderContent";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const onSignIn = () => {
    router.push("/login");
  };
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardHeaderContent />
      </CardHeader>
      <div className="px-2 mb-2  relative">
        <Separator />
        <div className="absolute -top-2.5 right-0 left-0 bottom-0">
          <p className=" text-center text-gray-400 text-sm">
            <span className="bg-white">Or continue with</span>
          </p>
        </div>
      </div>
      <CardContent className="mt-2">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Username</Label>
              <Input id="name" placeholder="example: bebecok75" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input
                id="name"
                type="password"
                placeholder="Password your account"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <div className="px-2">
        <Separator />
      </div>
      <CardFooter className="flex mt-2">
        <Button className="w-full" onClick={onSignIn}>
          Sign-In
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RegisterPage;

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import type { CardProps } from "../../../types/CardProps";



function RenterServices({ title, description, Icon }: CardProps) {
  return (
    <Card className=" shadow-none hover:shadow-sm hover:-translate-y-1 duration-300">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl  flex gap-2 font-semibold text-blue-700">
          <Icon />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-md">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default RenterServices;

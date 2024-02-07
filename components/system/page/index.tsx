"use client";

import Box from "@/components/system/box";
import { PropsWithChildren } from "react";
import { Separator } from "../../ui/separator";
import { Spacer } from "../spacer";
import { H1, Subtitle } from "../typography";

type Props = {
  title?: string;
  subtitle?: string;
  separator?: boolean;
  full?: boolean;
  marginTop?: boolean;
};

const Page = ({
  children,
  title,
  subtitle,
  separator,
  marginTop,
  full,
}: Props & PropsWithChildren) => {
  return (
    <Box full={full} className="mb-20 mt-8">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          {title && <H1>{title}</H1>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </div>
      </div>

      {separator ? (
        <>
          <Spacer small />
          <Spacer extraSmall />
          <Separator />
        </>
      ) : subtitle ? (
        <>
          <Spacer small />
          <Spacer extraSmall />
        </>
      ) : (
        <Spacer />
      )}

      {(separator || marginTop) && <div className="my-6" />}

      {children}
    </Box>
  );
};

export default Page;

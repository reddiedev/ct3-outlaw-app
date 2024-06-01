"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import React from "react";
import { env } from "~/env";

export default function GoogleCaptchaWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const recaptchaKey: string | undefined = env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey ?? "NOT DEFINED"}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}

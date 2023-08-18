"use client";

import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("campaign/messages");
  }, []);
  return <div>hey no page</div>;
};

export default NotFound;

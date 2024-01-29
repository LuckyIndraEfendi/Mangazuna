"use client";
import { useState, useCallback, useEffect } from "react";
const useModal = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);
  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        handleOpen();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleOpen]);
  return { search, setOpen, setSearch, open, handleOpen };
};

export default useModal;

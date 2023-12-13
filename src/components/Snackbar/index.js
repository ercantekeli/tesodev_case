import React, { useState, useEffect } from "react";

export const Snackbar = ({ message, duration, onClose }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (message) {
      setOpen(true);
      const timeoutId = setTimeout(() => {
        setOpen(false);
        onClose && onClose();
      }, duration || 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [message, duration, onClose]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        right: open ? 16 : -300, // Başlangıçta ekran dışında olacak, açık olduğunda sağa kayacak
        transition: "right 0.5s ease-in-out",
        backgroundColor: "#333",
        color: "#fff",
        padding: 16,
        borderRadius: 4,
        zIndex: 9999,
      }}
    >
      {message}
    </div>
  );
};

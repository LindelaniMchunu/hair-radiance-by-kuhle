// frontend/src/layouts/AuthLayout.tsx
import React from 'react';

interface AuthLayoutProps {
  children?: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="auth-layout">
      {children}
    </div>
  );
};
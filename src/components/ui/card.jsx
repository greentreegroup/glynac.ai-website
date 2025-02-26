import * as React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => <div className="mb-2">{children}</div>;
const CardTitle = ({ children }) => <h2 className="text-lg font-bold">{children}</h2>;
const CardDescription = ({ children }) => <p className="text-sm text-gray-500">{children}</p>;
const CardContent = ({ children }) => <div>{children}</div>;

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
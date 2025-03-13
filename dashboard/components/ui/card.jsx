export function Card({ className, ...props }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md  ${className || ''}`}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return (
    <div
      className={`p-6 pb-0 ${className || ''}`}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }) {
  return (
    <h3
      className={`text-lg font-bold tracking-tight ${className || ''}`}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return (
    <div
      className={`p-6 pt-4 ${className || ''}`}
      {...props}
    />
  );
}

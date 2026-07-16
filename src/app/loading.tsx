export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-primary border-t-secondary rounded-full animate-spin" />
        <p className="text-on-surface-variant font-body-md text-body-md">Loading...</p>
      </div>
    </div>
  );
}

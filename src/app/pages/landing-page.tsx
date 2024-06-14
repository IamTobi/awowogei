/**
 * v0 by Vercel.
 * @see https://v0.dev/t/z0lCrXeCxoL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button, Link } from "@mui/material";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">NEXT.js</h1>
      <ol className="list-decimal text-lg mb-8">
        <li>Get started by editing app/page.tsx</li>
        <li>Save and see your changes instantly.</li>
      </ol>
      <div className="flex space-x-4">
        <Button>Deploy now</Button>
        <Link href="#">Read our docs</Link>
      </div>
      <div className="flex space-x-4 mt-8">
        <Link href="#">Learn</Link>
        <Link href="#">Examples</Link>
        <Link href="#">Go to nextjs.org</Link>
      </div>
    </div>
  );
}

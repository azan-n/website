import { execFileSync } from "child_process";
import { join } from "path";

export async function GET() {
  const typFile = join(process.cwd(), "src/resume.typ");
  const pdf = execFileSync("typst", ["compile", typFile, "-"]);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=azan-n-resume.pdf",
    },
  });
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";


export default function home() {
  return (
    <div className="p-4">

      <div className="flex flex-col gap-y-4">

        <div>
          <Button variant="destructive">
            hello
          </Button>
        </div>
        <div>
          <Input placeholder="Im an input" />
        </div>
        <div>
          <Progress value={50} />
        </div>
      </div>
    </div>
  )
}


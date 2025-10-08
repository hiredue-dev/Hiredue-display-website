import {
	Card,
	CardDescription,
	CardContent,
	CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

function DimmedCard({ heading, description, className }: { heading: string, description: string, className?: string }) {

	const cardClass = "pt-3 rounded-lg shadow-md glass-3 from-brand-foreground/20 to-brand-foreground/0 bg-radial hover:from-brand-foreground/30 transition delay-150 duration-300 ease-in-out hover:to-brand-foreground/0";

	return (
		<Card className={cn(className, "flex flex-col opacity-30 card-anim bg-muted card-anim ", cardClass)}>
			<CardContent className="p-0 lg:p-auto">
				<CardHeader className="p-2 lg:pl-4 text-xl font-bold">{heading}</CardHeader>
				<CardDescription className="p-2 lg:pl-4 mt-3 text-muted-foreground max-w-lg">{description}</CardDescription>
			</CardContent>
		</Card>
	)
}

export default DimmedCard

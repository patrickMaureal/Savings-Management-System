import { Button } from "../chakra/ui/button"
import { DialogActionTrigger, DialogBody, DialogFooter } from "../chakra/ui/dialog"




const GoalForms = () => {
	return (
		<>

			<DialogBody>
																		
			</DialogBody>
			<DialogFooter>
				<DialogActionTrigger asChild>
					<Button variant="outline">Cancel</Button>
				</DialogActionTrigger>
				<Button>Save</Button>
			</DialogFooter>
		</>
	)
}

export default GoalForms
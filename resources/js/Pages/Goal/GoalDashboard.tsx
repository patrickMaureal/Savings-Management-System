import { Avatar } from "@/Components/chakra/ui/avatar"
import { Button } from "@/Components/chakra/ui/button"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { HStack, VStack } from "@chakra-ui/react"
import { Head } from "@inertiajs/react"

const GoalDashboard = () => {
	return (
		<AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Goals Dashboard
                </h2>
            }
        >
            <Head title="Goals" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
												<VStack>
													<Button>Click me</Button>
													<Button variant="solid">Solid</Button>
													<Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
												</VStack>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
	)
}

export default GoalDashboard
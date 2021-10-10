export class Task {
    id: number;
	executionId: string;
	taskName: string;
	priority: number;
	timeOfSchedule: string;
	timeOfExecution: string;
	timeOfEnding: string;
	endOk: number;
	machineLog: string;
    numRetries: number;
	machineDescription: string;
	requestedUrl: string;
	isTest: number;
}

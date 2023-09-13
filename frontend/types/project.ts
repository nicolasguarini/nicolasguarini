export type Project = {
	name: string;
	slug: string;
	type: string;
	excerpt: string;
	service: string;
	startedDate: string;
	finishedDate: string | null;
	url: string;
	images: any[];
	content: any[];
};

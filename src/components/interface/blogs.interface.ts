export interface BlogsType {
	exerpt: string;
	id: string;
	slug: string;
	title: string;
	image: {
		url: string;
	};
	authors: {
		name: string;
		avatar: {
			url: string;
		};
	};
	category: {
		label: string;
		slug: string;
	};
}

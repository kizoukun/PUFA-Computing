export type Event = {
    id: number;
    title: string;
    uniqueId: string;
    thumbnail: string;
    startDate: Date;
    endDate: Date;
    description: string;
    major?: {
        name: string;
    };
    organization: {
        name: string;
    };
};

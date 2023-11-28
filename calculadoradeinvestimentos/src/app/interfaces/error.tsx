export interface ErrorResponse {
    name: string,
    message: string,
    statusCode: Number,
    error: string,
    details: ErrorDetail
};

export interface ErrorDetail {
    body: [{
        message: string,
        path: Array<string>,
        type: string,
        context: {
            limit: number,
            value: number,
            label: string,
            key: string
        }
    }]
};

export interface ErrorToast {
    title: string,
    description: string,
    suggestion: string
}
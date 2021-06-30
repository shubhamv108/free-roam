class ClientError extends Error {
    constructor(args) {
        super(args);
        this.errorMessages = args.errorMessages;
    }
}
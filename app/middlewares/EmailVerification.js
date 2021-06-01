function process(request, response, next) {
    if (!request.user.isEmailVerified) {
        response.body('Email verification pending').ok();
    }
}
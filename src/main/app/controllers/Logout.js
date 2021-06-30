const { UserSession } = require('../repositories');

function process(userLogoutRequestVO) {
    UserSession.remove(userLogoutRequestVO.userSession.id);
}
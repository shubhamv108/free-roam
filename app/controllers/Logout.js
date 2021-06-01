const { UserSession } = require('../repositories/index');

function process(userLogoutRequestVO) {
    UserSession.remove(userLogoutRequestVO.userSession.id);
}
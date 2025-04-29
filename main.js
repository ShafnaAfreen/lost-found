import { UserManager } from "oidc-client-ts";
const BASE_URL = "https://subtle-jalebi-a0ce07.netlify.app";
const cognitoAuthConfig = {
    authority: "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_6B4QWK8Cx",
    client_id: "7lb9mng5i1vhoh5qr3j2626tv2",
    redirect_uri: "https://subtle-jalebi-a0ce07.netlify.app/signin.html",
    response_type: "code",
    scope: "email openid phone"
};

// Create a UserManager instance
export const userManager = new UserManager({ ...cognitoAuthConfig });

export async function signOutRedirect() {
    const clientId = "7lb9mng5i1vhoh5qr3j2626tv2";
    const logoutUri = "https://subtle-jalebi-a0ce07.netlify.app/signout.html";
    const cognitoDomain = "https://eu-north-16b4qwk8cx.auth.eu-north-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};

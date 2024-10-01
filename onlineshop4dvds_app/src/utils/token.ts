export const saveToken = (accessToken: string, remember: boolean): void => {
    if (remember) localStorage.setItem("accessToken", accessToken);
    else sessionStorage.setItem("accessToken", accessToken);
}
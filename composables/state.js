export const useIsLoading = () => {
    return useState('isLoading', () => true);
}

export const useLoaderText = () => {
    return useState('loaderText', () => 'Welcome');
};

export const useIsOpenMenu = () => {
    return useState('isOpenMenu', ()=> false);
}
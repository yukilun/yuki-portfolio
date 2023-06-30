export const useLoaderText = () => {
    return useState('loaderText', () => 'Welcome')
};

export const useIsOpenMenu = () => {
    return useState('isOpenMenu', ()=> false);
}
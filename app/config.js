var config;

if (__DEV__) {
    config = {
        env: 'dev',
        key: '121212122'
    };
}

if (__TEST__) {
    config = {
        env: 'test',
        key: '12121212226232636'
    };
}

if (__PRODUCTION__) {
    config = {
        env: 'production',
        key: '126232636'
    };
}

export default config;
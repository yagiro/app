window.onload = () => {
    const rootDom = document.getElementById('root');
    const helloDom = document.createElement('div');
    helloDom.innerHTML = 'Hello JS!';
    rootDom.append(helloDom);
};
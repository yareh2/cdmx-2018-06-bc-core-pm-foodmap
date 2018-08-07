const url =

window.onload = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderInfo(data);
    })
    .catch(error => {
        console.log('error');
    })
}

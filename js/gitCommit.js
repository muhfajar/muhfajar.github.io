fetch('https://api.github.com/repos/muhfajar/blog/commits', {mode: "cors"})
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            response.json().then(function (data) {
                let gitLink = document.getElementById("git");
                gitLink.href = data[0].html_url;
                gitLink.innerText = data[0].sha.substring(0, 7);
                return false;
            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

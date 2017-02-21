       function fillInTheCode() {
            var x = new XMLHttpRequest();
            x.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById('demo').innerHTML = this.responseText;
                }
            };
            x.open("GET", "scripts/ajax.txt", true);
            x.send();
        }
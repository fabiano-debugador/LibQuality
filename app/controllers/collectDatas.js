const fetch = require('node-fetch');
module.exports.collect = function (application, req, res) {
    for(let i = 1; i<= 7; i++) {
        fetch(`https://api.github.com/repos/facebook/react/issues?status=close&page=${i}&per_page=100`)
        .then(res => res.json())
        .then((json) => {
            let arrayDays = [];
            json.map((issue) => {
                const closed = new Date(issue.closed_at);
                const created = new Date(issue.created_at);
                const diff = Math.abs(closed.getTime() - created.getTime());
                const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
                arrayDays.push(days)
            })

            var total = arrayDays.reduce((total, number) => {
                return total += number;
            }, 0);
                console.log(arrayDays)
        });
    }
    res.send("Collect Datas");
}
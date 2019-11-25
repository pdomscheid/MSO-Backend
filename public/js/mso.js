class MSO {
    constructor() {
        //Nothing, lul.
    }

    /**
     * Returns whether there is any data cached for the given ID
     *
     * @param {*} said
     * @returns
     * @memberof MSO
     */
    hasData(said) {
        return localStorage.getItem(said) !== null;
    }

    /**
     * Caches the given data along with the given ID
     *
     * @param {*} said
     * @param {*} data
     * @memberof MSO
     */
    saveData(said, data) {
        localStorage.setItem(said,
            JSON.stringify({
                "time": new Date(),
                "data": data
            }));
    }

    /**
     * Returns the ID encoded in the URL ("/d/123"), returns null if not applicable
     *
     * @returns
     * @memberof MSO
     */
    getUrlSaid() {
        var match = /\/d\/(\d+)/.exec(window.location.pathname);
        return match ? match[1] : null;
    }

    /**
     * Fetches the data asssociated with the given ID from the backend
     *
     * @param {*} said
     * @param {*} res
     * @param {*} rej
     * @memberof MSO
     */
    fetchData(said, res, rej) {
        console.log(`Fetching "${said}"...`)
        $.get(`/storage/${said}`)
            .then((data) => {
                this.saveData(said, data);
                res(data);
            })
            .catch((err) => {
                rej(err);
            });
    }


    /**
     * Gets the data associated with the given ID by either retrieving cached data from localStorage or fetching it
     *
     * @param {*} said
     * @returns
     * @memberof MSO
     */
    getData(said) {
        return new Promise((res, rej) => {
            if (this.hasData(said)) {
                var entry = JSON.parse(localStorage.getItem(said));
                var ageMinutes = (new Date() - new Date(entry.time)) / (1000 * 60);
                if (ageMinutes < 0.5) return res(entry.data);
                return this.fetchData(said, res, rej);
            }
            return this.fetchData(said, res, rej);
        });
    }
}

window.MSO = new MSO();
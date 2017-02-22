let data = {
    debug: true,
    urls: [],
    currentUrl: {},
    baseApiUrl: "http://localhost:3000/"
};

/**
 * Instancie un container vue
 * @type {Vue}
 */
let vm = new Vue({
    el: '#vueApp',
    data: data,
    methods: {
        /**
         * Refresh la liste des URL des services front de madera
         */
        loadUrls: function () {
            this.$http.get(data.baseApiUrl, function (data) {
                vm.urls = data;
            });
        },

        /**
         * Récupere le current service au clic
         * @param url
         */
        getCurrentService: function (url) {
            vm.currentUrl = url;
        },

        /**
         * Récupere l'ensemble des micro services
         */
        getAllUrl: function () {
            this.$http.get(data.baseApiUrl, function (data) {
                if (data) {
                    vm.currentUrl = data;
                    console.log(vm.currentUrl);
                    vm.urls = [];
                    vm.currentUrl.forEach(function (obj) {
                        vm.urls = obj;
                    });
                    let showNotification = true;
                }
                else {

                }

            });
        }
    },

    ready: function () {
        this.getAllUrl();
    }

});


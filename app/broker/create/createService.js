let data = {
    debug: true,
    baseApiUrl: "https://broker-url.firebaseio.com/catalogue.json",
    newService: {
        name: "",
        url: "",
        description: ""
    },
    showSuccessNotification : false,
    showErrorNotification : false,
    showEmptyMessageNotification : false
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
         * Crée un nouveau service dans la catalogue 
         */
        addNewService: function () {
            if(data.newService != null && data.newService != undefined) {
                vm.dataToSend = data.newService;
                fetch(data.baseApiUrl, {
                    method: "POST",
                    body: JSON.stringify(vm.dataToSend)
                }).then(sucessPostService = (resp) => {
                    if(resp.status === 200) {
                      data.showSuccessNotification = true;
                      data.newService.name = "";
                      data.newService.url = "";
                      data.newService.description = "";
                    } 
                   else{
                       data.showErrorNotification = true
                   }
                }, errorPostService = () => {
                   data.showErrorNotification = true;
                });
            }
            else {
                
                data.showEmptyMessageNotification = true;
            }
        }
    }
});


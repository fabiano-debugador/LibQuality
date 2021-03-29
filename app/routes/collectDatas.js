module.exports = function(application) {
    application.get('/collectdata', function(req, res){
        application.app.controllers.collectDatas.collect(application, req, res);
    });
}   
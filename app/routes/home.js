
module.exports = (app)=>{
    app.get('/', (req, res)=>{
        app.app.controllers.home.home(app, req, res)
    })
};

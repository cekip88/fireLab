import { MainEventBus } from ".//MainEventBus.lib.js";
import { Ctrl } from "./Ctrl.js";
class Front{
    constructor(){
        const _ = this;
        _.ctrl = new Ctrl(null, null, {
            container: document.querySelector('body')
        });
        _.libs = new Map();
        _.components = new Map();
        _.services = null;
        _.menuShowed =false;
        //
        _.componentName = 'Front';
        MainEventBus.add(_.componentName,'showForm',_.showForm.bind(_));
        _.init();

    }
    async getLib(name,params={}){
        const _ = this;
        name = name.toLowerCase();
        if (_.libs.has(name)) return _.libs.get(name);
        let
            moduleStr = name.charAt(0).toUpperCase() + name.substr(1);
        const module = await import(`/js/${moduleStr}.lib.js`);
        const modulName = module[moduleStr];
        _.libs.set(name, modulName);
        return Promise.resolve(modulName);
    }
    showForm(clickData){
        console.log(clickData);
    }
    init(){
        const _ = this;
        _.getLib('modaler');
    }
}
new Front();



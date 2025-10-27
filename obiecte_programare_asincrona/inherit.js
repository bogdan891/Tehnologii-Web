class Software {
    run() {
        console.log("Software is running... ")
    }
}

class Plugin {
    constructor(name) {
        this.name = name;
    }

    show() {
        console.log(`Plugin: ${this.name} | Status: INSTALLED`);
    }
}

class Browser extends Software {
    constructor() {
        super();
        this.pluginsList = [];
    }

    installPlugin(plugin){
        console.log("The browser is installing a new plugin...");
        this.pluginsList.push(plugin);
        plugin.show();
    }
}

Firefox = new Browser();
Firefox.run();
Firefox.installPlugin(new Plugin("Plugin1"));
Firefox.installPlugin(new Plugin("Plugin2"));
module.exports = plop => {
    plop.setGenerator("component", {
        description: "Create a component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is this component's name?",
            },
            {
                type: "confirm",
                name: "stylesheet",
                message: "Does it need a stlying sheet",
                default: "Y/N",
            },
        ],
        actions: function(data) {
            var actions = [];

            actions.push({
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
                templateFile: 'templates/Component.js.hbs',
            });

            if(data.stylesheet) {
                actions.push({
                    type: 'add',
                    path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.css',
                    templateFile: 'templates/Component.css.hbs',
                });
            }

            return actions;
            }
        });
    plop.setGenerator("service", {
        description: "Create a service.",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is this name of the service?",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/service/{{pascalCase name}}/{{pascalCase name}}.js",
                templateFile: "templates/Component.js.hbs",
            },
        ],
    });
};

